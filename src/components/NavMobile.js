import React, { Component } from 'react';

class NavMobile extends Component {
    render() {
        return (
            <nav className="nav-mobile">
                <a href="#home" className="fas fa fa-home" />
                <a href="#product" className="fas fa-award" />
                <a href="#categories" className="fab fa-accusoft" />
                <a href="#reviews" className="fas fa fa-comments" />
                <a href="#blogs" className="fas fa fa-file-contract" />
            </nav>
        );
    }
}

export default NavMobile;