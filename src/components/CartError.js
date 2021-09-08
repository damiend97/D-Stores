import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class CartError extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;
        
        let fvHeight = viewHeight - navHeight;
        $('.error-container').css('height', fvHeight);
    }
    
    render() {
        return (
            <div className="error-container ec-wrap">
                <div>
                    Oops! Sorry, there was an error editing your cart.
                    <div className="cart-error-div">
                        Please return <Link to="/" className="no-style-link">Home</Link> or to your <Link to="/cart" className="no-style-link">Cart</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartError;