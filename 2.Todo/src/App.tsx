import { useState } from 'react'
import Todo from "./Todo"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      
    <Todo/>
  )
}

export default App
