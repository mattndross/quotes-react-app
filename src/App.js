import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card, Button, Form } from "react-bootstrap";
import CardGenerator from "./components/CardGenerator";


const quoteObject = [
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  }
];

function App() {

  
  return (
    <div className="App">
      <Container>
        <h1>The Quotes App</h1>
        <Form>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Term or author" />
                <Form.Text className="text-muted">
                  Search for a quote by terms or author
                </Form.Text>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Row>
                      <Button type="submit">Search</Button>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Button>RANDOM</Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Container className="card-container mt-4">
          <CardGenerator quoting={quoteObject}/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
