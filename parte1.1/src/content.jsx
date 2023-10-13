
import Part from './part';

const Content = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <section>
            <Part parte={part1} ejercicio={exercises1} />
            <Part parte={part2} ejercicio={exercises2} />
            <Part parte={part3} ejercicio={exercises3} />
        </section>
    );
}

export default Content;
