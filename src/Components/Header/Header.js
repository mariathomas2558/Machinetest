import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './header.css'


function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='mainheader'>Zartek Technologies</Navbar.Brand>
          <Nav className="ml-auto">
           <Link to='/taskone' className='headerlink'>Pagination</Link>
           <Link to='/tasktwo' className='headerlink'>Toggle</Link>
           <Link to='/taskthree' className='headerlink'>InputDisplay</Link>
           <Link to='/taskfour' className='headerlink'>ParentChild</Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header