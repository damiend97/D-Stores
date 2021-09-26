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

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        if (this.props.order.order === undefined) {
            return(
                <div style={{marginLeft: "auto", marginRight: "auto", width: "100%", fontSize: "3em", textAlign: "center"}}>
                    <br /><br />
                    No receipt available at this time.
                </div>
            )
        } else {
            let orderItems = [];
            let customerDetails = [];
    
            // for each cart item
            for (let i=0; i<this.props.order.order.line_items.length; i++) {
                let imgID = this.props.order.order.line_items[i].product_id;
                let imgClass = "";
    
                for(let i=0; i<this.props.products.length; i++) {
                    if(imgID === this.props.products[i].productKey) {
                        imgClass = "order-item-img " + this.props.products[i].productImage;
                    }
                }
    
                orderItems.push(
                    <div key={(i+1)*10000} className="order-item">
                        <div key={(i+1)*1} className={imgClass}></div>
                        <div key="key-order-item-data" className="order-item-data">
                            <div key={(i+1)*2} className="order-item-name">{this.props.order.order.line_items[i].product_name}</div>
                            <div key={(i+1)*3} className="order-item-quantity">Quantity: {this.props.order.order.line_items[i].quantity}</div>
                            <div key={(i+1)*4} className="order-item-variant">Size: {this.props.order.order.line_items[i].selected_options[0].option_name}</div>
                            <div key={(i+1)*5} className="order-item-total">Total: {this.props.order.order.line_items[i].line_total.formatted}</div>
                        </div>
                    </div>
                
                );
            }
    
            let cardType = this.capitalizeFirstLetter(this.props.order.transactions[0].payment_source.brand);
    
            customerDetails.push(
                <div key="key-order-details" className="order-details">
                    <div key="key-customer-name" className="customer-name">Customer Name: <br />{this.props.order.customer.firstname} {this.props.order.customer.lastname}</div>
                    <div key="key-customer-email" className="customer-email">Customer Email: <br />{this.props.order.customer.email}</div>
                    <div key="key-customer-shipping-address" className="customer-shipping-address">Shipping Address: <br />{this.props.order.shipping.street} {this.props.order.shipping.town_city} {this.props.order.shipping.county_state}, {this.props.order.shipping.postal_zip_code}</div>
                    <div key="key-customer-card-ref" className="customer-card-ref">Payment: <br />{cardType} ending in {this.props.order.transactions[0].gateway_reference}</div>
                    <div key="key-customer-total" className="customer-total">Total: <br />{this.props.order.order_value.formatted_with_symbol}</div>
                </div>
            )
    
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
                        {customerDetails}
                        <div className="merchant-details">
                            <div className="merchant-text">Customer Support</div>
                            <div className="support-msg">If you have any questions or concerns about your order please email our support team at <br />ecsupport@gmail.com</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Receipt;