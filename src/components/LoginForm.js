import React, { Component } from 'react';
import TabLogin from './TabLogin';



class LoginForm extends Component {
    
    CloseForm = () => {
        let loginForm = document.querySelector('.login-form-container');
        loginForm.classList.remove('active');
    }

    render() {

        return (
        
            <div className="login-form-container">
        
                <div id="close-login-btn" onClick={this.CloseForm} className="fas fa-times" />
                <div className="container_content-tabs">
                    <TabLogin />
                </div>
            </div>
        );
    }
}

export default LoginForm;