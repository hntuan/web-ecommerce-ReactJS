import React, { Component } from 'react';

class Deal extends Component {
    render() {
        return (
            <section className="deal">
                <div className="content">
                    <h3>Deal of the day</h3>
                    <h1>Upto 50% off</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                        perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.
                    </p>
                    <a href="#" className="button">
                        Shop Now
                    </a>
                </div>
                <div className="image">
                    <img src="./img/deal-img.jpg" />
                </div>
            </section>
        );
    }
}

export default Deal;