import { useEffect, useState } from 'react'
import Filter from './Filter'
import '../../App.css'
import Persons from './Persons'
import PersonForm from './PersonForm'
import personServices from '../services/persons'


const App = () => {
    /**
     * Defincion de el estado para las personas,
     * el nuevo nombre
     * los nuevos numeros y
     * el nombre de la busquda
     */
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumbers, setNewNumbers] = useState('');
    const [searchName, setSearchName] = useState('');


    useEffect(() => {
        personServices
            .getAll()
            .then(inicialPersons => {
                console.log('value..', inicialPersons)
                setPersons(inicialPersons)
            })
    }, []);

    // Validar que los campos no estén vacíos
    const isValid = (name, number) => {
        if (name.trim().length === 0 || number.trim().length === 0) {
            alert('Name and numbers cannot be ampty');
            return false;
        }
        return true;
    };

    // Verificar si el nombre y el número ya están almacenados en el servidor
    const isDuplicate = (name, number) => {
        return persons.some(person => person.name === name && person.number === number)
    }

    //   Funcion para agregar un nuevo numero
    const addName = (event) => {
        event.preventDefault();

        // comprobamos que los campos no esten vacios
        if (!isValid(newName, newNumbers) || isDuplicate(newName, newNumbers)) {
            return alert(`The name ${newName} and number ${newNumbers} already exists`);
        }

        // Guardamos el los datos ingresados al formulario
        const newPerson = {
            name: newName,
            number: newNumbers,
            // id: persons.length + 1,
        };

        const personExists = persons.find(persons => persons.name === newName);

        if (personExists) {
            // Confirmar la actualización del número
            const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

            if (confirmUpdate) {
                // Actualizamos el número de la persona existente
                personServices
                    .updatePerson(personExists.id, newPerson)
                    .then(returnedPerson => {
                        console.log('ValueUpdate...', returnedPerson);
                        setPersons(persons.map(person =>
                            person.id !== personExists.id ? person : returnedPerson)
                        );
                        setNewName('');
                        setNewNumbers('');
                    })
            }
        } else {
            // Creamos una nueva persona
            personServices
                .cretePerson(newPerson)
                .then(returnedPerson => {
                    console.log('ValueCreate..', returnedPerson)
                    setPersons(persons.concat(returnedPerson));
                    setNewName('');
                    setNewNumbers('');
                })
        }
    };

    const handleDelete = (id) => {
        // Confirmar la eliminacion
        const person = persons.find(p => p.id === id);

        if (window.confirm(`Deleted ${person.name}`)) {
            // Eliminar del servidor
            personServices
                .deletePerson(id)
                .then(() => {
                    console.log('valueDelete..', id)
                    setPersons(persons.filter((person) => person.id !== id));
                })
                .catch(error => {
                    alert(`The person '${person.name}' was already deleted from server`);
                    setPersons(persons.filter((person) => person.id !== id));
                })
        }
    };

    // Funciones para manejar los cambios en los campos de entrada
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumbers(event.target.value);
    };

    const handleSearchName = (event) => {
        setSearchName(event.target.value);
    };

    return (
        <div className='card'>
            <h1>Phonebook</h1>
            <Filter
                searchName={searchName}
                handleSearchName={handleSearchName}
            />

            <h1>Add a new</h1>

            <PersonForm
                addName={addName}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumbers={newNumbers}
                handleNumberChange={handleNumberChange}

            />

            <h1>Numbers</h1>

            <Persons
                persons={persons}
                searchName={searchName}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;