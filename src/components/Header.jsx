import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>

<Navbar style={{backgroundColor:'white'}}>
        <Container>
          <Navbar.Brand href="#home">
           <Link to={'/'} style={{textDecoration:'none',color:'black',fontSize:'25px'}}>
           <img
              alt=""
              src="https://www.ranklogos.com/wp-content/uploads/2016/09/Video-Player-Logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           Media Player
           </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
       
</div>
  )
}

export default Header