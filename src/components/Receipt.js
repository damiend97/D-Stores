import React, { Component } from 'react';
import $ from 'jquery';

class Receipt extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;

        $('.receipt-header').css('height', viewHeight - navHeight);

        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: (target.offset().top - (navHeight))
                }, 1000);
            }
        });
    }

    logOrder = () => {
        console.log(this.props.order);
    }

    render() {
        let orderItems = [];

        // for each cart item
        for (let i=0; i<this.props.order.order.line_items.length; i++) {
            let imgID = this.props.order.order.line_items[i].product_id;
            let imgClass = "";

            for(let i=0; i<this.props.products.length; i++) {
                if(imgID === this.props.products[i].productKey) {
                    imgClass = "order-item-img " + this.props.products[i].productImage;
                }
                console.log(imgClass);
            }

            orderItems.push(
                <div key={(i+1)*10000} className="order-item">
                    <div key={(i+1)*1} className={imgClass}></div>
                    <div className="order-item-data">
                        <div key={(i+1)*2} className="order-item-name">{this.props.order.order.line_items[i].product_name}</div>
                        <div key={(i+1)*3} className="order-item-quantity">Quantity: {this.props.order.order.line_items[i].quantity}</div>
                        <div key={(i+1)*4} className="order-item-variant">Variant: {this.props.order.order.line_items[i].variant.id}</div>
                        <div key={(i+1)*5} className="order-item-total">Total: {this.props.order.order.line_items[i].line_total.formatted}</div>
                    </div>
                </div>
            
            );

        }

        return (
            <div>
                <div className="receipt-header">
                    Thank you for your purchase, {this.props.order.customer.firstname}!
                    <a href="#receipt-box" className="down-arrow-receipt"></a>
                </div>
                <div className="receipt-box" id="receipt-box">
                    <div className="order-items">
                        <div className="items-text">Your order</div>
                        {orderItems}
                    </div>
                    <div className="order-details">
                        <div className="details-text">Order details</div>
                        <div className="customer-name">Customer Name: Damien Duran</div>
                        <div className="customer-email">Email: durandamien1997@gmail.com</div>
                        <div className="customer-shipping-address">Shipping Address: 936 Sitka Ct. Loveland CO, 80538, USA</div>
                        <div className="customer-card-ref">Payment: Visa ending in 1239</div>
                        <div className="customer-total">Total: $37.39</div>
                    </div>
                    <div className="merchant-details">
                        <div className="merchant-text">Customer Support</div>
                        <div className="support-msg">If you have any questions or concerns about your order please email our support team at durandamien1997@gmail.com</div>
                    </div>
                </div>
                <button onClick={this.logOrder}>log</button>
            </div>
        );
    }
}

export default Receipt;