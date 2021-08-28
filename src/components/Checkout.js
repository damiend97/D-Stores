import React, { Component } from 'react';
import { commerce } from '../lib/commerce';
import $ from 'jquery';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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
    }

    verifySubmit = async (e, elements, stripe) => {
        /*
        e.preventDefault();

        // check form
        if($(".checkout-form")[0].checkValidity()) {
            // check stripe
            if (!stripe || !elements) {
                alert("There seems to be a problem, please try again.")
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
                    return;
                }


                let fName = $("input[name='firstName']");
                let cartItems;

                // retrieve cart items
                commerce.cart.retrieve().then((cart) => {
                cartItems = cart.line_items;
                console.log(cartItems);

                // capture order
                commerce.checkout.capture(this.state.cToken,
                    {
                        line_items: cartItems,
                        customer: {
                            firstname: fName,
                            lastname: 'Doe',
                            email: 'john.doe@example.com'
                        },
                        shipping: {
                            name: 'John Doe',
                            street: '123 Fake St',
                            town_city: 'San Francisco',
                            county_state: 'US-CA',
                            postal_zip_code: '94103',
                            country: 'US'
                        },
                        billing: {
                            name: 'John Doe',
                            street: '234 Fake St',
                            town_city: 'San Francisco',
                            county_state: 'US-CA',
                            postal_zip_code: '94103',
                            country: 'US'
                        },
                        payment: {
                            gateway: 'test_gateway',
                            card: {
                                number: '4242 4242 4242 4242',
                                expiry_month: '01',
                                expiry_year: '2023',
                                cvc: '123',
                                postal_zip_code: '94103',
                            }
                        }
                        // payment: {
                        //     gateway: 'stripe',
                        //     stripe: {
                        //         payment_method_id: paymentMethodResponse.paymentMethod.id
                        //     }
                        // }
                    }).then((response) => {
                        console.log(response);
                        console.log('[PaymentMethod]', paymentMethodResponse);
                        this.handleSubmit();
                    }).catch((error) => {
                        console.log("There was an error capturing the order...", error);
                    });

                }).catch((error) => {
                    console.log('There was an error retrieving the cart...', error);
                });

            }
        }
        */
    }

    render() {
        return (
            <div>
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                            <form className="checkout-form">
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
                                    <input className="required-field" required type="text" placeholder="Name" name="shippingName" />
                                </div>

                                <div className="grid-item grid-full">
                                    <input className="required-field" required type="text" placeholder="Street Address" name="shippingStreetAddress" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="Country" name="shippingCountry"/>
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" placeholder="City" name="shippingCity" />
                                </div>

                                <div className="grid-item">
                                <input className="required-field" required type="text" placeholder="County" name="shippingCounty" />
                                </div>

                                <div className="grid-item">
                                    <input className="required-field" required type="text" pattern="[0-9]*" placeholder="Zip Code e.g. xxxxx" name="shippingZip" />
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
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>

                        {/* <input className="required-field" required type="text" placeholder="Card Number" name="cardNumber" />
                    </div>
                    
                    <div className="grid-item">
                        <input className="required-field" required type="text" placeholder="Expiration (xx/xx)" name="cardExpiration" />
                    </div>

                    <div className="grid-item">
                        <input className="required-field" required type="text" placeholder="CVV" name="cardCVV" />
                    </div> */}
            </div>
        );
    }
}

export default Checkout;