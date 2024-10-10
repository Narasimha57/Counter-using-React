import { useState, } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () =>{
    if (counter > 5) {
      setCounter(counter - 1)
    }
  }
  return (
    <div id='container'>
    <h1>Counter Using React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>

    <button onClick={removeValue}>Remove Value {counter}</button>
    </div>
  )
}

export default App
