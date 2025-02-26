import { useState } from 'react'

import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users />
    </>
  )
}

export default App
