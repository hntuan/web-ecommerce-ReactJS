import React, { Component } from 'react';
import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Review extends Component {
    render() {

        var ShowReview = this.props.review.map((review, index) => {
            return(
                <SwiperSlide key={index}>
                     <div className="swiper-slide box">
                            <img src={review.img}/>
                            <h3>{review.name}</h3>
                            <p>
                                {review.content}
                            </p>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                </SwiperSlide>
            )
        })
        return (
            <section className="reviews" id="reviews">
                <h1 className="heading">
                    {" "}
                    <span>Client's Reviews</span>
                </h1>
                <Swiper
                    spaceBetween={10}
                    grabCursor={true}
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
                    className="reviews-slider"
                >
                    {ShowReview}
                </Swiper>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        review: state.review,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);

