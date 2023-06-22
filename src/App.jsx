import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello h1</h1>
      <Footer/>
    </>
  )
}

export default App
