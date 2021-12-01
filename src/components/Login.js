import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="row">
                <form>
                    <h3>SIGN IN</h3>
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
                    <div className="checkbox">
                        <input type="checkbox"  id="remember-me" />
                        <label htmlFor="remember-me"> Remember Me</label>
                    </div>
                    <input type="submit" defaultValue="Sign in" className="button" />
                    <p>
                        Forget password ? <a href="#">Click Here</a>
                    </p>
                    <p>
                        Don't have an account ? <a href="#">Click One</a>
                    </p>
                </form>
            </div>

        );
    }
}

export default Login;