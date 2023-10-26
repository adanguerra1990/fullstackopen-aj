/**
 * Componete que maneja la visualizacion de la lista de personas 
 */

import Person from "./Person";

const Persons = ({ persons, searchName }) => (
    <div>
        <div>
              {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())).map((person) => <Person key={person.id} person={person}/>)}
          </div>
    </div>
);

export default Persons;
