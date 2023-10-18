import './App.css'
import Content from './content';
import course from './course.js';
import Headers from './header';
import Total from './total';

function App() {
  const titleCourse = course.name;
  console.log(titleCourse)

  const totalEjercios = course.parts.reduce((total, part) => total + part.exercises, 0);

  console.log(totalEjercios)

  return (
    <>
      <div className="card">
        <Headers titulo={titleCourse} />
        <Content />
        <Total total={totalEjercios} />
      </div>
    </>
  )
}

export default App;
