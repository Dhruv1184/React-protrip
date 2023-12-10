import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
import './Form.css'
const Form = () => {
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName ] = useState('')
    const [contact, setContact ] = useState('')
    const [email, setEmail ] = useState('')
  
    // const [data, setData] = useState([]);
    const [error,seterror] = useState({})
    const [ValidiInput,setVAlidInput] = useState(false)
  
    const HandleOnChange = e => {
      // console.log(e.target.name);
      if(e.target.name == "firstName"){
        setFirstName(e.target.value)
        console.log(firstName)
      }
      else if(e.target.name == "lastName"){
        setLastName(e.target.value)
        console.log(lastName)
      }
      else if(e.target.name == "Contact"){
        setContact(e.target.value)
        console.log(contact)
      }
      else {
        setEmail(e.target.value)
        console.log(email)
      }
    }
  
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(firstName === ''){
          seterror(error =>({...error,first:'Please enter your first'}))
          setVAlidInput(false)
        }else{
          seterror(error=>({...error,first:''}))
          setVAlidInput(true)
        }
        
  
        if(lastName === ''){
          seterror(error=>({...error,last:'Please enter your last name'}))
          setVAlidInput(false)
  
        }else{
          seterror(error=>({...error,last:''}))
          setVAlidInput(true)
        }
       
  
        if(email === ''){
          seterror(error =>({...error,email:'Please enter your email id'}))
          setVAlidInput(false)
  
        }else{
          seterror(error=>({...error,email:''}))
          setVAlidInput(true)
        }
      
  
        if(contact === ''){
          seterror(error=>({...error,contact: 'Please enter your contact no.'}))
          setVAlidInput(false)
        }else if (contact.length < 10){
          seterror(error =>({...error,contact: 'Contact no. is less than 10 digit'}))
          setVAlidInput(false)
        }else if(contact.length > 10){
          seterror(error =>({...error,contact:'Contact no. is more than 10 digit'}))
          setVAlidInput(false)
        }else{
          seterror(error=>({...error,contact:''}))
          setVAlidInput(ValidiInput+1)
          setVAlidInput(true)
  
        }
      
      if(ValidiInput){
        confirm('Registration successfull!')
      }
    }
  
    return (  
        <>
        <Nav/>
      <div className='Body'>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <input type="text" placeholder='First Name' onChange={(e)=>HandleOnChange(e)} name="firstName"/>
            <br />
            <p>{error.first}</p>
          </div>
          <div>
            <input type="text" placeholder='Last name' name='lastName' onChange={(e)=>HandleOnChange(e)} />
            <br />
            <p>{error.last}</p>
          </div>
          <div>
            <input type="email" placeholder='Email' name='Email' onChange={(e)=>HandleOnChange(e)} />
            <br />
            <p>{error.email}</p>
          </div>
          <div>
            <input type="number" placeholder='Contact' name='Contact'onChange={(e)=>HandleOnChange(e)}/>
            <br />
            <p>{error.contact}</p>
          </div>
          <div>
            <button className='Submit' type='submit'>Register</button>
          </div>
        </form>
      
      </div>
      </>
    )
}

export default Form
