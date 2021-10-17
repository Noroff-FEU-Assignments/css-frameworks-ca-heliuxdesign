import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import HomeIcons from './HomeIcons';

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="first" title="First">
                  <Container className="home-container">
                    <Row>
                      <Col sm={4}>
                        <Image src="images/tab-1.jpg"
                          fluid
                          alt="TV"
                        /> 
                      </Col>
                      <Col sm={8}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. 
                        <HomeIcons />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab eventKey="second" title="Second">
                <Container className="home-container">
                    <Row>
                      <Col sm={4}>
                        <Image src="images/tab-2.jpg"
                          fluid
                          alt="Pictures"
                        /> 
                      </Col>
                      <Col sm={8}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. 
                        <HomeIcons />
                      </Col>
                    </Row>
                  </Container >
                </Tab>
                <Tab eventKey="third" title="Third">
                <Container className="home-container">
                    <Row>
                      <Col sm={4}>
                        <Image src="images/tab-3.jpg"
                          fluid
                          alt="Window"
                        /> 
                      </Col>
                      <Col sm={8}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus.
                        <HomeIcons /> 
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
  )
}

export default ContentTabs;
