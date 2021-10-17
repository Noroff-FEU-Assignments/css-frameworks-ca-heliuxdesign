import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsBrands from '@fortawesome/free-brands-svg-icons';


function Footer() { 
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={{ span: 12 }}  md={{ span: 5}}>
            <FontAwesomeIcon icon={IconsBrands.faVimeoV} /> 
            <FontAwesomeIcon icon={IconsBrands.faYoutube} />
          </Col>
          <Col xs={{ span: 6 }} md={{ span: 3 }}>
              <a href="hello@aya.com">hello@aya.com</a>
          </Col>
          <Col xs={{ span: 6 }} md={{ span: 4 }}>
              <p>Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

