import React from 'react'
import Contact from './components/Contact'
import Form from './components/Form'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/registration' element={<Form/>}></Route>

      </Routes>
    </>
  )
}

export default App
