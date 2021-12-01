import React, { Component } from "react";

class Newsletter extends Component {
    render() {
        return (
            <section className="newsletter">
                <form >
                    <h3>Subscribe for latest updates</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="box"
                    />
                    <input type="submit" defaultValue="Subscribe" className="button" />
                </form>
            </section>
        );
    }
}

export default Newsletter;
