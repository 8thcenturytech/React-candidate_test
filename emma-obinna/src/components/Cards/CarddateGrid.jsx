import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardDate from './CardDate';
import AdCard from './ADCard';
import './style.scss'

const CardDateGrid = ({ products }) => {
  return (
    <Container>
        <div className='ads'>
        <Col xs={12} md={6} lg={4} xl={2} className="product-col">
            <AdCard />
          </Col>
        </div>
      <Row className="product-grid shift">
        {products.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={2} className="product-col-2">
            <CardDate product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardDateGrid;
