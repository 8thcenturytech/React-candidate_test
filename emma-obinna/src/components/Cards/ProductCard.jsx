import React from 'react';
import { Card } from 'react-bootstrap';


const ProductCard = ({ product }) => {
  return (
    <Card className="product-card mb-4">
      <div className="card-image-container">
        {/* <Card.Img variant="top" src={product.title} alt='product image'/> */}
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
          <button>{'+'} Add</button>
        
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
