import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigasi() {
  return (
    <Navbar className='navbar shadow' fixed='top'  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Rpl Film</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="/" className='nav-link text-light'>Home</a>
            <a href="#trending" className='nav-link text-light'>Trending</a>
            <a href="#superhero" className='nav-link text-light'>Super Hero</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;