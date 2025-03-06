import { useState } from 'react'
import ValidationForm from './ValidationForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ValidationForm />
  )
}

export default App
