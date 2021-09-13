import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    
    validatePhoneForE164 = (phoneNumber) => {
        const regEx = /^\+[1-9]\d{10,14}$/;
    
        return regEx.test(phoneNumber);
    };

    handleSignup = (e) => {
        e.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let repass = document.getElementById("re-pass").value;
        let email = document.getElementById("email").value;
        let phone_number = document.getElementById("phone-number").value;

        if(username === "" || password === "" || repass === "" || email === "" || phone_number === "") {
            this.props.changeMessage("Fill all fields.");
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        } else {
            if (password === repass) {
                if(this.validatePhoneForE164(phone_number)) {
                    this.props.customerSignup(username, password, email, phone_number).then(() => {
                    });
                }
                else {
                    this.props.changeMessage("Reformat phone number.");
                    document.getElementById("mc").style.opacity = 1;
                    setTimeout(() => {
                        document.getElementById("mc").style.opacity = 0;
                    }, 1000);
                }
            } else {
                this.props.changeMessage("Passwords don't match.");
                document.getElementById("mc").style.opacity = 1;
                setTimeout(() => {
                    document.getElementById("mc").style.opacity = 0;
                }, 1000);
            }
        }
        
    }

    handleConfirm = (e) => {
        e.preventDefault();
        
        let username = document.getElementById("confirm-username").value;
        let code = document.getElementById("confirm-code").value;

        if (username === "" || code === "") {
            this.props.changeMessage("Fill all fields.");
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        } else {
            this.props.customerConfirm(username, code);
        }
    }

    handleResend = () => {
        let username = document.getElementById("confirm-username").value;

        if (username === "") {
            this.props.changeMessage("Enter username.")
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        } else {
            this.props.resendConfirmationCode(username);
            this.props.changeMessage("Code resent.")
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        }
    }

    handleSet = () => {
        this.props.setSignup(false);
    }

    render() {
        if (!this.props.showConfirm) {
            return (
                <div>
                    <div className="log-header">Signup</div>
                    <div className="profile-form-container">
                        <form action="#" className="signup-form">
                            <input id="username" type="text" placeholder="Username" />
                            <input id="email" type="email" placeholder="Email Address" />
                            <input id="password" type="text" placeholder="Password" />
                            <input id="re-pass" type="text" placeholder="Repeat Password" min="10" />
                            <input id="phone-number" type="text" placeholder="Phone Number" min="10" />
                            <input type="submit" onClick={this.handleSignup} value="Sign Up" />
                            <div className="signup-link" onClick={this.handleSet}>Login here</div>
                            <p className="centerp">Already have an account?</p>
    
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="log-header">Account Verification</div>
                    <div className="log-subhead">Please check your email for the verification code.</div>

                    <div className="confirm-form-container">
                        <form action="#" className="confirm-form">
                            <input id="confirm-username" type="text" placeholder="Username" />
                            <input type="text" id="confirm-code" placeholder="Verification Code" />
                            <input type="submit" onClick={this.handleConfirm} value="Submit Confirmation" />
                            <div className="resend-link" onClick={this.handleResend}>Resend Code</div>
                            <p className="centerp">Didn't receive the email?</p>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default SignUp;