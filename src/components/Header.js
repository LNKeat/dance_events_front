import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg">
      <Container style={{border:'5px solid #3f3d56', alignContent: 'center'}}>
      <Image rounded src="./images/undraw_workout_gcgu.svg" width={200} height={200} />
        <Navbar.Brand href="/">Dance Event Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{alignContent: 'right'}}>
            <Nav.Link href="/">Events List</Nav.Link>
            <Nav.Link href="add">Add Event</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Image rounded src="./images/undraw_imagination_re_i0xi.svg" width={200} height={200} />

      </Container>
    </Navbar>
  );
}

export default Header;