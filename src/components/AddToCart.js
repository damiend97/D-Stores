import React, { Component } from 'react';

class addToCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 'L',
            quantity: 0
        }
    }

    addToCart = () => {
        let qValue = document.getElementById('qf').value;

        if(parseInt(qValue) <= 0 || qValue === "") {
            alert("Please enter a quantity greater than 0");
            document.getElementById('qf').value = 0;
            
        } else {
            this.props.addToCart(this.props.id, this.state.size, this.state.quantity)
            this.props.exitAddComp();
            alert("Added item to cart.");
        }

        this.setState({
            size: 'L',
            quantity: 0
        })
    }

    handleSizeChange = (e) => {
        this.setState({
            size: e.target.innerHTML
        })
        console.log(this.state.size);

        let actives = document.querySelectorAll(".active-size");

        [].forEach.call(actives, function(el) {
            el.classList.remove("active-size");
        });

        e.target.classList.add("active-size");
    }

    handleQuantityChange = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({
                quantity: e.target.value
            })
        }
        else {
            alert("please enter a number");
            document.getElementById('qf').value = "";
        }
    }

    increaseQuantity = () => {
        // let qValue = document.getElementById('qf').value;

        this.setState({
            quantity: +this.state.quantity + 1
        })

        // document.getElementById('qf').value = +qValue + 1;
    }

    decreaseQuantity = () => {
        // let qValue = document.getElementById('qf').value;

        this.setState({
            quantity: this.state.quantity - 1
        })

        // document.getElementById('qf').value = +qValue - 1;
    }

    render() {
        return (
            <div className="add-to-cart-container">
                <div className="split-left">
                    <img src={require(`../images/products/${this.props.image}.png`)} className="small-product" alt="product" />
                    <i className="fas fa-times exit-product-button" onClick={this.props.exitAddComp}></i>
                </div>

                <div className="split-right">
                    <div>
                        <div className="product-name-container">
                            {this.props.name}
                        </div>
                        <div className="size-buttons">
                            <button onClick={this.handleSizeChange} className="small-size-button size-button">S</button>
                            <button onClick={this.handleSizeChange} className="medium-size-button size-button">M</button>
                            <button onClick={this.handleSizeChange} className="large-size-button size-button active-size">L</button>
                            <button onClick={this.handleSizeChange} className="x-large-size-button size-button">XL</button>
                        </div>

                        <div className="quantity-buttons">
                            <button className="quantity-down" onClick={this.decreaseQuantity} >-</button>
                            <input type="text" id={"qf"} className='quantity-field' onChange={this.handleQuantityChange} value={this.state.quantity} placeholder="0" />
                            <button className="quantity-up" onClick={this.increaseQuantity} >+</button>
                        </div>

                        <div className="total-container">
                            Total: ${(this.props.price * this.state.quantity).toFixed(2)} 
                        </div>

                        <div className="func-buttons">
                            <button className="add-product-button" onClick={this.addToCart}><i>Add To Cart</i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default addToCart;