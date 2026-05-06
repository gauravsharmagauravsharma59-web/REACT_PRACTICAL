import { useState } from 'react'
import Parent from './propspassing/Parent';
import Child from './propspassing/Child';
import Users from './component/users';
import './App.css'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React Props</h1>
      <Parent />
      <Users />
    </div>
  )
}

export default App
