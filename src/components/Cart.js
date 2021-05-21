import React, { Component } from 'react';

class Cart extends Component {
    render() {
        if (this.props.cartData.items.length > 0) {
            return (
                <div className="cart-container">
                    <div className="cart-list">
                        {this.props.cartData.items.map(item => {
                            return (
                                <div className="cart-item" key={item.productData.productId}>
                                    <div className={`cart-item-image ${item.productData.productImage}`}></div>
    
                                    <div className="cart-item-data">
                                        <div className="cart-item-name">{item.productData.productName}</div>
                                        <div className="cart-item-s-q">( {item.productSize} ) x {item.productQuantity} <div className="min-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 0)}>-</div> <div className="plus-but" onClick={() => this.props.changeItemQuantity(item.productData.productId, 1)}>+</div> </div>
                                        <div className="cart-item-total">Total : ${(parseInt(item.productData.productPrice) * parseInt(item.productQuantity)).toFixed(2)}</div>
                                    </div>
                                    <div className="remove-but" onClick={() => this.props.removeFromCart(item.productData.productId)}>x</div>
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
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart-container">
                    <div className="cart-list">
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