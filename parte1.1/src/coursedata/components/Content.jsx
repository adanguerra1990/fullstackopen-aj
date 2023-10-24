import Part from './part';
import Header from './header';
import Total from './Total';

const Content = ({ course }) => {
    const totalEjercios = course.parts.reduce((total, part) => total + part.exercises, 0);

    console.log('value', totalEjercios)

    console.log(course)
    return (
        <div>
            <Header titulo={course.name} />
            {course.parts.map(part => {
                
                return (
                    <Part key={part.id} part={part} />
                )
            })}
            <Total total={totalEjercios} />
        </div>
    );
}

export default Content;
