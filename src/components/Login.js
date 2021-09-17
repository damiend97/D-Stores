import React, { Component } from 'react';
import { commerce } from '../lib/commerce';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            login: ""
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        let username = document.getElementById("login-username").value;
        let password = document.getElementById("login-password").value;

        this.setState({
            username: username,
            password: password
        })

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
    
    resend = () => {
        this.props.customerLogin(this.state.username, this.state.pa)
    }

    render() {
        if(this.props.showValidate) {
            return (
                <div className="validate-message">
                    <div>
                        <h2>Verify identity</h2> <br /><br />
                        Please check your email <br /><br />
                        <div className="fine-print">This may take a few minutes. <br /><br /> OR <br /> <div onClick={this.resend} className="resend">Resend Code</div></div>
                    </div>
                </div>
            );
        } else {
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
}

export default Login;