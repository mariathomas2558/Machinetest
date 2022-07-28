import React, { useState } from 'react'
import './taskthree.css'
import { Button,Form } from 'react-bootstrap'

export default function Taskthree() {
  const [display,setdisplay]=useState('')

const [details,setDetails]=useState({
    name:"",
    email:"",
    phone:""
})
const handleChange=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
}
const handleClick=(e)=>{
    e.preventDefault();
    console.log(details);
    setdisplay(details)
}
  return (
  
    <div className='maindiv'>
      <center>
        <Form className='mainform ml-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Username" name='name' onChange={handleChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="email" placeholder="Email" name='email' onChange={handleChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" placeholder="Phone Number" name='phone' onChange={handleChange} required/>
      </Form.Group>
     
      
      <Button variant="primary" type="submit" className='formbtn' onClick={handleClick} required>
        Submit
      </Button>
    </Form>
    </center>
    <br/>
  <center>
    <div className='display'>
    <p>{display.name}</p>
    
    <p>{display.email}</p>
    
    <p>{display.phone}</p>
    </div>
    </center>

    </div>
  )
}
