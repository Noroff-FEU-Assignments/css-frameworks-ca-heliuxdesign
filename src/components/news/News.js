
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaginationBar from "./PaginationBar";

function News() {
  return (
    <>
        <Container>
        <h1>News</h1>

        <PaginationBar />
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-1.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-2.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-3.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-4.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-5.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-6.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-7.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/news-8.jpg" />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="buttonNews">More</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        <PaginationBar />
        </Container>
      
    </>
  )
}

export default News
