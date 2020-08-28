import { Row, Col, Card, Container } from 'react-bootstrap';
export default function Footer(){
    return(
<div className="pt-4 my-md-5 pt-md-5 mt-3 border-top">
      <Container>
        <Row>
          <Col xs={6} md={4}>
          <h5>Liens Rapides</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Services et marchés</a></li>
          <li><a className="text-muted" href="#">Partenaires</a></li>
          <li><a className="text-muted" href="#">Accueil</a></li>

        </ul> 
          </Col>
          <Col xs={6} md={4}>
          <h5>Contactez nous</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Tel: +33 749 449 619/ +239 991 17586</a></li>
          <li><a className="text-muted" href="#">Location: Rue morta, ao lado do BISTP</a></li>
          <li><a className="text-muted" href="#">Mail: info@macgregor-ms.com</a></li>
          <li><a className="text-muted" href="#">Terms</a></li>
        </ul>
          </Col>
          <Col xs={6} md={4}>
          <small className="d-block mb-3 text-muted">&copy; 2020</small>
          </Col>
        </Row>

      <Row mt-2>
				<Col xs={12} sm={12} md={12} mt-2 text-center text-white>
						<p className="h6 text-center">© Made by ARCHIPEL 2020 </p>
				</Col>	
        </Row>
        </Container>
        </div>
    )
}

    