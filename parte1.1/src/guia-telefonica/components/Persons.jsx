/**
 * Componete que maneja la visualizacion de la lista de personas 
 */

import Person from "./Person";

const Persons = ({ persons, searchName, onDelete }) => (
    <div>
        <div>
            {persons.filter(person => person.name?.toLowerCase().includes(searchName.toLowerCase())).map(
                (person) => <Person
                    key={person.id}
                    person={person}
                    onDelete={onDelete}
                />)}
        </div>
    </div>
);

export default Persons;
