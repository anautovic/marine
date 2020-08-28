import {Navbar, Nav, NavDropdown, Form, FormControl, Button, img,Carousel
} from 'react-bootstrap';
import Link from 'next/link'
const AppLink = ({children, className, href}) =>
<Link href={href}>
  <a className= {className}>{children}</a>
</Link>
export default function Header() { 
    return (
        <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <img
        src="/Logo MML.PNG"
        width="150"
        height="60"
        className="d-inline-block align-top"
        alt="MacGregor Marine logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <AppLink href="/"><a className="nav-link mr-3">Accueil</a></AppLink>
      <AppLink href="/services"><a className="nav-link mr-3">Services et marchés</a></AppLink>
      <AppLink href="/particuliers"> <a className="nav-link mr-3">Partenaires</a></AppLink>
     
    </Nav>
    <Form inline>
    <Button className= "mr-5" variant="outline-success ">Mail: info@macgregor-ms.com</Button>
      <Button variant="outline-success">Contact: +33749449619</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Damen.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="barge.jpg"
      width="200"
      height="400"
      alt="Barge"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



</>
 )
}
