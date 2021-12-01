import React, { Component } from 'react';

class Header extends Component {

    showSearch = () => {
        var searchForm = document.querySelector('.search-form');
        searchForm.classList.toggle('active');
    }

    onLoginForm = () => {
        let loginForm = document.querySelector('.login-form-container');
        loginForm.classList.toggle('active');
    }

    onScroll = () => {
        if (window.scrollY > 80) {
            document.querySelector(".header .header-two").classList.add('active');
        }else{
            document.querySelector(".header .header-two").classList.remove('active');
        }
    }

    render() {

        return (
            <header className="header" onScroll={this.onScroll}>
                <div className="header-one">
                    <a className="logo">
                        <i className="fab fa-google-wallet" /> HT Shop
                    </a>
                    <form className="search-form">
                        <input type="search" placeholder="Search..." id="search-box" />
                        <label htmlFor="search-box" className="fas fa-search" />
                    </form>
                    <div className="icons">
                        <div id="search-btn" onClick={this.showSearch} className="fas fa-search" />
                        <a className="fas fa-heart" />
                        <a className="fas fa-shopping-cart" />
                        <div id="login-btn" onClick={this.onLoginForm} className="fas fa-user" />
                    </div>
                </div>
                <div className="header-two">
                    <nav className="nav-menu">
                        <a href="#home">Home</a>
                        <a href="#product">Products</a>
                        <a href="#categories">Categories</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#blogs">Blogs</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;