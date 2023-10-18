
const Part = ({ partes }) => {
  console.log(partes)

  return (
    <div>

      {partes.map((part, index) => {
        return (
          <p key={index} >
            {part.name} Ejercicio: {part.exercises}
          </p>
        );
      })}

    </div>
  );
}

export default Part;

