import React, { Component } from 'react';
import Product from './Product';

const initalTypes = [];

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeFilters: [],
            priceFilter: [0,0]
        }
    }

    componentDidMount() {
        this.setState({
            typeFilters: this.props.pathFilter
        })
        
        let buttons = document.getElementsByClassName("filter-button");

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            
            if(buttons[i].innerHTML === this.props.pathFilter[0]) {
                buttons[i].classList.add('type-filter-selected');
                document.getElementById("all-types-button").classList.remove('type-filter-selected');
            }
            if(buttons[i].innerHTML === this.props.pathFilter[1]) {
                buttons[i].classList.add('type-filter-selected');
                document.getElementById("all-types-button").classList.remove('type-filter-selected');
            }

        }
    }
    componentWillUnmount() {
        this.setState({
            typeFilters: initalTypes
        })
        this.props.pathExit();
    }

    filterType = (e) => {
        if(e.target.innerHTML === "ALL TYPES") {
            this.setState({
                typeFilters: []
            })

            let filtersSelected = document.getElementsByClassName('type-filter-selected');

            while(filtersSelected.length) {
                filtersSelected[0].classList.remove('type-filter-selected');
            }

            e.target.classList.add('type-filter-selected');
        } else {
            document.getElementById('all-types-button').classList.remove('type-filter-selected');

            if(this.state.typeFilters.includes(e.target.innerHTML)) {
                // remove type from array
                let filters = [...this.state.typeFilters];
                for (var i=filters.length-1; i>=0; i--){
                    if(filters[i] === e.target.innerHTML) {
                        filters.splice(i, 1);
                    }
                }
                if (filters.length === 0) {
                    document.getElementById("all-types-button").classList.add('type-filter-selected');
                }
                this.setState({
                    typeFilters: filters
                })
                e.target.classList.remove('type-filter-selected');

            } else {
                this.setState({
                    typeFilters: [...this.state.typeFilters, e.target.innerHTML]
                })
                e.target.classList.add('type-filter-selected');
            }
        }
    }

    filterPrice = (e) => {
        let filtersSelected = document.getElementsByClassName('price-filter-selected');

        while(filtersSelected.length) {
            filtersSelected[0].classList.remove('price-filter-selected');
        }

        e.target.classList.add('price-filter-selected');

        switch(e.target.innerHTML) {
            case "ALL PRICES":
                this.setState({
                    priceFilter: [0,Infinity]
                })
                break;
            case "$1 - $20":
                this.setState({
                    priceFilter: [1,20]
                })
                break;
            case "$20 - $50":
                this.setState({
                    priceFilter: [20,50]
                })
                break;
            case "$50 - $100":
                this.setState({
                    priceFilter: [50,100]
                })
                break;
            case "$100 &amp; up":
                this.setState({
                    priceFilter: [100,Infinity]
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="filter-container">
                    <div className="filter-buttons-container">
                        {/* <div className="filters-label">
                            <div className="line-through-short"></div>
                            Shop Options
                            <div className="line-through-long"></div>
                        </div> */}

                        <div className="filter-buttons">
                            <div className="filter-button type-filter-selected" id="all-types-button" onClick={this.filterType}>ALL TYPES</div>
                            <div className="filter-button" onClick={this.filterType}>SHIRTS</div>
                            <div className="filter-button" onClick={this.filterType}>HOODIES</div>
                            <div className="filter-button" onClick={this.filterType}>PANTS</div>
                            <div className="filter-button" onClick={this.filterType}>SHORTS</div>
                            <div className="filter-button" onClick={this.filterType}>SHOES</div>
                            <div className="filter-button" onClick={this.filterType}>ACCESSORIES</div>
                        </div>
                        <div className="filter-buttons">
                            <div className="filter-button price-filter-selected" id="all-prices-button" onClick={this.filterPrice}>ALL PRICES</div>
                            <div className="filter-button" onClick={this.filterPrice}>$1 - $20</div>
                            <div className="filter-button" onClick={this.filterPrice}>$20 - $50</div>
                            <div className="filter-button" onClick={this.filterPrice}>$50 - $100</div>
                            <div className="filter-button" onClick={this.filterPrice}>$100 & up</div>
                        </div>
                    </div>
                </div>
                
                <div className="product-grid">
                    {
                        this.props.products.map(product => {
                            if(this.state.typeFilters.includes(product.productType) || this.state.typeFilters.length === 0) {
                                if((this.state.priceFilter[0] <= product.productPrice && this.state.priceFilter[1] >= product.productPrice)|| this.state.priceFilter[0] === 0) {
                                    return (
                                        <Product changeMessage={this.props.changeMessage} addToCart={this.props.addToCart} key={product.productId} pKey={product.productKey} id={product.productId} image={product.productImage} name={product.productName} price={product.productPrice}></Product>
                                    )
                                }
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Shop;
