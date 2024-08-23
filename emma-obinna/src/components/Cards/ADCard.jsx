import React from 'react';
import { Card } from 'react-bootstrap';


function AdCard() {
    return (
        <Card className="product-card mb-4">
          <Card.Body className="d-flex flex-column pro">
            <Card.Title>100% Organic Coffee Beans</Card.Title>
            <Card.Text className="flex-grow-1">Get the best deals</Card.Text>
              <button>Shop now</button>
            
          </Card.Body>
        </Card>
      );
}


export default AdCard;