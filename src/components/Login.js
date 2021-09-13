import React, { Component } from 'react';

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        let username = document.getElementById("login-username").value;
        let password = document.getElementById("login-password").value;

        if(username === "" || password === "") {
            this.props.changeMessage("Fill all fields.");
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        } else {
            this.props.customerLogin(username, password);
        }
    }

    handleSet = () => {
        this.props.setSignup(true);
    }
    
    render() {
        return (
            <div>
                <div className="log-header">Login</div>
                <div className="profile-form-container">
                    <form action="#" className="login-form">
                        <input id="login-username" type="email" placeholder="Username" />
                        <input id="login-password" type="text" placeholder="Password" />
                        <input type="submit" onClick={this.handleLogin} value="Login"/>
                    </form>
                </div>
                <div className="signup-link" onClick={this.handleSet}>Create Account</div>
            </div>
        );
    }
}

export default Login;