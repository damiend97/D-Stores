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
            },
            orderDetails: {
                orders: {
                    data: []
                }
            }
        }
    }

    componentDidMount = () => {
        this.props.setLoading(true);
        this.getCustomerAbout();
        this.getOrders();
    }

    getCustomerAbout = () => {
        let commerceCustomer;
        commerce.customer.about().then((customer) => {
            commerceCustomer = customer

            this.getUserData(commerceCustomer)
        }).catch((error) =>  {
            console.log(error);
        });
    }

    getUserData = async (commerceCustomer) => {
        try {
            const users = await DataStore.query(Users);
            let userEmail = commerceCustomer.email;

            users.map(user => {
                if(user.email === userEmail) {
                    let capFName = this.capitalize(user.first_name);
                    let capLName = this.capitalize(user.last_name);

                    this.setState({
                        customerData: {
                            username: user.username,
                            firstname: capFName,
                            lastname: capLName,
                            email: user.email,
                            phone: user.phone
                        }
                    }, () => {
                        this.props.setLoading(false);
                    })
                }
            })
        } catch (error) {
            console.log(error);
            this.props.setLoading(false);
        }

    
    }

    capitalize = (str) => {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    getOrders = () => {
        this.props.setLoading(true);
        var orderDetails;
        let customerID = commerce.customer.id();
        let customerDetails;
        let customerOrders = commerce.customer.getOrders(customerID);

        commerce.customer.about().then((customer) => {
            customerDetails = customer

            commerce.customer.getOrders(customerID).then((orders) => {
                customerOrders = orders

                orderDetails = {
                    customerID: customerID,
                    customerDetails: customerDetails,
                    orders: orders
                }

                this.setState({
                    orderDetails: orderDetails
                })

                this.props.setLoading(false);
            });
        });
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

        return (
            <div>
                {renderLoading}
                <div className="customer-info">
                    <div className="f-right">Hello {this.state.customerData.firstname}!</div>

                    <div className="ptitle">Account Info</div>
                    <div className="em2">
                        <div className="prow"><div>First Name</div><div>{this.state.customerData.firstname}</div></div>
                        <div className="prow"><div>Last Name</div><div>{this.state.customerData.lastname}</div></div>
                        <div className="prow"><div>Email</div><div>{this.state.customerData.email}</div></div>
                        <div className="prow"><div>Phone Number</div><div>{this.state.customerData.phone}</div></div>
                    </div>


                    <div className="ptitle">Your Orders</div>
                        {this.state.orderDetails.orders.data.map(order => {
                            var DOP = order.created;
                            var d = new Date(0);
                            d.setUTCSeconds(DOP);
                            let city = order.shipping.town_city
                            let ship;

                            if(city === undefined) {
                                ship = "No shipping data"
                            } else {
                                city = city.toLowerCase();
                                city = city.charAt(0).toUpperCase() + city.slice(1);
                                ship = order.shipping.street + " " + city + " " + order.shipping.county_state + ", " + order.shipping.postal_zip_code
                            }

                            return (
                                <div className="em2">
                                    <div className="order-box">
                                        <div className="order-header">
                                            Order #{order.id.substr(order.id.length - 4)}
                                        </div>
                                        <div className="order-info">
                                            <div className="prow"><div>Date of Purchase</div><div>{(((d.getMonth() > 8) ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9) ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear()).toString()}</div></div>
                                            <div className="prow"><div>Shipping</div><div>{ship}</div></div>
                                            <div className="prow boldrow"><div>Items</div><div className="centerhr"><hr /></div></div>
                                            {order.order.line_items.map(item => {
                                                let option;

                                                try {
                                                    option = "(" + item.selected_options[0].option_name +")";
                                                } catch (error) {
                                                    option = "(N/A)";
                                                }
                                                return (
                                                    <div>
                                                        <div className="prow"><div>{item.product_name} {option}</div><div>{item.line_total_with_tax.formatted_with_symbol} X {item.quantity}</div></div>
                                                    </div>
                                                )
                                            })}
                                            <div className="prow bolderrow"><div>Total</div><div>{order.order.total.formatted_with_symbol}</div></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    <div className="sign-out-link" onClick={this.props.handleSignOut}>Sign Out</div>
                </div>
                    
            </div>
        );
    }
}

export default CustomerInfo;