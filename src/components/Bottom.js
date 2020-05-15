import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'

const Bottom = () => {
    return (
      <>
      <div className="bg-info">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/patriciobordenave/"> Patricio Bordenave </a>
          </Container>
        </div>
        </div>
      </>
     );
}
 
export default Bottom;