import React, { useState } from 'react'
import './tasktwo.css'

export default function Tasktwo() {
    const [toggle,setToggle]=useState(true)
  return (
    <div className='App' >
       <div className='subapp'>
        {
            toggle===true?<div className='box'><h1 className='toggle'>Toggled</h1></div>:<div className='box2'><h1 className='toggle' ></h1></div>
        }
        </div>
        <div className='clsapp'>
        <button  className={toggle===true?"btn btn-success":"btn btn-warning"} onClick={()=>setToggle((status)=>!status)} >{toggle===true?"Hide":"Toggle"}</button>
        </div>
    </div>
  )
}
