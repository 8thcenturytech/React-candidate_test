import React from "react";
import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
    return (
        <Carousel controls={false} interval={4000}>
            <Carousel.Item>
                <div className="carousel-item-custom">
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/premium-photo/online-fashion-shopping-with-computer_23-2150400628.jpg"
                    alt="shopping item"
                    />
                    <div className="carousel-caption-custom">
                        <button>
                        Shop Now <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item-custom">
                    <img
                    className="d-block w-100"
                    src="https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg"
                    alt="shopping items"
                    />
                    <div className="carousel-caption-custom">
                        <button>
                        Shop Now <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;
