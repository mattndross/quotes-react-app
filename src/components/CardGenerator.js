import React from "react";
import Card from "react-bootstrap/Card";

const renderCard = (quoteObj) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>{quoteObj.quote}</Card.Text>
        <Card.Subtitle className="text-muted">-{quoteObj.author}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default function CardGenerator({quoting}) {
    if (quoting && Array.isArray(quoting)) {
       return quoting.map((quoteObj) => {
         return renderCard(quoteObj);
       });
     } else {
       return renderCard(quoting);
     }  
}

