import { useEffect, useState } from 'react'
import Filter from './Filter'
import '../../App.css'
import axios from 'axios'
import Persons from './Persons'
import PersonForm from './PersonForm'


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

    const hook = () => {
        console.log('efect');
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promesa Coomplatado');
                setPersons(response.data);
            }) 
    }
    useEffect(hook, [])

    //   Funcion para agregar un nuevo numero
    const addName = (event) => {
        event.preventDefault();

        // comprobamos que los campos no esten vacios
        if (newName.trim() === '' || newNumbers.trim === '') {
            alert('Name and numbers cannot be ampty');
            return;
        }

        // Comprobamos si el nombre y el numero existe
        const nameAndNumberExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && person.numbers === newNumbers);

        if (nameAndNumberExists) {
            alert(`The name ${newName} and number ${newNumbers} already exists`);
            return;
        }

        // Guardamos el los datos ingresados al formulario
        const newPerson = {
            name: newName,
            numbers: newNumbers,
            id: persons.length + 1,
        };
        console.log(newPerson)
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumbers('');
    }

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
            />
        </div>
    );
}

export default App;