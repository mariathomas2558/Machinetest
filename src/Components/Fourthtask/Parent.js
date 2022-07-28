import React, { createContext, useState } from 'react'
import Child from './Child'
import './taskfour.css'

const Textcontex=createContext({})

export default function Parent() {
    const [text,setText]=useState("Hello");
  
  return (
    
    <div className='App mt-5'>
    
      <h2 className='heading'>{text}</h2>
    
        <Textcontex.Provider value={[text,setText]}>
        <Child/>
        </Textcontex.Provider>
    </div>
     
  )
}
export {Textcontex};
