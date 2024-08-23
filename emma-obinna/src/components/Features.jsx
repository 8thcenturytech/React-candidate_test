import React from "react";


function Feature() {
    return (
        <div className="feature-list">
            <div className="feature">
            <i className="bi bi-clock" style={{ fontSize: '34px' }}></i>
                <h4>10 minute grocery now</h4>
                <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
            </div>
            <div className="feature">
            <i className="bi bi-gift" style={{ fontSize: '34px'}}></i>
                <h4>Best Prices & Offers</h4>
                <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess
                     & offers.</p>
            </div>
            <div className="feature">
            <i className="bi bi-square" style={{ fontSize: '34px'}}></i>
                <h4>Wide Assortment</h4>
                <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & 
                    other categories.</p>
            </div>
            <div className="feature">
            <i className="bi bi-arrow-repeat" style={{ fontSize: '34px' }}></i>
                <h4>Easy Returns</h4>
                <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. 
                    No questions asked <a>policy</a> .</p>
            </div>
        </div>
    )
}

export default Feature;