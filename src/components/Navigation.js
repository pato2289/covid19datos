import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
    return ( 
      <>
          <Navbar bg="info" variant="dark">
            <Navbar.Brand href="#home">Covid19</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar>
      </>
     );
}
 
export default Navigation;