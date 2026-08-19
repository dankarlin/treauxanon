import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <div className="treaux-logo me-3" style={{width: '40px', height: '40px', fontSize: '1rem'}}>
              T
            </div>
            TreauxAnon
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#episodes">Episodes</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#conspiracy">The Truth</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-treaux ms-2 px-3">
              Report French Activity
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header