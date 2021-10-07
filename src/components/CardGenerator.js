import React from 'react'
import Card from 'react-bootstrap/Card'

const quoteObj = {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  };


export default function CardGenerator() {
    return (
        <Card className="mb-3">
            <Card.Body>
              <Card.Text>{quoteObj.quote}</Card.Text>
              <Card.Subtitle className="text-muted">-{quoteObj.author}</Card.Subtitle>
            </Card.Body>
          </Card>
    )
}
