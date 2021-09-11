import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUp: false
        }
    }

    componentDidMount = () => {
        // cache existing log in here
    }
    
    loadSignup = () => {
        this.setState({
            signUp: true
        })
    }

    loadLogin = () => {
        this.setState({
            signUp: false
        })
    }

    handleSignOut = () => {
        this.props.customerLogout();
    }

    render() {
        if(this.props.loggedIn) {
            return (
                <div>
                    <div className="customer-info">
                        <div className="f-right">Hello Damien!</div>


                        <div className="ptitle">Account Info</div>
                        <div className="em2">
                            <div className="prow"><div>First Name</div><div>Damien</div></div>
                            <div className="prow"><div>Last Name</div><div>Duran</div></div>
                            <div className="prow"><div>Email</div><div>durandamien1997@gmail.com</div></div>
                            <div className="prow"><div>Phone Number</div><div>(xxx)xxx-3413</div></div>
                        </div>


                        <div className="ptitle">Your Orders</div>
                        <div className="em2">
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="sign-out-link" onClick={this.handleSignOut}>Sign Out</div>
                    </div>
                    
                </div>
            )
        }
        else {
            if(this.state.signUp) {
                return (
                    <SignUp customerSignup={this.props.customerSignup} loadLogin={this.loadLogin} />
                )
            }
            else {
                return (
                    <Login customerLogin={this.props.customerLogin} loadSignup={this.loadSignup} />
                )
            }
        }
        
    }
}

export default Profile;