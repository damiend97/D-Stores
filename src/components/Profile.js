import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Loading from './Loading';
import { commerce } from '../lib/commerce';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models';
import CustomerInfo from './CustomerInfo';

Amplify.configure(awsconfig);

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUp: false,
            orderDetails: {},
            customerData: {
                username: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: ""
            }
        }
    }

    loadSignup = () => {
        this.props.loadSignup();
    }

    loadLogin = () => {
        this.props.loadLogin();
    }

    handleSignOut = () => {
        this.props.customerLogout();
    }

    render() {
        let {loadingValue} = this.props;
        const renderLoading = () => {
            if (loadingValue === true) {
                return ( 
                    <Loading />
                )
            }
        }

        if(this.props.loggedIn) {
            return (
                <div>
                    {renderLoading()}
                    <CustomerInfo setLoading={this.props.setLoading} loadingValue={this.props.loadingValue} customerToken={this.props.customerToken} handleSignOut={this.handleSignOut} />
                </div>
            )
        }
        else {
            if(this.props.signUp) {
                return (
                    <div>
                        {renderLoading()}
                        <SignUp setSignup={this.props.setSignup} showConfirm={this.props.showConfirm} resendConfirmationCode={this.props.resendConfirmationCode} customerConfirm={this.props.customerConfirm} changeMessage={this.props.changeMessage} customerSignup={this.props.customerSignup} loadLogin={this.loadLogin} />
                    </div>
                )
            }
            else {
                return (
                    <div>
                        {renderLoading()}
                        <Login showValidate={this.props.showValidate} setSignup={this.props.setSignup} changeMessage={this.props.changeMessage} customerLogin={this.props.customerLogin} loadSignup={this.loadSignup} />
                    </div>
                )
            }
        }
    }
}

export default Profile;