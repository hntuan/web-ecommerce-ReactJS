import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="row">
                <form >
                    <h3>REGISTER</h3>
                    <span>Username</span>
                    <input
                        type="email"

                        className="box"
                        placeholder="Enter your email"
                    />
                    <span>Password</span>
                    <input
                        type="password"

                        className="box"
                        placeholder="Enter your password"
                    />
                    <span>Enter the Password</span>
                    <input
                        type="password"

                        className="box"
                        placeholder="Enter the password"
                    />
                    <input
                        type="submit"
                        defaultValue="Register"
                        className="button"
                    />
                    <p>
                        Is there an account ? <a href="#">Click Here</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Register;