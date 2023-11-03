
// Componente para Mostar la informcion de una persona
const Person = ({ person, onDelete }) => {

    const handleDelete = () => {
        console.log(person.id)
        onDelete(person.id)
    }
    
    return (
        <div>
            <p>{person.name}: {person.number}</p>
            <button onClick={handleDelete}>Deleted</button>
        </div>
    )
}

export default Person;
