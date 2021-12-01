import React, { Component } from 'react';

class Icons extends Component {
    render() {
        return (
            <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-plane" />
                    <div className="content">
                        <h3>Free Shipping</h3>
                        <p>Order over $100</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-lock" />
                    <div className="content">
                        <h3>Secure payment</h3>
                        <p>100 secure payment</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-redo-alt" />
                    <div className="content">
                        <h3>Easy returns</h3>
                        <p>10 days returns</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-headset" />
                    <div className="content">
                        <h3>24/7 Support</h3>
                        <p>Call us anytime</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Icons;