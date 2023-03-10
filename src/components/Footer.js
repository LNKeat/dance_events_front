import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import winterroad from '../images/undraw_winter_road_mcqj (1).png'
import friends from '../images/undraw_friendship_mni7.png'
import world from '../images/undraw_Around_the_world_re_rb1p.png'





function Footer() {
  return (
    <Navbar expand="lg">
      <Container style={{ border: '5px solid #3f3d56', alignContent: 'center' }}>
        <Image rounded src={friends} width={200} height={200} />
        <Navbar.Brand href="/">Dance Event Tracker</Navbar.Brand>
        <Image rounded src={world} width={200} height={200} />
      </Container>
    </Navbar>
  );
}

export default Footer;