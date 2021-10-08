import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import CardGenerator from "./components/CardGenerator";
import React, { useState } from "react";
import ButtonRandom from "./components/ButtonRandom";


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

export const QuoteContext = React.createContext();

function App() {
  const [quoteState, setQuoteState] = useState(quoteObject);  


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
                      <QuoteContext.Provider value={setQuoteState}>
                      <ButtonRandom />
                      </QuoteContext.Provider>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Container className="card-container mt-4">
          <CardGenerator quoting={quoteState}/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
