import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav-container" id="navigation">
                <div className="logo">EliteClothing</div>

                <div className="nav-links">
                    <Link to="/" className="nav-link hvr">Home</Link>
                    <Link to="/shop" className="nav-link hvr">Shop</Link>
                    <Link to="/news" className="nav-link hvr">News</Link>
                    <Link to="/contact" className="nav-link hvr">Contact</Link>
                </div>
                
                <div className="nav-links">
                    <Link to="/cart" className="nav-link s-shift"><i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/profile" className="nav-link s-shift"><i className="fas fa-user-circle"></i></Link>
                </div>
            </div>
        )
    }
}

export default Nav;