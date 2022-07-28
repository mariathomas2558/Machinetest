import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Textcontex } from './Parent'
import './taskfour.css'

export default function Child() {
    const [text,setText]=useContext(Textcontex)
  return (
    <div>
      <center>
       <Button style={{backgroundColor:'gray',color:'white'}} onClick={()=>setText("React Machine Test")} >Click me</Button>
        </center>
    </div>
  )
}
