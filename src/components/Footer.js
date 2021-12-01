import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Our Locations</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> VietNam{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> USA{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> England{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> France{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Korea{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Russia{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>Quick links</h3>
                        <a href="#home">
                            {" "}
                            <i className="fas fa-arrow-right" /> Home
                        </a>
                        <a href="#product">
                            {" "}
                            <i className="fas fa-arrow-right" /> Products
                        </a>
                        <a href="#categories">
                            {" "}
                            <i className="fas fa-arrow-right" /> Categories
                        </a>
                        <a href="#reviews">
                            {" "}
                            <i className="fas fa-arrow-right" /> Reviews
                        </a>
                        <a href="#blogs">
                            {" "}
                            <i className="fas fa-arrow-right" /> Blogs
                        </a>
                    </div>
                    <div className="box">
                        <h3>Extra links</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-arrow-right" /> Account Info
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-arrow-right" /> Ordered Items
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-arrow-right" /> Privacy Policy
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-arrow-right" /> Payment Method
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-arrow-right" /> Our Serivces
                        </a>
                    </div>
                    <div className="box">
                        <h3>Contact Info</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> 0396221385{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> 0382515273{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope"> hotuantd@gmail.com</i>
                        </a>
                        <img src="./img/worldmap.png" className="map" />
                    </div>
                </div>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-linkedin" />
                    <a href="#" className="fab fa-pinterest" />
                </div>
                <div className="credit">
                    {" "}
                    Created by <span>Mr. Web designer</span> | all rights reserved!
                </div>
            </section>

        );
    }
}

export default Footer;