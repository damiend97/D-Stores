import React, { Component } from 'react';
import { commerce } from '../lib/commerce';

class Cart extends Component {
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
    
    render() {
        if (this.props.cartData.items.length > 0) {
            return (
                <div className="cart-container">
                    <div className="cart-list">
                    {/* <button onClick={this.showCart}>display cart</button>
                    <button onClick={this.refreshCart}>refresh cart</button>
                    <button onClick={this.fetchProducts}>fetch products</button>
                    <button onClick={this.getCart}>get cart contents</button>
                    <button onClick={this.getTotal}>get total</button>
                    <button onClick={this.getVariants}>get variants</button> */
                    }
                        {this.props.cartData.items.map((item, num) => {
                            return (
                                <div className="cart-item" key={item.productData.productId*num}>
                                    <div className={`cart-item-image ${item.productData.productImage}`}></div>
    
                                    <div className="cart-item-data">
                                        <div className="cart-item-name">{item.productData.productName}</div>
                                        <div className="cart-item-s-q">( {item.productSize} ) x {item.productQuantity} <div className="min-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 0, item.itemId, item.productSize)}>-</div> <div className="plus-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 1, item.itemId, item.productSize)}>+</div> </div>
                                        <div className="cart-item-total">Total : ${(parseInt(item.productData.productPrice) * parseInt(item.productQuantity)).toFixed(2)}</div>
                                    </div>
                                    <div className="remove-but" onClick={() => this.props.removeFromCart(item.productData.productId, item.itemId, item.productSize)}>x</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-data">
                        <div className="cart-data-center">Your Cart</div>
                        <div className="cart-total">
                            Subtotal: ${(this.props.cartData.items.reduce(function(tot, arr) {
                                return (tot + (arr.productData.productPrice * arr.productQuantity))
                            }, 0)).toFixed(2)}
                            <br/>
                            Taxes: ${(this.props.cartData.items.reduce(function(tot, arr) {
                                return (tot + (arr.productQuantity * .37))
                            }, 0)).toFixed(2)}
                            <br/>
                            Shipping: ${(this.props.cartData.items.length * .50).toFixed(2)}
                            <br/>
                            <div className="main-total">
                                Total: ${((this.props.cartData.items.reduce(function(tot, arr) {
                                return (tot + (arr.productData.productPrice * arr.productQuantity))
                            }, 0)) + (this.props.cartData.items.reduce(function(tot, arr) {
                                return (tot + (arr.productQuantity * .37))
                            }, 0)) +  (this.props.cartData.items.length * .50)).toFixed(2)}
                            </div>
                        </div>
                        <div className="checkout-but">Checkout</div>
                        <div className="clear-but" onClick={this.refreshCart}>Clear Cart</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart-container">
                    <div className="cart-list">
                    {/* <button onClick={this.showCart}>display cart</button>
                    <button onClick={this.refreshCart}>refresh cart</button>
                    <button onClick={this.fetchProducts}>fetch products</button>
                    <button onClick={this.getCart}>get cart contents</button>
                    <button onClick={this.getTotal}>get total</button>
                    <button onClick={this.getVariants}>get variants</button> */}
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
                        <div className="cart-data-center">Your Cart</div>
                        <div className="cart-data-empty">Your cart is empty.</div>
                    </div>
                </div>
            )
        }
        
    }
}

export default Cart;