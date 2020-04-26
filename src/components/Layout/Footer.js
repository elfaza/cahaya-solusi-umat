import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer id="site-footer" className=" bgdark padding_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer_panel padding_bottom_half bottom20">
                                <a href="index.html" className="footer_logo bottom25"><img src="/assets/images/logo-white.png" alt="MegaOne" /></a>
                                <p className="whitecolor bottom25">Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
                                <div className="d-table w-100 address-item whitecolor bottom25">
                                    <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                                    <p className="d-table-cell align-middle bottom0">
                                        +62 857-1959-3421 <a className="d-block" href="mailto:cahayasolusiumat@gmail.com">cahayasolusiumat@gmail.com</a>
                                    </p>
                                </div>
                                <ul className="social-icons white wow fadeInUp" data-wow-delay="300ms">
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i> </a> </li>
                                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i> </a> </li>
                                    <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i> </a> </li>
                                    <li><a href="https://www.instagram.com/yukbersih/" target="_blank" className="insta"><i className="fab fa-instagram"></i> </a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                                <h3 className="whitecolor bottom25">Our Services</h3>
                                <ul className="links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/#about-us">About Us</a></li>
                                    <li><a href="/#our-process">Our Work Process</a></li>
                                    <li><a href="/#gallery">Gallery</a></li>
                                    <li><a href="/products">Our Products</a></li>
                                    <li><a href="/#contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer_panel padding_bottom_half bottom20">
                                <h3 className="whitecolor bottom25">Business hours</h3>
                                <p className="whitecolor bottom25">Our support available to help you 24 hours a day, seven days week</p>
                                <ul className="hours_links whitecolor">
                                    <li><span>Monday-Saturday:</span> <span>08.00-18.00</span></li>
                                    <li><span>Friday:</span> <span>09:00-21:00</span></li>
                                    <li><span>Sunday:</span> <span>09:00-20:00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
