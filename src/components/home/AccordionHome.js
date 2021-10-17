import Accordion from "react-bootstrap/Accordion";
import Image from 'react-bootstrap/Image';
import HomeIcons from './HomeIcons';

function AccordionHome() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
              <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus.
                    <Image src="images/tab-1.jpg"
                      fluid
                      alt="TV"
                    /> 
                    <HomeIcons />
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus.
                    <Image src="images/tab-2.jpg"
                      fluid
                      alt="Pictures"
                    />
                    <HomeIcons />
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. 
                    <Image src="images/tab-3.jpg"
                      fluid
                      alt="Window"
                    />
                    <HomeIcons />
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
  )
}

export default AccordionHome;
