import React, { Component } from 'react';
import { commerce } from '../lib/commerce';
\import Checkout from './Checkout';
import $ from 'jquery';
import Loading from './Loading';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        }
    }
    showCart = () => {
        commerce.cart.retrieve().then((cart) => {
            console.log(cart);
        }).catch((error) => {
            console.log('There was an error retrieving the cart...', error);
        });
    }

    refreshCart = () => {
        commerce.cart.refresh().then(() => {
            this.props.clearCart();
            console.log("emptied cart");
        }).catch((error) => {
            console.log('There was an error emptying the cart...', error);
        });
    }
    
    fetchProducts = () => {
        commerce.products.list().then((products) => {
            console.log(products.data);
        }).catch((error) => {
            console.log('There was an error fetching the products...', error);
        });
    }

    getCart = () => {
        commerce.cart.contents().then((items) => {
            console.log(items);
        }).catch((error) => {
            console.log('There was an error getting the cart contents...', error);
        });
    }

    getTotal = () => {
        commerce.cart.retrieve().then((cart) => {
            console.log(cart.subtotal.raw);
        }).catch((error) => {
            console.log('There was an error getting the cart subtotal...', error);
        });
    }

    showForm = () => {
        $(".checkout-but").fadeToggle(1000);
        $(".clear-but").fadeToggle(1000);
        $(".checkout-form").fadeToggle(1000);
        $(".checkout-form").css("display","grid");
        $(".cart-data").css("width", "100%");
        $(".cart-total").css("text-align","center");
        $(".cart-container").css("overflow-y","hidden");
    }

    callBack = () => {
        commerce.cart.retrieve().then((cart) => {
            this.setState({
                total: cart.subtotal.raw
            })
        });
    }
    
    render() {
        console.log(this.props.cartData);
        let {loadingValue} = this.props;

        const renderLoading = () => {
            if (loadingValue === true) {
                return ( 
                    <Loading />
                )
            }
        }

        if (this.props.cartData.items.length > 0) {
            return (
                <div className="cart-container">
                {renderLoading()}
                    <div className="cart-list">
                        <div className="item-text">Your Cart</div>
                        {this.props.cartData.items.map((item, num) => {
                            return (
                                <div className="cart-item" key={item.productData.productId*num}>
                                    <div className={`cart-item-image ${item.productData.productImage}`}></div>
    
                                    <div className="cart-item-data">
                                        <div className="cart-item-name">{item.productData.productName}</div>
                                        <div className="cart-item-s-q">( {item.productSize} ) x {item.productQuantity} <div className="min-but" onClick={() => {this.props.changeItemQuantity(item.productData.productId, 0, item.itemId, item.productSize, item.productData.productKey)}}>-</div> <div className="plus-but" onClick={() => {this.props.changeItemQuantity(item.productData.productId, 1, item.itemId, item.productSize, item.productData.productKey)}}>+</div> </div>
                                        <div className="cart-item-total">Total : ${(parseInt(item.productData.productPrice) * parseInt(item.productQuantity)).toFixed(2)}</div>
                                    </div>
                                    <div className="remove-but" onClick={() => this.props.removeFromCart(item.productData.productId, item.itemId, item.productSize)}>x</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-data">
                        <div className="cart-data-center">Cart Totals</div>
                        <div className="cart-total">
                            Subtotal: ${(this.props.cartData.items.reduce(function(tot, arr) {
                        return (tot + (arr.productData.productPrice * arr.productQuantity))
                    }, 0)).toFixed(2)}
                            <br/>
                            
                            Taxes: ${(this.props.cartData.items.reduce(function(tot, arr) {
                        return (tot + ((arr.productData.productPrice * .15) * arr.productQuantity))
                    }, 0)).toFixed(2)}

                            <br/>
                            Shipping: $0.00
                            <br/>
                            <div className="main-total">
                                Total: $
                                {
                                    (
                                        (this.props.cartData.items.reduce(function(tot, arr) {
                                            return (tot + (arr.productData.productPrice * arr.productQuantity))
                                        }, 0)) +
                                        this.props.cartData.items.reduce(function(tot, arr) {
                                            return (tot + ((arr.productData.productPrice * .15) * arr.productQuantity))
                                        }, 0)
                                    ).toFixed(2)
                                }
                            </div>
                        </div>
                        <div className="checkout-but" onClick={this.showForm}>Checkout</div>
                        <div className="clear-but" onClick={this.refreshCart}>Clear Cart</div>
                        <Checkout loggedIn={this.props.loggedIn} setCustomerData={this.props.setCustomerData} loadingValue={this.props.loadingValue} setLoading={this.props.setLoading} checkoutFinal={this.props.checkoutFinal} cartData={this.props.cartData} handleSubmit={this.props.handleSubmit} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart-container">
                    <div className="cart-list">
                        <div className="item-text">Your Cart</div>
                        {this.props.cartData.items.map(item => {
                            return (
                                <div className="cart-item" key={item.productData.productId}>
                                    <div className={`cart-item-image ${item.productData.productImage}`}></div>
    
                                    <div className="cart-item-data">
                                        <div className="cart-item-name">{item.productData.productName}</div>
                                        <div className="cart-item-s-q">( {item.productSize} ) x {item.productQuantity} <div className="min-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 0)}>-</div> <div className="plus-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 1)}>+</div> </div>
                                        <div className="cart-item-total">Total : ${(parseInt(item.productData.productPrice) * parseInt(item.productQuantity)).toFixed(2)}</div>
                                    </div>
                                    <br/><hr/><br/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-data">
                        <div className="cart-data-center">Cart Totals</div>
                        <div className="cart-data-empty">Your cart is empty.</div>
                    </div>
                </div>
            )
        }
        
    }
}

export default Cart;