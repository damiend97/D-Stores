// move face mask designs to left shrink text 2 cols
// put helping hand partners in with mission box
// please fill out form alert
// form on outside with better styling
// new news landing page
// link profile to commerce
// compress images/delete unnessecary images
// taxes

// STYLING
// make site mobile

// PROFILES
// Link commerce.js profiles
// sync cart data to cache and profile

// CACHE
// cache cart data and sync to commerce.js cart
// empty cart when nessecary (clear cache) to avoid unwanted pile up of cart items
// are you sure you want to leave this page -> clear cart?
// are the carts linked to the users session already?

// DEPOLOYMENT
// netlify
// multiple users - how will that work? will they affect eachothers cart data, cache, login, etc?

// COMMERCE BACKEND
// product inventory (i.e. out of stock, 4 items left, etc) - link to frontend
// create subgroups for things like hats that don't have Small medium large etc. or pants that should use xx/yy size

// MOBILE
// how will mobile react to exitAddComp via mouseLeave event?

// REMINDERS
// App.js > componentDidMount refreshes cart for new cart on reload

// WARNINGS
// investigate memory leak warning

// LONG TERM GOALS
// link posts to state - create blog functionality
// spice up error page
// product detail page
// add face masks to store

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import News from './components/News';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Error from './components/Error';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import { commerce } from './lib/commerce';
import Message from './components/Message';
import Receipt from './components/Receipt';
import CartError from './components/CartError';
import { withRouter } from 'react-router'
import $ from 'jquery';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Auth } from 'aws-amplify';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            /*
                To add products in the future
                Add to commerce.js inventory
                Populate groups/variants
                Fetch Products in Cart.js (commerce.products.list())
                This will log the commerce products with their PRODUCT_KEY's as well as there VARIANT_GROUP with available VARIANT_OPTIONS
                You will notice product keys start with prod_
                                groups start with vgrp_
                                options start with optn_
                
                We need to use the vgrp and optn to find the variant id
                Go to addToCart and replace commerce.cart.add(pKey, quantity, variantOption) with...
                ...commerce.cart.add(pKey, quantity, {'vgrp_groupnumber': 'vopt_variantnumber1'})
                then go to app and add that product to the cart
                then console.log() the cart to view the products VARIANT_ID (starts with vrnt_)
                commerce.cart.contents().then((items) => {
                    console.log(items[0].variant.id);
                }) <---- put this in the .then() of commerce.cart.add for quick visibility
                now, replace commerce.cart.add(pKey, quantity, {'vgrp_groupnumber': 'vopt_variantnumber1'})
                with... commerce.cart.add(pKey, quantity, {'vgrp_groupnumber': 'vopt_variantnumber2'})
                repeat until you get all variant id's then populate react state > product > vOpts with the variant_id's

                NOTE - REPLACE THE .ADD() CODE INSIDE OF THE ELSE STATEMENT FOR DOESPRODUCTEXIST NOT INSIDE THE IF FOR DOESPRODUCTEXIST
            */

            products : [
                {
                    productId: 1,
                    productImage: 'tee1',
                    productType: 'SHIRTS',
                    productName: 'The Road Is Home Tee',
                    productPrice: 11,
                    productKey: 'prod_eN1ql9rPy9wz3y',
                    // vGroup: 'vgrp_RqEv5xa9qlZz4j',
                    vOpts: [
                        'vrnt_DWy4oGEp1zl6Jx',
                        'vrnt_bWZ3l8bqV8okpE',
                        'vrnt_QG375vMDYQorMO',
                        'vrnt_0egY5eemYp53Qn'
                    ]
                },
                {
                    productId: 2,
                    productImage: 'shorts1',
                    productType: 'SHORTS',
                    productName: 'Striped Swim Shorts',
                    productPrice: 18,
                    productKey: 'prod_0egY5eBzQMl3Qn',
                    // vGroup: 'vgrp_L1vOoZm40wRa8Z',
                    vOpts: [
                        'vrnt_ZM8X5nqKzQopv4',
                        'vrnt_gvRjwOQvR454mN',
                        'vrnt_N7GKwbz47Zw3EX',
                        'vrnt_ZRjywMJGxro7Y8'
                    ]
                },
                {
                    productId: 3,
                    productImage: 'tee2',
                    productType: 'SHIRTS',
                    productName: 'Gray Long Sleeve',
                    productPrice: 45,
                    productKey: 'prod_gnZO5k4kb0l7MN',
                    // vGroup: 'vgrp_8XxzoBbVnoPQAZ',
                    vOpts: [
                        'vrnt_aZWNoy3kJYl80J',
                        'vrnt_BkyN5YDjkAo0b6',
                        'vrnt_31q0o3EkM9lDdj',
                        'vrnt_p6dP5gM6vMwn7k'
                    ]
                },
                {
                    productId: 4,
                    productImage: 'hat1',
                    productType: 'ACCESSORIES',
                    productName: 'American Snapback',
                    productPrice: 125,
                    productKey: 'prod_RqEv5xXdWk5Zz4',
                    // vGroup: 'vgrp_0YnEoq39Wle7P6',
                    vOpts: [
                        'vrnt_AYrQlWD1kawnbR',
                        'vrnt_G6kVw7vXzjl2eD',
                        'vrnt_O3bR5XDQkP5nzd',
                        'vrnt_RyWOwmGVRM5nEa'
                    ]
                },
                {
                    productId: 5,
                    productImage: 'shorts2',
                    productType: 'SHORTS',
                    productName: 'American Shorts',
                    productPrice: 63,
                    productKey: 'prod_8XxzoBj4DKoPQA',
                    // vGroup: 'vgrp_kd6Ll2VdJlV2mj',
                    vOpts: [
                        'vrnt_ypbroEy0r8o8n4',
                        'vrnt_Kvg9l68jz2o1bB',
                        'vrnt_NqKE506D11wdgB',
                        'vrnt_kpnNwAxO0zlmXB'
                    ]
                },
                {
                    productId: 6,
                    productImage: 'hat2',
                    productType: 'ACCESSORIES',
                    productName: 'Flex Fit Hat',
                    productPrice: 88,
                    productKey: 'prod_VKXmwDqG9eorgD',
                    // vGroup: 'vgrp_4OANwRAZxlvYL8',
                    vOpts: [
                        'vrnt_8XO3wpeGRAoYAz',
                        'vrnt_bO6J5aMJd25Ejp',
                        'vrnt_A12Jwr9XRYlPjn',
                        'vrnt_Op1YoVDkbylXLv'
                    ]
                },
                {
                    productId: 7,
                    productImage: 'shoes2',
                    productType: 'SHOES',
                    productName: 'ElitePros',
                    productPrice: 100,
                    productKey: 'prod_LvJjoPM1Ed5e0n',
                    // vGroup: 'vgrp_yA6nldLaLlEWbz',
                    vOpts: [
                        'vrnt_4WJvlKRK3a5bYV',
                        'vrnt_zkK6oLQLnG5Xn0',
                        'vrnt_DWy4oGEpKzl6Jx',
                        'vrnt_RyWOwmGVRg5nEa'
                    ]
                },
                {
                    productId: 8,
                    productImage: 'shoes1',
                    productType: 'SHOES',
                    productName: 'Vanity Heels',
                    productPrice: 100,
                    productKey: 'prod_eN1ql9rPVPwz3y',
                    // vGroup: 'vgrp_VPvL5zVd95AQkX',
                    vOpts: [
                        'vrnt_ypbroEy0r3o8n4',
                        'vrnt_Kvg9l68jzRo1bB',
                        'vrnt_NqKE506D1PwdgB',
                        'vrnt_kpnNwAxO0glmXB'
                    ]
                },
                {
                    productId: 9,
                    productImage: 'hoodie1',
                    productType: 'HOODIES',
                    productName: 'Gray Hoodie',
                    productPrice: 50,
                    productKey: 'prod_gnZO5k4kdxl7MN',
                    // vGroup: 'vgrp_nPEVlNmkL5a7dM',
                    vOpts: [
                        'vrnt_8XO3wpeGREoYAz',
                        'vrnt_bO6J5aMJdX5Ejp',
                        'vrnt_A12Jwr9XRVlPjn',
                        'vrnt_Op1YoVDkb4lXLv'
                    ]
                },
                {
                    productId: 10,
                    productImage: 'hoodie2',
                    productType: 'HOODIES',
                    productName: 'Black Hoodie',
                    productPrice: 50,
                    productKey: 'prod_7ZAMo1Q3mEoNJ4',
                    // vGroup: 'vgrp_9BAmwJbBEweXdn',
                    vOpts: [
                        'vrnt_4WJvlKRK3Z5bYV',
                        'vrnt_zkK6oLQLnR5Xn0',
                        'vrnt_DWy4oGEpKYl6Jx',
                        'vrnt_bWZ3l8bqzGokpE'
                    ]
                },
                {
                    productId: 11,
                    productImage: 'pants1',
                    productType: 'PANTS',
                    productName: 'Mens Jeans',
                    productPrice: 75,
                    productKey: 'prod_r2LM5QGy6RwZV1',
                    // vGroup: 'vgrp_mOVKl4LNKlprRP',
                    vOpts: [
                        'vrnt_QG375vMDJporMO',
                        'vrnt_0egY5eemkg53Qn',
                        'vrnt_RqEv5xp9795Zz4',
                        'vrnt_8XxzoBKmAV5PQA'
                    ]
                }
                //prod_bWZ3l89mnGwkpE - sticker
            ],
            cartData : {
                items: [],
                total: 0
            },
            posts : [
                {
                    postId: 1,
                    postImage : '',
                    postTitle : 'Post One',
                    postBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis. Sapiente ut culpa corporis repudiandae quis corrupti impedit a aperiam?'
                },
                {
                    postId: 2,
                    postImage : '',
                    postTitle : 'Post Two',
                    postBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis.'
                },
                {
                    postId: 3,
                    postImage : '',
                    postTitle : 'Post Three',
                    postBody : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus incidunt saepe repudiandae asperiores corporis!'
                },
                {
                    postId: 4,
                    postImage : '',
                    postTitle : 'Post Four',
                    postBody : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus incidunt saepe repudiandae asperiores corporis!'
                },
                {
                    postId: 5,
                    postImage : '',
                    postTitle : 'Post Five',
                    postBody : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus incidunt saepe repudiandae asperiores corporis!'
                },
                {
                    postId: 6,
                    postImage : '',
                    postTitle : 'Post Six',
                    postBody : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus incidunt saepe repudiandae asperiores corporis!'
                }
            ],
            loggedIn: false,
            pathFilter: [],
            currentMessage: "",
            cToken: "",
            loading: false,
            order: [],
            customerData: {
                name: "",
                firstName: "",
                lastName: "",
                email: "",
                shipping: {

                },
                billing: {

                },
                card: {

                }
            },
            authMessage: ""
        }
    }

    setCustomerData = (fName, lName, email, shipping, billing, card) => {
        this.setState({
            customerData: {
                name: fName + "" + lName,
                firstName: fName,
                lastName: lName,
                email: email,
                shipping: shipping,
                billing: billing,
                card: card
            }
        })
    }

    componentDidMount = () => {
        commerce.cart.refresh().then(() => {
        }).catch((error) => {
            console.log('There was an error emptying the cart...', error);
            this.handleComError();
        });
    }

    handlePath = (pathFilter, pathFilter2) => {
        let pf = [pathFilter, pathFilter2]
        this.setState({ pathFilter: pf });
    }
    
    handlePathExit = () => {
        this.setState({ pathFilter: "" });
    }

    changeMessage = (newMessage) => {
        this.setState({
            currentMessage: newMessage
        })
    }

    doesProductExist = (productId, size) => this.state.cartData.items.find(product => product.productData.productId === productId && product.productSize === size)
    
    clearCart = () => {
        if(confirm("Are you sure you want to clear your cart?")) {
            this.changeMessage("Emptied cart.")
            document.getElementById("mc").style.opacity = 1;

            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);

            this.setState({
                cartData: {
                    items: [],
                    total: 0
                }
            })

            commerce.cart.refresh().then(() => {
            }).catch((error) => {
                console.log('There was an error emptying the cart...', error);
                this.handleComError();
            });
    
        }
    }

    setLoading = (val) => {
        this.setState({
            loading: val
        })
    }

    addToCart = (productId, size, quantity, pKey) => {
        this.setLoading(true);
        
        let variantOption;
        let variantIndex;
        let ID;
        quantity = +quantity;
    
        if (size === "S") {
            variantIndex = 0;
        } else if (size === "M") {
            variantIndex = 1;
        } else if (size === "L") {
            variantIndex = 2;
        } else if (size === "XL") {
            variantIndex = 3;
        }
    
        this.state.products.map(product => {
            if(product.productId === productId) {
                variantOption = product.vOpts[variantIndex];
            }
        })

        commerce.products.getVariants(pKey).then((variants) => {
            variants.data.map(variant => {
                if (variant.id === variantOption) {
                    if (variant.inventory >= quantity) {
                        commerce.cart.add(pKey, quantity, variantOption).then((response) => {
                            if (this.doesProductExist(productId, size)) {
                                this.setState(prevState => ({
                                    ...prevState,
                                    items: this.state.cartData.items.map(item => {
                                        if (item.productData.productId === productId && item.productSize === size) {
                                            item.productQuantity += quantity
                                        }
                                        return item
                                    })
                                }))
                            } else {
                                this.setState(prevState => ({
                                    cartData: {
                                        ...prevState.cartData,
                                        items: [...prevState.cartData.items, { productKey: pKey, productData: this.state.products[productId - 1], productSize: size, productQuantity: quantity, itemId: response.line_item_id}]
                                    }
                                }))
    
                            }

                            commerce.checkout.generateTokenFrom("cart", commerce.cart.id()).then((response) => {
                                this.setState({
                                    cToken: response.id
                                })
                            }).catch((error) => {
                                console.log("There was an error generating a checkout token...",error);
                                this.handleComError();
                            })
                        }).catch((error) => {
                            console.log("There was an error adding an item to the cart...", error);
                            this.handleComError();
                        });
                        
                        this.setLoading(false);
                        this.changeMessage("Added item(s) to cart.")
                        document.getElementById("mc").style.opacity = 1;
                
                        setTimeout(() => {
                            document.getElementById("mc").style.opacity = 0;
                        }, 1000);
                    } else {
                        this.setLoading(false);
                        this.changeMessage("Quantity Unavailable.")
                        document.getElementById("mc").style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById("mc").style.opacity = 0;
                        }, 1000);
                    }
                }
            })
        });
    }

    
    changeItemQuantity = (id, newQuantity, itemId, productSize, pKey) => {
        this.setLoading(true);

        let variantOption;
        let variantIndex;
    
        if (productSize === "S") {
            variantIndex = 0;
        } else if (productSize === "M") {
            variantIndex = 1;
        } else if (productSize === "L") {
            variantIndex = 2;
        } else if (productSize === "XL") {
            variantIndex = 3;
        }
    
        this.state.products.map(product => {
            if(product.productKey === pKey) {
                variantOption = product.vOpts[variantIndex];
            }
        })

        let oldQuantity = this.state.cartData.items.map(item => {
            if (String(item.productData.productKey) === String(pKey) && item.productSize === productSize) {
                return item.productQuantity
            }
        })

        if(newQuantity === 1) {
            let combinedQuantity = +oldQuantity + 1;

            commerce.checkout.checkQuantity(this.state.cToken, itemId, {
                amount: combinedQuantity,
                variant_id: variantOption
            }).then((response) => {
                if(response.available) {
                    this.state.cartData.items.map(item => {
                        if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                            commerce.cart.update(itemId, { quantity: combinedQuantity }).then(response => {
                                this.setLoading(false);
                                console.log(response);
                                this.setState(prevState => ({
                                    cartData: {
                                        ...prevState.cartData,
                                        items: this.state.cartData.items.map(item => {
                                            if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                                                item.productQuantity = +combinedQuantity
                                            }
                                            return item
                                        })
                                    }
                                }))
                            }).catch((error) => {
                                console.log("There was an issue editing the product quantity...", error);
                                this.handleComError();
                                this.setLoading(false);
                            });
                        }
                    })
                } else {
                    this.changeMessage("Quantity unavailable.")
                    document.getElementById("mc").style.opacity = 1;

                    setTimeout(() => {
                        document.getElementById("mc").style.opacity = 0;
                    }, 1000);
                    console.log("unavailable", combinedQuantity);
                    
                    this.setLoading(false);

                }
            })
        }
        // if -1 to quantity
        else {
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: this.state.cartData.items.map(item => {
                        if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                            if(item.productQuantity === 1) {
                                this.changeMessage("Invalid quantity");
                                document.getElementById("mc").style.opacity = 1;
    
                                setTimeout(() => {
                                    document.getElementById("mc").style.opacity = 0;
                                }, 2000);
                            } else {
                                item.productQuantity -= 1
                            }
                        }
                        return item
                    })
                }
            }), () => {
                
                this.state.cartData.items.map(item => {
                    if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                        let newQ = item.productQuantity;
                        commerce.cart.update(itemId, { quantity: newQ }).then(response => {
                            this.setLoading(false);
                        }).catch((error) => {
                            console.log("There was an issue editing the product quantity...", error);
                            this.handleComError();
                            this.setLoading(false);
                        });
                    }
                })
            })

        }
    }

    removeFromCart = (productId, itemId, size) => {
        if(confirm("Are you sure you want to remove this item?")) {
            commerce.cart.remove(itemId).then((response) => {
                this.changeMessage("Removed item(s) from cart.")
                document.getElementById("mc").style.opacity = 1;

                setTimeout(() => {
                    document.getElementById("mc").style.opacity = 0;
                }, 1000);
                this.setState(prevState => ({
                    cartData: {
                        ...prevState.cartData,
                        items: this.state.cartData.items.filter((item) => {
                            if(item.productSize === size && item.productData.productId === productId) {
                                return false
                            }
                            return true
                        })
                    }
                }))
            }).catch((error) => {
                console.log('There was an error removing an item from the cart...', error);
                this.handleComError();
            });
        }
    }

    checkoutFinal = async (paymentMethodResponse) => {

        // ********************
        // payment: {
        //     gateway: 'stripe',
        //     stripe: {
        //         payment_method_id: paymentMethodResponse.paymentMethod.id
        //     }
        // }

        // payment: {
        //         gateway: 'test_gateway',
        //         card: {
        //             number: '4242 4242 4242 4242',
        //             expiry_month: '01',
        //             expiry_year: '2023',
        //             cvc: '123',
        //             postal_zip_code: '94103',
        //         }
        //     }


        let cartItems = [];

        commerce.cart.retrieve().then((cart) => {
            let items = [];

            for (let i=0; i< cart.line_items.length; i++) {
                let obj = {};
                let vrnt = {};

                vrnt[cart.line_items[i].variant.id] = cart.line_items[i].selected_options[0].option_id

                obj[cart.line_items[i].id] = {
                    quantity: cart.line_items[i].quantity,
                    variants: {
                        vrnt
                    }
                }

                items.push(obj);
            }

            cartItems.push(items);

        }).catch((error) => {
            console.log("There was an error retrieving the cart...", error);
            this.handleComError();
            this.setLoading(false);
        });

        let token;
        
        await commerce.checkout.generateTokenFrom('cart', commerce.cart.id()).then((response) => {
            token = response.id;
        }).catch((error) => {
            console.log("There was an error generating the token...", error);
            this.handleComError();
            this.setLoading(false);
        })

        this.setState({
            cToken: token
        })
        
        this.captureOrder(cartItems, paymentMethodResponse);

    }

    
    captureOrder = (cartItems, pmr) => {
        if (pmr === undefined) {
            commerce.checkout.capture(this.state.cToken,
                {
                    line_items: cartItems,
                    customer: {
                        firstname: this.state.customerData.firstName,
                        lastname: this.state.customerData.lastName,
                        email: this.state.customerData.email
                    },
                    shipping: {
                        name: this.state.customerData.shipping.name,
                        street: this.state.customerData.shipping.street,
                        town_city: this.state.customerData.shipping.city,
                        county_state: this.state.customerData.shipping.state,
                        postal_zip_code: this.state.customerData.shipping.zip,
                        country: 'US'
                    },
                    billing: {
                        name: this.state.customerData.billing.name,
                        street: this.state.customerData.billing.street,
                        town_city: this.state.customerData.billing.city,
                        county_state: this.state.customerData.billing.state,
                        postal_zip_code: this.state.customerData.billing.zip,
                        country: 'US'
                    },
                    payment: {
                        gateway: 'test_gateway',
                        card: {
                            number: '4242 4242 4242 4242',
                            expiry_month: '01',
                            expiry_year: '2023',
                            cvc: '123',
                            postal_zip_code: this.state.customerData.billing.zip
                        }
                    }
            }).then((response) => {
                this.setState({
                    order: response
                })
                console.log(response);
                this.handleSubmit();
                this.setLoading(false);
            }).catch((error) => {
                console.log("There was an error capturing the order...", error);
                this.handleComError();
                this.setLoading(false);
            });
        } else {
            commerce.checkout.capture(this.state.cToken,
                {
                    line_items: cartItems,
                    customer: {
                        firstname: this.state.customerData.firstName,
                        lastname: this.state.customerData.lastName,
                        email: this.state.customerData.email
                    },
                    shipping: {
                        name: this.state.customerData.shipping.name,
                        street: this.state.customerData.shipping.street,
                        town_city: this.state.customerData.shipping.city,
                        county_state: this.state.customerData.shipping.state,
                        postal_zip_code: this.state.customerData.shipping.zip,
                        country: 'US'
                    },
                    billing: {
                        name: this.state.customerData.billing.name,
                        street: this.state.customerData.billing.street,
                        town_city: this.state.customerData.billing.city,
                        county_state: this.state.customerData.billing.state,
                        postal_zip_code: this.state.customerData.billing.zip,
                        country: 'US'
                    },
                    payment: {
                        gateway: 'stripe',
                        stripe: {
                            payment_method_id: pmr.paymentMethod.id
                        }
                    }
            }).then((response) => {
                this.setState({
                    order: response
                })
                console.log(response);
                this.handleSubmit();
                this.setLoading(false);
            }).catch((error) => {
                console.log("There was an error capturing the order...", error);
                this.handleComError();
                this.setLoading(false);
            });
        }
    }

    checkLoading = () => {
        console.log(this.state.loading);
    }

    handleComError = () => {
        const { history: { push } } = this.props;
        push('/cart-error');
    }

    handleSubmit = () => {
        const { history: { push } } = this.props;
        push('/receipt');

        commerce.cart.refresh().then(() => {
        }).catch((error) => {
            console.log('There was an error emptying the cart...', error);
            this.handleComError();
        });

        this.setLoading(false);

        this.setState({
            cartData: {
                items: [],
                total: 0
            }
        })
    }

    setLoginState = (val) => {
        this.setState({
            loggedIn: val
        })
    }

    customerLogin = () => {
        this.setLoginState(true);
    }


    customerConfirm = async (username, code) => {
        try {
            await Auth.confirmSignUp(username, code)
            this.setState({
                loggedIn: true
            })
        } catch (error) {
            this.changeMessage("Invallid code.");
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        }
    }

    resendConfirmationCode = async (username) => {
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            this.changeMessage(error.message);
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);
        }
    }


    customerSignup = async (username, password, email, phone_number) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    phone_number
                }
            }).then((res) => {
                console.log(res);
                return true;
            })
        } catch (error) {
            // let userPoolError = "";
            // if (error.message.startsWith("User pool client")) {
            
            // }
            switch (error.message) {
                case "Password did not conform with policy: Password not long enough":
                    this.changeMessage("Password not long enough.");
                    break;
                case "Invalid email address format.":
                    this.changeMessage("Invalid email address.");
                    break;
                case "Username cannot be of email format, since user pool is configured for email alias.":
                    this.changeMessage("Invalid username.");
                    break;
                case "User already exists":
                    this.changeMessage("User already exists.");
                    break;
                case "Username cannot be empty":
                    this.changeMessage("Invalid username.");
                case error.message.startsWith("User pool client"):
                    this.changeMessage("User doesn't exist.");
                default:
                    this.changeMessage(error.message);
                    console.log(error.message);
                    break;
            }
            
            document.getElementById("mc").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("mc").style.opacity = 0;
            }, 1000);

            return false
        }

        // await Auth.signUp({
        //     username,
        //     password,
        //     attributes: {
        //         email,
        //         phone_number
        //     }
        // }).then(res => {
        //     console.log(res);
        //     this.setLoginState(true);
        // }).catch(error => {            
        //     switch (error.message) {
        //         case "Password did not conform with policy: Password not long enough":
        //             this.changeMessage("Password not long enough.");
        //             break;
        //         case "Invalid email address format.":
        //             this.changeMessage("Invalid email address.");
        //             break;
        //         case "Username cannot be of email format, since user pool is configured for email alias.":
        //             this.changeMessage("Invalid username.");
        //             break;
        //         case "User already exists":
        //             this.changeMessage("User already exists.");
        //             break;
        //         case "Username cannot be empty":
        //             this.changeMessage("Invalid username.");
        //         default:
        //             this.changeMessage(error.message);
        //             break;
        //     }
            
        //     document.getElementById("mc").style.opacity = 1;
        //     setTimeout(() => {
        //         document.getElementById("mc").style.opacity = 0;
        //     }, 1000);
        // })
    }

    handleConfirm = (username, code) => {
        console.log(username, code);
    }

    customerLogout = () => {
        this.setLoginState(false);
        // add code to push to login page not sign up (or maybe even home?)
    }


    render() {
        return (
            <div className="App">
                <ScrollToTop />
                <Nav></Nav>
                <Message message={this.state.currentMessage}></Message>
                <Switch>
                    <Route path="/" render={(props) => <Home handlePath={this.handlePath} {...props} />} exact />
                    <Route path="/shop" render={() => <Shop handleComError={this.handleComError} cartData={this.state.cartData} loadingValue={this.state.loading} changeMessage={this.changeMessage} addToCart={this.addToCart} products={this.state.products} pathFilter={this.state.pathFilter} pathExit={this.handlePathExit} /> } />
                    <Route path="/news" component={News} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" render={() => <Cart setCustomerData={this.setCustomerData} checkoutFinal={this.checkoutFinal} loadingValue={this.state.loading} setLoading={this.setLoading} checkoutFinal={this.checkoutFinal} cartData={this.state.cartData} changeItemQuantity={this.changeItemQuantity} removeFromCart={this.removeFromCart} clearCart={this.clearCart} handleSubmit={this.handleSubmit} />}/>
                    <Route path="/receipt" render={() => <Receipt products={this.state.products} order={this.state.order} checkLoading={this.checkLoading}/>} />
                    <Route path="/cart-error" component={CartError} />
                    <Route path="/profile" render={() => <Profile resendConfirmationCode={this.resendConfirmationCode} customerConfirm={this.customerConfirm} changeMessage={this.changeMessage} loggedIn={this.state.loggedIn} customerLogin={this.customerLogin} customerLogout={this.customerLogout} customerSignup={this.customerSignup} />} />
                    <Route path="/login" render={() => {<Login changeMessage={this.changeMessage} ustomerLogin={this.customerLogin}/>}} />
                    <Route path="/signup" render={() => {<SignUp customerConfirm={this.customerConfirm} changeMessage={this.changeMessage} customerSignup={this.customerSignup}/>}} />
                    <Route component={Error} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
