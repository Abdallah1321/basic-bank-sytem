import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="App-header sicky-nav">
        <NavBar />
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route exact path="/" element={<Home/>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
