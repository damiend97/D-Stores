import React, { Component } from 'react';
import { commerce } from '../lib/commerce';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models';

class CustomerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerData: {
                username: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: ""
            }
        }
    }

    componentDidMount = () => {
        this.getUserData();
    }

    getUserData = async () => {
        let commerceCustomer;
        commerce.customer.about().then((customer) => {
            commerceCustomer = customer
            console.log(customer);
        }).catch((error) =>  {
            console.log(error);
        });

        try {
            const users = await DataStore.query(Users);
            let userEmail = commerceCustomer.email;

            users.map(user => {
                if(user.email === userEmail) {
                    let capFName = this.capitalize(user.first_name);
                    let capLName = this.capitalize(user.last_name);

                    this.setState({
                        username: user.username,
                        firstname: capFName,
                        lastname: capLName,
                        email: user.email,
                        phone: user.phone
                    })

                    console.log(user);
                }
            })
        } catch (error) {
            console.log(error);
        }

    
    }

    capitalize = (str) => {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    render() {
        return (
            <div>
                <div className="customer-info">
                    <div className="f-right">Hello {this.state.firstname}!</div>

                    <div className="ptitle">Account Info</div>
                    <div className="em2">
                        <div className="prow"><div>First Name</div><div>{this.state.firstname}</div></div>
                        <div className="prow"><div>Last Name</div><div>{this.state.lastname}</div></div>
                        <div className="prow"><div>Email</div><div>{this.state.email}</div></div>
                        <div className="prow"><div>Phone Number</div><div>{this.state.phone}</div></div>
                    </div>


                    <div className="ptitle">Your Orders</div>
                    <button onClick={this.getOrders}>Get Order</button>
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
                    <div className="sign-out-link" onClick={this.props.handleSignOut}>Sign Out</div>
                </div>
                    
            </div>
        );
    }
}

export default CustomerInfo;