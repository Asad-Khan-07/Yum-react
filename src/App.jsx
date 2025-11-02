import { useState } from 'react'
import './index.css'
import Navbar from './navbar'
import Body from './body'
import Header from './header'
// import Add from './add'
import { themeContext } from './mode'
import Example from './client&admin'
import Clientadmin from './client&admin'
import Client from './client'
import Adminpanel from './Adminpanel'
import Authpages from './Authpages'
import Extrapages from './Extrapages'
import Awesomefeature from './Awesomefeature'
import Footer from './footer'
function App() {
  // const [count, setCount] = useState(0)
    const [mode,setMode]=useState(false)
  return (
    <>
     <themeContext.Provider value={{mode,setMode}}>
    <Header/>
    <Clientadmin/>
    <Client/>
    <Adminpanel/>
    <Authpages/>
    <Extrapages/>
    <Awesomefeature/>
    <Footer/>
  </themeContext.Provider>
 
    </>
  )
}

export default App
