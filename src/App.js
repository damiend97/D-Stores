// add item removed from cart message
// add emptied cart message
// add emptied cart > are you sure message
// work on profile section
// compress images/delete unnessecary images
// message us link --> scroll to contact form
// face masks shop now button --> link to shop
// add face masks to store

// STYLING
// make site mobile
// redo shop options
// box-shadow cart buttons
// news could use some work
//      could revert to news-preview styling but with 50 50 split 50 image 50 semi transparent text box at full height

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
            pathFilter: [],
            currentMessage: ""
        }
    }

    componentDidMount = () => {
        commerce.cart.refresh().then(() => {
        }).catch((error) => {
            console.log('There was an error emptying the cart...', error);
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
        this.setState({
            cartData: {
                items: [],
                total: 0
            }
        })
    }

    addToCart = (productId, size, quantity, pKey) => {
        this.changeMessage("Added item to cart.")
        document.getElementById("mc").style.opacity = 1;

        setTimeout(() => {
            document.getElementById("mc").style.opacity = 0;
        }, 1000);

        if (this.doesProductExist(productId, size)) {
            let variantOption;
            let variantIndex;

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
            commerce.cart.add(pKey, quantity, variantOption).then((response) => {
            }).catch((error) => {
                console.log("There was an error adding an item to the cart...", error)
            })
            this.setState(prevState => ({
                ...prevState,
                items: this.state.cartData.items.map(item => {
                    if (item.productData.productId === productId && item.productSize === size) {
                        item.productQuantity += quantity
                    }
                    return item
                })
            }))
        }

        else {
            let variantOption;
            let variantIndex;

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

            commerce.cart.add(pKey, quantity, variantOption)
            .then((response) => {
                // commerce.cart.contents().then((items) => {
                //     console.log(items[0].variant.id);
                // })
                this.setState(prevState => ({
                    cartData: {
                        ...prevState.cartData,
                        items: [...prevState.cartData.items, { productData: this.state.products[productId - 1], productSize: size, productQuantity: quantity, itemId: response.line_item_id}]
                    }
                }))
            })
            .catch((error) => {
                console.log('There was error adding an item to the cart...', error);
            });
        }
    }

    
    changeItemQuantity = (id, newQuantity, itemId, productSize) => {
        if(newQuantity === 1) {
            // original
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: this.state.cartData.items.map(item => {
                        if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                            item.productQuantity += 1
                        }
                        return item
                    })
                }
            }), () => {
                this.state.cartData.items.map(item => {
                    if (String(item.productData.productId) === String(id) && item.productSize === productSize) {
                        let newQ = item.productQuantity;
                        commerce.cart.update(itemId, { quantity: newQ }).then(response => {
                            // console.log(response);
                        }).catch((error) => {
                            console.log("There was an issue editing the product quantity...", error);
                        });
                    }
                })
            })

        } else {
            // original
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
                            // console.log(response);
                        }).catch((error) => {
                            console.log("There was an issue editing the product quantity...", error);
                        });
                    }
                })
            })
        }
    }

    removeFromCart = (productId, itemId, size) => {
        if(confirm("Are you sure you want to remove this item?")) {
            commerce.cart.remove(itemId).then((response) => {
                // console.log(response);
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
            });
        }
    }
    

    render() {
        return (
            <div className="App">
                <ScrollToTop />
                <Nav></Nav>
                <Message message={this.state.currentMessage}></Message>
                <Switch>
                    <Route path="/" render={(props) => <Home handlePath={this.handlePath} {...props} />} exact />
                    <Route path="/shop" render={() => <Shop changeMessage={this.changeMessage} addToCart={this.addToCart} products={this.state.products} pathFilter={this.state.pathFilter} pathExit={this.handlePathExit} /> } />
                    <Route path="/news" component={News} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" render={() => <Cart cartData={this.state.cartData} changeItemQuantity={this.changeItemQuantity} removeFromCart={this.removeFromCart} clearCart={this.clearCart}/>}/>
                    <Route path="/profile" component={Profile} />
                    <Route component={Error} />
                </Switch>
            </div>
        );
    }
}

export default App;
