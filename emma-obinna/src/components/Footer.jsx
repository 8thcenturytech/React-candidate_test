import React from 'react';

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-8">
                        <h5>Categories</h5>
                        <ul className="list-unstyled break">
                            <div>
                                <li>Vegetables & Fruits</li>
                                <li>Breakfast & instant food</li>
                                <li>Bakery & Biscuits</li>
                                <li>Atta, rice & dal</li>
                                <li>Sauces & spreads</li>
                                <li>Organic & gourmet</li>
                                <li>Baby care</li>
                                <li>Cleaning essentials</li>
                                <li>Personal care</li>
                            </div>
                            <div>
                                <li>Dairy, bread & eggs</li>
                                <li>Cold drinks & juices</li>
                                <li>Tea, coffee & drinks</li>
                                <li>Masala, oil & more</li>
                                <li>Chicken, meat & fish</li>
                                <li>Paan corner</li>
                                <li>Pharma & wellness</li>
                                <li>Home & office</li>
                                <li>Pet care</li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <h5>Get to know us</h5>
                        <ul className="list-unstyled">
                            <li>Company</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Our Value</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <h5>For Consumers</h5>
                        <ul className="list-unstyled">
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Product Returns</li>
                            <li>FAQ</li>
                            <li>Shop Checkout</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <h5>Become a Shopper</h5>
                        <ul className="list-unstyled">
                            <li>Shopper Oppotunities</li>
                            <li>Become a Shopper</li>
                            <li>Earnings</li>
                            <li>Ideas & Guides</li>
                            <li>New Retailers</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <h5>Freshchart programs</h5>
                        <ul className="list-unstyled">
                            <li>Freshchart Programs</li>
                            <li>Gift Cards</li>
                            <li>Promos & Coupons</li>
                            <li>Freshcart Ads</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="row mt-4">
                    <div className="col-md-6">
                        Payment patners
                        <div>
                            <img src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg" alt="Amazon-pay" className="img-fluid mr-2" />
                            <img src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg" alt="American-express" className="img-fluid mr-2" />
                            <img src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg" alt="Mastercard" className="img-fluid mr-2" />
                            <img src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg" alt="Paypal" className="img-fluid mr-2" />
                            <img src="https://freshcart.codescandy.com/assets/images/payment/visa.svg" alt="Visa" className="img-fluid mr-2" />

                        </div>
                       
                    </div>
                    
                    <div className="col-md-6 text-md-right text-center ">
                        Get deliveries with FreshCart
                        <div>
                            <a href="https://play.google.com/store">
                                <img src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg" alt="Android" className="img-fluid mr-2" />
                            </a>
                            <a href="https://www.apple.com/app-store/">
                                <img src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg" alt="iOS" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className='ack'>
                        <div>
                        © 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by 
                        <p>codescandy</p>.
                        </div>

                        <div>
                        Follow us on
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
