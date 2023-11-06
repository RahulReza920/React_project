import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded mb-4'>Tailwind Test</h1>
     <br />
     <Card username="Rahul Reza" btnText="Click me"/>
     <Card username="Sayem Hasan" btnText="Visit me"/>

    </>
  )
}

export default App
