import React, { Component } from "react";

import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Category extends Component {
    render() {
        var showCategory = this.props.category.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <a href="#" className="swiper-slide box">
                        <div className="image">
                            <img src={item.img} />
                        </div>
                        <div className="content">
                            <h3>{item.name}</h3>
                            <div className="price">
                                ${item.price} <span>${item.price2}</span>
                            </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            );
        });
        return (
            <section className="categories" id="categories">
                <h1 className="heading">
                    <span>New Category</span>
                </h1>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="category-slider"
                >
                    {showCategory}
                </Swiper>

                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="category-slider"
                >
                    {showCategory}
                </Swiper>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
