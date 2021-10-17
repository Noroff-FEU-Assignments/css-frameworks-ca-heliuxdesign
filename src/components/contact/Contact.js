
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'

function Contact() {

  return (
    <>
      <Container>
        <Row>
          <Col xs={{ order: 'last' }} md={{ span: 6, order: 'first' }}>
            <ContactForm />
          </Col>
          <Col className="contactContainer" xs={{ order: 'first' }} md={{ span: 6, order: 'last' }}>
          <div className="contactInfo">
            <FontAwesomeIcon icon={SolidIcons.faEnvelope} size="lg"/>
            <a href = "mailto: hello@aya.com">hello@aya.com</a>
          </div>
          <div className="contactInfo">
            <FontAwesomeIcon icon={SolidIcons.faPhone} size="lg"/>
            <a href="tel:1234567890">123 456 7890</a>
          </div>
          <div className="lineHeight">
          <address>
            <p>
            <FontAwesomeIcon icon={SolidIcons.faMapMarkerAlt} size="lg"/>
              123 Some Street</p>
            <p>somewhere</p>
            <p>Some City</p>
            <p>10000</p>
          </address>
          </div>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Contact

