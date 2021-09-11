import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    handleSignup = (e) => {
        e.preventDefault();
        this.props.customerSignup();
    }

    render() {
        return (
            <div>
                <div className="log-header">Signup</div>
                <div className="profile-form-container">
                    <form action="#" className="signup-form">
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Repeat Password" min="10" />
                        <input type="submit" onClick={this.handleSignup} value="Sign Up" />
                        <div className="signup-link" onClick={this.props.loadLogin}>Login here</div>
                        <p className="centerp">Already have an account?</p>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;