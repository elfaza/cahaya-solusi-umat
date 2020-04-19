import React from 'react';
class Product extends React.Component {

    render() {
        return (
            <>
                <section id="main-banner-page" class="position-relative page-header shop-header section-nav-smooth parallax">
                    <div class="overlay overlay-dark opacity-6 z-index-1"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="page-titles whitecolor text-center padding_top padding_bottom">
                                    <h2 class="font-xlight">Welcome</h2>
                                    <h2 class="font-bold">To our products</h2>
                                    <h3 class="font-light pt-2">All this products are available</h3>
                                </div>
                            </div>
                        </div>
                        <div class="gradient-bg title-wrap">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 whitecolor">
                                    <h3 class="float-left">Products</h3>
                                    <ul class="breadcrumb top10 bottom10 float-right">
                                        <li class="breadcrumb-item hover-light"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item hover-light">Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="our-shop" class="padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
                                <h2 class="heading bottom30 darkcolor font-light2">Our <span class="font-normal">Products</span>
                                    <span class="divider-center"></span>
                                </h2>
                                <div class="col-md-8 offset-md-2 heading_space">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="300ms">
                                <div class="shopping-box bottom30">
                                    <div class="image" data-sale="40">
                                        <img src="/assets/images/products/DSC_6557.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Hand Sanitizer 100ml Cair Fliptop</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 23.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="400ms">
                                <div class="shopping-box bottom30">
                                    <div class="image" data-sale="30">
                                        <img src="/assets/images/products/DSC_6558.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a href="/product-detail" >Hand Sanitizer 100ml Cair Spray</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 23.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="500ms">
                                <div class="shopping-box bottom30">
                                    <div class="image">
                                        <img src="/assets/images/products/DSC_6562.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Hand Sanitizer 60ml Gel</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 15.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="500ms">
                                <div class="shopping-box bottom30">
                                    <div class="image">
                                        <img src="/assets/images/products/DSC_6586.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Hand Sanitizer 4lt</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 485.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="500ms">
                                <div class="shopping-box bottom30">
                                    <div class="image">
                                        <img src="/assets/images/products/DSC_6585.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Disinfectant 1lt</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 100.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="500ms">
                                <div class="shopping-box bottom30">
                                    <div class="image">
                                        <img src="/assets/images/products/DSC_6568.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Disinfectant 100ml Cair Spray</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 35.000,00</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="500ms">
                                <div class="shopping-box bottom30">
                                    <div class="image">
                                        <img src="/assets/images/products/DSC_6585.jpg" alt="shop" />
                                    </div>
                                    <div class="shop-content text-center">
                                        <h4 class="darkcolor"><a >Disinfectant 1lt</a></h4>
                                        <p></p>
                                        <h4 class="price-product">IDR 100.000,00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Product;
