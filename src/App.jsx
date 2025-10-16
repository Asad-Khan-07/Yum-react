import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Body from './body'
import Header from './header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className=''>hello world</div> */}
    <Navbar/>
    <Header/>
    <Body/>
    </>
  )
}

export default App
