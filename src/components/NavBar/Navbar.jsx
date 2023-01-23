import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Penguin from '../../assets/img/penguin.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="ligth" className='nav-color'>
      <Container className='fs-5'>
          <Navbar.Brand href="#home">
            <img
              src={Penguin}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Penguin store logo"
            />
          </Navbar.Brand>
        <Navbar.Brand className='fs-1' href="#home">Penguin Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Marcas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Puma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Topper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jordan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Remeras">Remeras</Nav.Link>
            <Nav.Link href="#Pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#Zapatillas">Zapatillas</Nav.Link>
            <Nav.Link href="#Carrito"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;