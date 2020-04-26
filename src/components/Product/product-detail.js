import React from 'react';

class ProductDetail extends React.Component {

    render() {
        return (
            <><section id="shop" class="padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-12 wow fadeInLeft heading-space" id="shop-dual-carousel" data-wow-delay="20ms" data-wow-duration="1100ms">
                            <div class="owl-carousel carousel-shop-detail owl-theme" id="syncCarousel">
                                <div class="item">
                                    <a href="images/shop-1.jpg" data-fancybox="gallery" title="Zoom In">
                                        <img src="/assets/images/products/DSC_6557.jpg" alt="Latest News" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-12 shop_info heading-space wow fadeInRight" data-wow-delay="20ms" data-wow-duration="1100ms">
                            <h2 class="heading darkcolor font-light2 bottom15"><span>Hand </span> Sanitizer <span class="divider-left"></span></h2>
                            <p class=" bottom10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            <div class="row">

                                <div class="col-md-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div class="tab-to-accordion heading_space">
                                        <ul class="tabset-list">
                                            <li class="active"><a href="#tab2">Detail</a></li>
                                        </ul>
                                        <div class="tab-container">
                                            <div id="tab1">
                                                <p class="pb-3">If you are a small business and you are interested in small rebranding then this is a perfect plan for you,
                                                having Five years experience in Blogging, photographing, Disgning and love to cycling,Writting,Singing and Traveling around the world
                                                </p>
                                            </div>
                                            <div id="tab2">
                                                <table class="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Volume</td>
                                                            <td>60ml, 100ml, 500ml, 1L, 4L, 5L</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Type</td>
                                                            <td>Presstop</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Item Weight</td>
                                                            <td>69 pounds</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>PKRT Nomor :</td>
                                                            <td>FK.01.03/VI/387-e/2020</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div id="tab3">
                                                <div class="profile_bg bottom30">
                                                    <div class="profile">
                                                        <div class="p_pic"><img src="images/profile4.jpg" alt="instructure" /></div>
                                                        <div class="profile_text">
                                                            <h5><strong>JOHN PARKER</strong> - <span>Awesome Quality</span></h5>
                                                            <ul class="comment">
                                                                <li><a href="javascript:void(0)" class="text-warning-hvr"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-alt"></i></a></li>
                                                            </ul>
                                                            <p>Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="profile_bg bottom30">
                                                    <div class="profile">
                                                        <div class="p_pic"><img src="images/profile3.jpg" alt="instructure" /></div>
                                                        <div class="profile_text">
                                                            <h5><strong>JANE MILLER</strong> - <span>Awesome Quality</span></h5>
                                                            <ul class="comment">
                                                                <li><a href="javascript:void(0)" class="text-warning-hvr"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-alt"></i></a></li>
                                                            </ul>
                                                            <p>Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add-review">
                                                    <h3 class="heading darkcolor font-light2 bottom25">Add Your Review<span class="divider-left"></span></h3>
                                                    <h5 class="pb-1">Your Rating : <span id="ratingText" class="text-warning">Please Select</span></h5>
                                                    <ul class="comment bottom15 top10">
                                                        <li><a href="javascript:void(0)" id="rattingIcon">
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                    <form class="findus" id="contact-form" onSubmit="return false">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div id="result1"></div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="name" class="d-none"></label>
                                                                    <input type="text" class="form-control" placeholder="Name" name="name" id="name" required />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="email1" class="d-none"></label>
                                                                    <input type="email" class="form-control" placeholder="Email *" name="email" id="email1" required />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 col-sm-12 mb-4">
                                                                <label for="message" class="d-none"></label>
                                                                <textarea placeholder="Comment *" name="message" id="message"></textarea>
                                                                <button class="button gradient-btn" id="btn_submit">Add Review</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ProductDetail;
