import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

function App() {
      const currentPage = window.location.href.split("/").slice(-1)[0];
   
      return (
        <Router>
          <div className="wrapper">
          <>
          <Navbar bg="light" expand="lg" variant="light">
            <Container className="continer-nav">
              <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '150px' }}
                  navbarScroll
                >
                  <Nav.Link exact href="/" className={currentPage === "" ? "active" : ""}>Home</Nav.Link>
                  <Nav.Link href="/news" className={currentPage === "news" ? "active" : ""}>News</Nav.Link>
                  <Nav.Link href="/contact" className={currentPage === "contact" ? "active" : ""}>Contact</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Form className="d-flex">
                  <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                  />
                  <Button variant="navbutton" size="sm">Go</Button>
                </Form>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </>
          </div>
          <Footer />
        </Router>
      );
    }
    
export default App;
