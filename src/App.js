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

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products : [
                {
                    productId: 1,
                    productImage: 'tee1',
                    productType: 'SHIRTS',
                    productName: 'The Road Is Home Tee',
                    productPrice: 11
                },
                {
                    productId: 2,
                    productImage: 'shorts1',
                    productType: 'SHORTS',
                    productName: 'Striped Swim Shorts',
                    productPrice: 18
                },
                {
                    productId: 3,
                    productImage: 'tee2',
                    productType: 'SHIRTS',
                    productName: 'Gray Long Sleeve',
                    productPrice: 45
                },
                {
                    productId: 4,
                    productImage: 'hat1',
                    productType: 'ACCESSORIES',
                    productName: 'American Snapback',
                    productPrice: 125
                },
                {
                    productId: 5,
                    productImage: 'shorts2',
                    productType: 'SHORTS',
                    productName: 'American Shorts',
                    productPrice: 63
                },
                {
                    productId: 6,
                    productImage: 'hat2',
                    productType: 'ACCESSORIES',
                    productName: 'Flex Fit Hat',
                    productPrice: 88
                },
                {
                    productId: 7,
                    productImage: 'shoes2',
                    productType: 'SHOES',
                    productName: 'ElitePros',
                    productPrice: 100
                },
                {
                    productId: 8,
                    productImage: 'shoes1',
                    productType: 'SHOES',
                    productName: 'Vanity Heels',
                    productPrice: 100
                },
                {
                    productId: 9,
                    productImage: 'hoodie1',
                    productType: 'HOODIES',
                    productName: 'Gray Hoodie',
                    productPrice: 50
                },
                {
                    productId: 10,
                    productImage: 'hoodie2',
                    productType: 'HOODIES',
                    productName: 'Black Hoodie',
                    productPrice: 50
                },
                {
                    productId: 11,
                    productImage: 'pants1',
                    productType: 'PANTS',
                    productName: 'Mens Jeans',
                    productPrice: 75
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
            pathFilter: []
        }
    }

    handlePath = (pathFilter, pathFilter2) => {
        let pf = [pathFilter, pathFilter2]
        this.setState({ pathFilter: pf });
    }
    
    handlePathExit = () => {
        this.setState({ pathFilter: "" });
    }

    doesProductExist = (productId, size) => this.state.cartData.items.find(product => product.productData.productId === productId && product.productSize === size)
    
    addToCart = (productId, size, quantity) => {
        if (this.doesProductExist(productId, size)) {
            this.setState(prevState => ({
                ...prevState,
                items: this.state.cartData.items.map(item => {
                    if (item.productData.productId === productId) {
                        item.productQuantity += quantity
                    }
                    return item
                })
            }))
        }

        else {
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: [...prevState.cartData.items, { productData: this.state.products[productId - 1], productSize: size, productQuantity: quantity }]
                }
            }))
        }
    }

    changeItemQuantity = (id, newQuantity) => {
        if(newQuantity === 1) {
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: this.state.cartData.items.map(item => {
                        if (String(item.productData.productId) === String(id)) {
                            item.productQuantity += 1
                        }
                        return item
                    })
                }
            }))
        } else {
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: this.state.cartData.items.map(item => {
                        if (String(item.productData.productId) === String(id)) {
                            if(item.productQuantity === 1) {
                                alert("Quantity must be greater than 0");
                            } else {
                                item.productQuantity -= 1
                            }
                        }
                        return item
                    })
                }
            }))
        }

        console.log(this.state.cartData)
    }

    removeFromCart = (productId) => {
        if(confirm("Are you sure you want to remove this item?")) {
            this.setState(prevState => ({
                cartData: {
                    ...prevState.cartData,
                    items: this.state.cartData.items.filter((item) => {
                        return item.productData.productId !== productId
                    })
                }
            }))
        }
    }

    render() {
        return (
            <div className="App">
                <ScrollToTop />
                <Nav></Nav>
                <Switch>
                    <Route path="/" render={(props) => <Home handlePath={this.handlePath} {...props} />} exact />
                    <Route path="/shop" render={() => <Shop addToCart={this.addToCart} products={this.state.products} pathFilter={this.state.pathFilter} pathExit={this.handlePathExit} /> } />
                    <Route path="/news" component={News} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" render={() => <Cart cartData={this.state.cartData} changeItemQuantity={this.changeItemQuantity} removeFromCart={this.removeFromCart}/>} />
                    <Route path="/profile" component={Profile} />
                    <Route component={Error} />
                </Switch>
            </div>
        );
    }
}

export default App;
