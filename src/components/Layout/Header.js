import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="site-header" id="header">
                <nav className="navbar navbar-expand-lg transparent-bg static-nav">
                    <div className="container">
                        <a className="navbar-brand center-brand" href="index.html">
                            <img src="/assets/images/logo-white.png" alt="logo" className="logo-default" />
                            <img src="/assets/images/logo-black.png" alt="logo" className="logo-scrolled" />
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#about-us" > About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#our-process">Our work process</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#gallery">Gallery</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                        <span></span> <span></span> <span></span>
                    </a>
                </nav>
                <div className="side-menu opacity-0 gradient-bg">
                    <div className="overlay"></div>
                    <div className="inner-wrapper">
                        <span className="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
                        <nav className="side-nav w-100">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages1">
                                        Home <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <div id="sideNavPages1" className="collapse sideNavPages">
                                        <ul className="navbar-nav mt-2">
                                            <li className="nav-item">
                                                <a className="nav-link" href="index.html">Standard Version</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-creative-agency.html">Creative Agency</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-light.html">Classic Light</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-video.html">Video Background</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-modern-agency.html">Modern Agency</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-classic-startup.html">Classic Startup</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-flat.html">Flat Version</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-innovative.html">Innovative Layout</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-one-page.html">One Page Layout</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" href="index-center-logo.html">Center Logo</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-bottom-nav.html">Bottom Nav</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-gray.html">Minimal Gray</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-parallax.html">Parallax Version</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-interactive-classic.html">Interactive Classic</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-design-studio.html">Design Studio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="index-particles.html">Interactive Particles</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="gallery.html">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages">
                                        Pages <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <div id="sideNavPages" className="collapse sideNavPages">
                                        <ul className="navbar-nav mt-2">
                                            <li className="nav-item">
                                                <a className="nav-link" href="team.html">Our Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="services.html">Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="services-detail.html">Service Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="testimonial.html">Testimonials</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="gallery.html">Gallery</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="gallery-detail.html">Gallery Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pricing.html">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="faq.html">FAQ's</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="404.html">Error 404</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#inner-2">
                                                    Account <i className="fas fa-chevron-down"></i>
                                                </a>
                                                <div id="inner-2" className="collapse sideNavPages sideNavPagesInner">
                                                    <ul className="navbar-nav mt-2">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="login.html">Login</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="register.html">Register</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="forget-password.html">Forget Password</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="support.html">Support</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#inner-1">
                                                    Shops <i className="fas fa-chevron-down"></i>
                                                </a>
                                                <div id="inner-1" className="collapse sideNavPages sideNavPagesInner">
                                                    <ul className="navbar-nav mt-2">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="shop.html">Shop Products</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="shop-detail.html">Shop Detail</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="shop-cart.html">Shop Cart</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages2">
                                        Blogs <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <div id="sideNavPages2" className="collapse sideNavPages">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="blog-1.html">Blog 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="blog-2.html">Blog 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="blog-detail.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="side-footer w-100">
                            <ul className="social-icons-simple white top40">
                                <li><a href="#"><i className="fab fa-facebook-f"></i> </a> </li>
                                <li><a href="#"><i className="fab fa-twitter"></i> </a> </li>
                                <li><a href="#"><i className="fab fa-instagram"></i> </a> </li>
                            </ul>
                            <p className="whitecolor">&copy; <span id="year"></span> Trax. Made With Love by ThemesIndustry</p>
                        </div>
                    </div>
                </div>
                <div id="close_side_menu" className="tooltip"></div>
            </header>
        );
    }
}

export default Header;
