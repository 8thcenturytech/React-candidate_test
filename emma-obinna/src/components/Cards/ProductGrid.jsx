import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <Container>
      <Row className="product-grid">
        {products.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={2} className="product-col">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
