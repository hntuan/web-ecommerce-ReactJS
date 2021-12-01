import React, { Component } from 'react';
import { connect } from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
    EffectCoverflow, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Home extends Component {
    render() {
        var showImg = this.props.home.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <a href="">
                        <img src={item.img} />
                    </a>
                </SwiperSlide>
            )
        })
        return (
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Upto 50% off</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt
                            nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!
                        </p>
                        <a href="#" className="button">
                            Shop now
                        </a>
                    </div>

                    <Swiper
                        centeredSlides={true}
                        breakpoints= {{
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
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                        className="books-slider"
                    >
                        {showImg}
                        <img src="./img/stand.png" className="stand" />
                    </Swiper>

                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);