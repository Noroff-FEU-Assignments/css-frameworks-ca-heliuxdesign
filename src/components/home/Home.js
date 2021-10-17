import AccordionHome from "./AccordionHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContentTabs from "./ContentTabs";
import Carousel from "./CarouselHome";




function Home() {
  return (
    <>
      <Carousel />

      <Container>
      <h1>We do YAY things</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
        pellentesque eu, pretium quis, sem. 
      </p>
      </Container>
      <Container>
        <Row>
          <Col>
            <AccordionHome />
            <div className="d-none d-md-block">
              <ContentTabs />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;

