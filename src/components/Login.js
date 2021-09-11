import React, { Component } from 'react';

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.customerLogin();
    }
    render() {
        return (
            <div>
                <div className="log-header">Login</div>
                <div className="profile-form-container">
                    <form action="#" className="login-form">
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <input type="submit" onClick={this.handleLogin} value="Login"/>
                    </form>
                </div>
                <div className="signup-link" onClick={this.props.loadSignup}>Create Account</div>
            </div>
        );
    }
}

export default Login;