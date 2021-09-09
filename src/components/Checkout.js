import React, { Component } from 'react';
import { commerce } from '../lib/commerce';
import $ from 'jquery';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Loading from './Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class Checkout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            total: ""
        }
    }
    componentDidMount = () => {
        commerce.cart.retrieve().then((cart) => {
            let subtotal = cart.subtotal.raw.toFixed(2);
            let taxes = (this.props.cartData.items.reduce(function(tot, arr) {
                return (tot + (arr.productQuantity * .37))
            }, 0)).toFixed(2)
    
            let shipping = (this.props.cartData.items.length * .50).toFixed(2);
    
            let total =  parseFloat(subtotal) + parseFloat(taxes) + parseFloat(shipping);
    
            console.log(total);

            this.setState({
                total: "Pay " + total.toString()
            })
        }).catch((error) => {
            console.log("There was an error getting the cart total...", error);
        });

        const form = document.getElementById("cform");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            return false;
        });
    }

    verifySubmit = async (e, elements, stripe) => {
        e.preventDefault();
        this.props.setLoading(true);

        // check form
        if($(".checkout-form")[0].checkValidity()) {
            // check stripe
            if (!stripe || !elements) {
                alert("There seems to be a problem, please try again.")
                this.props.setLoading(false);
            }
            else {
                const cardElement = elements.getElement(CardElement);
          
                // connect to stripe with cardElement
                const paymentMethodResponse = await stripe.createPaymentMethod({
                    type: 'card',
                    card: cardElement,
                });
            
                if (paymentMethodResponse.error) {
                    console.log('[error]', paymentMethodResponse.error);
                    this.props.setLoading(false);
                    return;
                }
                let fName = document.getElementById("cform").elements["firstName"].value;
                let lName = document.getElementById("cform").elements["lastName"].value;
                let email = document.getElementById("cform").elements["email"].value;
                let shipping = {
                    name: document.getElementById("cform").elements["shippingName"].value,
                    street: document.getElementById("cform").elements["shippingStreet"].value,
                    city: document.getElementById("cform").elements["shippingCity"].value,
                    state: "US-" + document.getElementById("cform").elements["shippingState"].value,
                    zip: document.getElementById("cform").elements["shippingZip"].value
                }
                let billing = {
                    name: document.getElementById("cform").elements["shippingName"].value,
                    street: document.getElementById("cform").elements["billingStreet"].value,
                    city: document.getElementById("cform").elements["billingCity"].value,
                    state: "US-" + document.getElementById("cform").elements["billingState"].value,
                    zip: document.getElementById("cform").elements["billingZip"].value
                }
                let card = "1234";

                this.props.setCustomerData(fName, lName, email, shipping, billing, card);
                this.props.checkoutFinal(paymentMethodResponse);
            }
        } else {
            this.props.setLoading(false);
        }
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
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                            <form className="checkout-form" id="cform">
                                <div className="grid-item grid-full shrink-height">
                                    <label htmlFor="firstName">Name</label>
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="First Name" name="firstName"/>
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="Last Name" name="lastName"/>
                                </div>

                                <div className="grid-item grid-full">
                                    <label htmlFor="email">Email</label>
                                    <input className="required-field" required type="email" placeholder="jondoe@domain.com" name="email" />
                                </div>

                                <div className="grid-item grid-full">
                                    <hr />
                                </div>
                                {/* Shipping ------------- */}

                                <div className="grid-item grid-full">
                                    <label htmlFor="shipping-address">Shipping Address</label>
                                    <input className="required-field" required type="text" placeholder="Full Name" name="shippingName" />
                                </div>
 
                                <div className="grid-item grid-full">
                                    <input className="required-field" required type="text" placeholder="Street Address" name="shippingStreet" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="City" name="shippingCity"/>
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="State" name="shippingState" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" pattern="[0-9]*" placeholder="Zip Code e.g. xxxxx" name="shippingZip" />
                                </div>

                                 {/* Billing ------------- */}

                                 <div className="grid-item grid-full">
                                    <label htmlFor="billing-address">Billing Address</label>
                                    <input className="required-field" required type="text" placeholder="Full Name" name="billingName" />
                                </div>
 
                                <div className="grid-item grid-full">
                                    <input className="required-field" required type="text" placeholder="Street Address" name="billingStreet" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="City" name="billingCity"/>
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="State" name="billingState" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" pattern="[0-9]*" placeholder="Zip Code e.g. xxxxx" name="billingZip" />
                                </div>

                                { /* Card --------- */}
                                <div className="grid-item grid-full">
                                    <hr />
                                </div>
                                <div className="grid-item grid-full">
                                    <label htmlFor="billing-address">Card Information</label>
                                </div>

                                <CardElement className="card-element" />
                                
                                <div className="grid-item" id="g5">
                                    <input onClick={(e) => this.verifySubmit(e, elements, stripe)} disabled={!stripe} type="submit" value={this.state.total} id="checkout-submit"/>
                                </div>
                                
                                {renderLoading()}
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>
            </div>
        );
    }
}

export default Checkout;