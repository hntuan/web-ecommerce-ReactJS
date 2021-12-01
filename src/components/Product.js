import React, { Component } from "react";

import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";


import SwiperCore, { EffectCoverflow, Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay, Navigation]);

class Product extends Component {
    render() {
        var showProduct = this.props.product.map((product, index) => {
            return (
                <SwiperSlide key={index} className="swiper-slide box">
                    
                        <div className="icons">
                            <a href="#" className="fas fa-search" />
                            <a href="#" className="fas fa-heart" />
                            <a href="#" className="fas fa-eye" />
                        </div>
                        <div className="image">
                            <img src={product.img} />
                        </div>
                        <div className="content">
                            <h3>{product.name}</h3>
                            <div className="price">
                                ${product.price} <span>${product.price2}</span>
                            </div>
                            <a href="#" className="button">
                                Add to Cart
                            </a>
                        </div>
                   
                </SwiperSlide>
            );
        });
        return (
            <section className="product" id="product">
                <h1 className="heading">
                    {" "}
                    <span>Product</span>
                </h1>
                <Swiper
                    navigation={true}
                    centeredSlides={true}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        350: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="product-slider"
                >
                    {showProduct}

                </Swiper>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
