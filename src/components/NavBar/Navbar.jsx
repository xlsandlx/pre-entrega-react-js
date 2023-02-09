import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Penguin from '../../assets/img/penguin.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="ligth" className='nav-color'>
      <Container className='fs-5 text-dark'>
          <Navbar.Brand href="#home">
            <img
              src={Penguin}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Penguin store logo"
            />
          </Navbar.Brand>
        <NavLink to='/' className='fs-1 text-decoration-none text-dark fw-semibold' >Penguin Store</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/categoria/remeras' className='text-decoration-none text-dark ms-3' >Remeras</NavLink>
            <NavLink to='/categoria/pantalones' className='text-decoration-none text-dark ms-3' >Pantalones</NavLink>
            <NavLink to='/categoria/zapatillas' className='text-decoration-none text-dark ms-3' >Zapatillas</NavLink>
            <Link to='/cart' className='text-decoration-none text-dark  ms-2' ><CartWidget/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;