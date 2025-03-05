import { useState } from 'react'
import HiddenSearchBar from "./HiddenSearchBar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HiddenSearchBar />
  )
}

export default App
