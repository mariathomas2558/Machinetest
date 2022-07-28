import React, { useState } from 'react'
import './tasktwo.css'

export default function Tasktwo() {
    const [toggle,setToggle]=useState(true)
  return (
    <div className='App'>

      <h1></h1>
        {
            toggle===true?<h1 className='toggle'>Toggled</h1>:""
        }
        <button  className={toggle===true?"btn btn-success":"btn btn-warning"} onClick={()=>setToggle((status)=>!status)} >{toggle===true?"Hide":"Toggle"}</button>
    </div>
  )
}
