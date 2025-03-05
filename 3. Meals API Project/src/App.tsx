import { useState } from 'react'
import MealsAPI from './MealsAPI'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MealsAPI />
  )
}

export default App
