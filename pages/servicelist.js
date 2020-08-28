import { Row, Col, Card, Container } from 'react-bootstrap';
export default function Servicelist() {
    return(
        <div>
<Container>        
<Row className="mt-5">
<Col md={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">MacGregor Marine Services</h2>
    <ul>
        <li>
        Transport fluviomaritime dans le golfe de Guinée </li>
 
 <li>Mise à disposition d’attelage : Remorqueur + barge </li>
  
 <li>Remorquage et assistance</li> 
  
 <li>Transbordement  </li>
    </ul>
    
      </div>
      </div>
</Col>


<Col md={6}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="barq.jpg" />
  </Card>
</Col>


      </Row>
      </Container>
        </div>
    )
}