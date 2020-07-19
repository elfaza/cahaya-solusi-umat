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
                                    <a className="nav-link" href="/#gallery-product">Gallery</a>
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
                                    <a className="nav-link" href="/#about-us" > About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#our-process">Our work process</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#gallery-product">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="side-footer w-100">
                            <ul className="social-icons-simple white top40">
                                <li><a href="#"><i className="fab fa-facebook-f"></i> </a> </li>
                                <li><a href="#"><i className="fab fa-twitter"></i> </a> </li>
                                <li><a href="https://www.instagram.com/yukbersih/" target="_blank"><i className="fab fa-instagram"></i> </a> </li>
                            </ul>
                            <p className="whitecolor">&copy; 2020 Cahaya Solusi Umat. All Right Reserved.</p>
                        </div>
                    </div>
                </div>
                <div id="close_side_menu" className="tooltip"></div>
            </header>
        );
    }
}

export default Header;
