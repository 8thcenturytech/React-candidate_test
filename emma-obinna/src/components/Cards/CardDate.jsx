import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

function CardDate({ product }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <Card className="product-card mb-4">
      <div className="card-image-container">
        {/* <Card.Img variant="top" src={product.image} /> */}
        <div className="card-icons">
          <div className="icon-container">
            <button className="icon-btn"><i className="bi bi-eye"></i></button>
            <span className="icon-text">Quick View</span>
          </div>
          <div className="icon-container">
            <button className="icon-btn"><i className="bi bi-heart"></i></button>
            <span className="icon-text">Wishlist</span>
          </div>
          <div className="icon-container">
            <button className="icon-btn"><i className="bi bi-arrows-angle-expand"></i></button>
            <span className="icon-text">Compare</span>
          </div>
        </div>
      </div>
      <Card.Body className="d-flex flex-column pro">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">{product.description}</Card.Text>
        <Card.Text className="text-muted">${product.price}</Card.Text>
        <button>{'+'} cart</button>
      </Card.Body>
      <div className="date">
      <div className="d">{currentTime.getDate()} days</div>
        <div className="d">{currentTime.getHours()} hr</div>
        <div className="d">{currentTime.getSeconds()} sec</div>
        {currentTime.to}
      </div>
    </Card>
  );
}

export default CardDate;
