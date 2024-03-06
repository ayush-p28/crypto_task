import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyLogo from '../../assets/logo.png'


function Navabar() {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt="KoinX"
              src={MyLogo}
              width="100%"
              height="20"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-dark fw-bold" href="#link">Crypto Taxes</Nav.Link>
            <Nav.Link className="text-dark fw-bold" href="#link">Free Tools</Nav.Link>
            <Nav.Link className="text-dark fw-bold" href="#link">Resource Center</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navabar;