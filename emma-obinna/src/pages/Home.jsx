import React from "react";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/Carousel";
import HorizontalScrollSection from "../components/Category";
import sampleCategories from "../data/Samplecategory";
import Discount from "../components/Discount";
import ProductGrid from "../components/Cards/ProductGrid";
import sampleProduct from "../data/SampleProduct";
import sampleProduct2 from "../data/SampleProduct2";
import CardDateGrid from "../components/Cards/CarddateGrid";
import Feature from "../components/Features";
import Footer from "../components/Footer";
import '../styles/nav.scss'
import '../styles/caro.scss'
import '../styles/horizontal-scroll.scss'
import '../styles/discount.scss'
import '../styles/product.scss'
import '../styles/feature.scss'
import '../styles/footer.scss'


function HomeView() {
    return (
        <div className=''>
            <div className="nav-section">
             <Navbar />
            </div>

            <div className="carousel-section">
                <ImageCarousel />
            </div>
           
            <div className="horizontalscroll-section">
                <HorizontalScrollSection categories={sampleCategories} />
                <Discount />
                <div className="product-section">
                    <h3>Popular Products</h3>
                    <ProductGrid products={sampleProduct} />
                </div>
                <div className="card-date-section">
                    <h2>Daily Best Sells</h2>
                    <CardDateGrid products={sampleProduct2}/>
                </div>
                <div className="feature-section">
                    <Feature />
                </div>
            </div>
        </div>
    )
}

export default HomeView