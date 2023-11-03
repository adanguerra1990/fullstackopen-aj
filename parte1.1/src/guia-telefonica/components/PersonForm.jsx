/**
 * componete para manejar el formulario, para agregar una nueva persona
 */

const PersonForm = ({ addName, newName, handleNameChange, newNumbers, handleNumberChange  }) => (
    <form onSubmit={addName}>
        <div>
            Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            Numbers: <input value={newNumbers} onChange={handleNumberChange} />
        </div>
        <div>
            <button type='submit'>add</button>
        </div>
    </form>

);


export default PersonForm;
