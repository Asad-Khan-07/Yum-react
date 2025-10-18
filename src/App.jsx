import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Body from './body'
import Header from './header'
// import Add from './add'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className=''>hello world</div> */}
    <Navbar/>
    <Header/>
    <Body/>
    {/* <Add/> */}
    </>
  )
}

export default App
