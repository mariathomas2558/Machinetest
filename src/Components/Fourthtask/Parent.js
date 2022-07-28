import React, { createContext, useState } from 'react'
import Child from './Child'
import './taskfour.css'

const Textcontex=createContext({})

export default function Parent() {
    const [text,setText]=useState("Hello");
  
  return (
    
    <div className='App' style={{margin:'100px',}}>
      <center>
      <h2 className='heading'>{text}</h2>
        </center>
        <Textcontex.Provider value={[text,setText]}>
        <Child/>
        </Textcontex.Provider>
       
    </div>
     
  )
}
export {Textcontex};
