import React, { Component } from 'react';
import { commerce } from '../lib/commerce';

class addToCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 'L',
            quantity: 0
        }
    }


    componentDidMount = () => {
        // set state to variant inventory data here to display to the user
    }
    
    addToCart = () => {
        let qValue = document.getElementById('qf').value;

        if(parseInt(qValue) <= 0 || qValue === "") {
            this.props.changeMessage("Invalid quantity");
            document.getElementById("mc").style.opacity = 1;

            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 2000);
            document.getElementById('qf').value = 0;
            
        } else {
            this.props.addToCart(this.props.id, this.state.size, this.state.quantity, this.props.pKey);
            this.props.exitAddComp();
        }

        this.setState({
            size: 'L',
            quantity: 0
        })

        console.log("clicked");
    }

    handleSizeChange = (e) => {
        this.setState({
            size: e.target.innerHTML
        })

        let actives = document.querySelectorAll(".active-size");

        [].forEach.call(actives, function(el) {
            el.classList.remove("active-size");
        });

        e.target.classList.add("active-size");
    }

    handleQuantityChange = (e) => {
        let initialQ = this.state.quantity;
        if (!isNaN(e.target.value)) {
            this.setState({
                quantity: e.target.value
            }, () => {
                let variantOption;
                let variantIndex;

                if (this.state.size === "S") {
                    variantIndex = 0;
                } else if (this.state.size === "M") {
                    variantIndex = 1;
                } else if (this.state.size === "L") {
                    variantIndex = 2;
                } else if (this.state.size === "XL") {
                    variantIndex = 3;
                }
            
                this.props.products.map(product => {
                    if(product.productKey === this.props.pKey) {
                        variantOption = product.vOpts[variantIndex];
                    }
                })

                let currentQ = this.props.cartData.items.map(product => {
                    if (product.productData.productKey === this.props.pKey) {
                        if(product.productQuantity === null) {
                            return 0;
                        } else {
                            return product.productQuantity;
                        }
                    }
                });

                let combinedQ = +currentQ + +this.state.quantity;

                commerce.products.getVariants(this.props.pKey).then((variants) => { 
                    variants.data.map(variant => {
                        if (variant.id === variantOption) {
                            console.log("Inventory: ", variant.inventory);
                            console.log("Requested Quantity", combinedQ);
                            if(variant.inventory < combinedQ) {
                                this.setState({
                                    quantity: 0
                                })
                                this.props.changeMessage("Quantity Unavailable");
                                document.getElementById("mc").style.opacity = 1;

                                setTimeout(() => {
                                    document.getElementById("mc").style.opacity = 0;
                                }, 2000);
                            }
                        }

                    });
                }).catch((error) => {
                    console.log("There was an error getting the product variants...", error);
                    this.props.handleComError();
                });
            })
        }
        else {
            alert("please enter a number");
            document.getElementById('qf').value = "";
        }

    }

    increaseQuantity = () => {
        this.setState({
            quantity: +this.state.quantity + 1
        }, () => {

            let variantOption;
            let variantIndex;

            if (this.state.size === "S") {
                variantIndex = 0;
            } else if (this.state.size === "M") {
                variantIndex = 1;
            } else if (this.state.size === "L") {
                variantIndex = 2;
            } else if (this.state.size === "XL") {
                variantIndex = 3;
            }
        
            this.props.products.map(product => {
                if(product.productKey === this.props.pKey) {
                    variantOption = product.vOpts[variantIndex];
                }
            })

            let currentQ = this.props.cartData.items.map(product => {
                if (product.productData.productKey === this.props.pKey) {
                    return product.productQuantity;
                }
            });

            let combinedQ = +currentQ + +this.state.quantity;

            commerce.products.getVariants(this.props.pKey).then((variants) => { 
                variants.data.map(variant => {
                    if (variant.id === variantOption) {
                        console.log("Inventory: ", variant.inventory);
                        console.log("Requested Quantity", combinedQ);
                        if(variant.inventory < combinedQ) {
                            this.setState({
                                quantity: this.state.quantity-1
                            })
                            this.props.changeMessage("Quantity Unavailable");
                            document.getElementById("mc").style.opacity = 1;

                            setTimeout(() => {
                                document.getElementById("mc").style.opacity = 0;
                            }, 2000);
                        }
                    }
                });
            }).catch((error) => {
                console.log("There was an error getting the product variants...", error);
                this.props.handleComError();
            });
        })
    }

    decreaseQuantity = () => {
        if (this.state.quantity === 0) {
            this.props.changeMessage("Invalid quantity");
            document.getElementById("mc").style.opacity = 1;

            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 2000);

        } else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    render() {
        return (
            <div className="add-to-cart-container" onMouseLeave={this.props.exitAddComp}>
                <div className="split-left">
                    <img src={require(`../images/products/${this.props.image}.png`)} className="small-product" alt="product" />
                    <i className="fas fa-times exit-product-button" onClick={this.props.exitAddComp}></i>
                    {/* <div className="inventory-container">
                        <div className="i-text">Store Inventory</div>
                        <div className="i-grid">
                            <div className="i-g-item">
                                <div>SMALL</div>
                                <div>(4)</div>
                            </div>
                            <div className="i-g-item">
                                <div>MEDIUM</div>
                                <div>(2)</div>
                            </div>
                            <div className="i-g-item">
                                <div>LARGE</div>
                                <div>(1)</div>
                            </div>
                            <div className="i-g-item">
                                <div>X-LARGE</div>
                                <div>(17)</div>
                            </div>
                        </div>
                    </div> */}
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
                            <button className="add-product-button" id="apb" onClick={this.addToCart}><i>Add To Cart</i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default addToCart;