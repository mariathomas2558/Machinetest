import React from 'react'
import { Container, Nav, Navbar, NavDropdown, TabContainer } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './header.css'


function Header() {
  return (
    <div>
        

<Navbar bg="light" expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand ><Link to='/' style={{textDecoration:"none" ,color:"black",fontWeight:"bolder"}}> Zartek Technologies</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          <Link to='/taskone' className='headerlink text-dark ml-4 '>Pagination</Link>
           <Link to='/tasktwo' className='headerlink text-dark ml-4'>Toggle</Link>
           <Link to='/taskthree' className='headerlink text-dark ml-4'>InputDisplay</Link>
           <Link to='/taskfour' className='headerlink text-dark ml-4'>ParentChild</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header