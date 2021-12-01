import React, { Component } from 'react';

import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Blogs extends Component {
    render() {
        var showBlog = this.props.blogs.map((blog,index) => {
            return (
                <SwiperSlide key={index}>
                    <div className="swiper-slide box">
                            <div className="image">
                                <img src={blog.img} />
                            </div>
                            <div className="content">
                                <h3>{blog.name}</h3>
                                <p>
                                    {blog.content}
                                </p>
                                <a href="#" className="button">
                                    Read more
                                </a>
                            </div>
                        </div>
                </SwiperSlide>
            )
        })
        return (
            <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    <span>Our Blogs</span>
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
                    className="blogs-slider"
                >
                    {showBlog}
                </Swiper>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
