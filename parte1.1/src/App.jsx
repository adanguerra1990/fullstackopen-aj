import './App.css'
import Header from "./header"
import Content from "./content"
import Total from "./total"

function App() {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <div className="card">
        <Header titulo={course} />
        <Content />
        <Total total={exercises1 + exercises2 + exercises3} />
      </div>
    </>
  )
}

export default App
