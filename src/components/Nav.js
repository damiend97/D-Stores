import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Nav extends Component {
    openNav = () => {
        $('.nav-container').css({
            'height':'100vh',
            'flex-wrap':'wrap'
        });
        $('.page-links').css({
            'display': 'flex'
        })
        $('.function-links').css({
            'display':'none'
        });
        $('.page-link').toggleClass('hvr');
        $('.page-link').css('width','100%');
        $('.logo').css('display','none');
        $('.close-nav').css({
            'display':'block'
        });
    }
    closeNav = () => {
        $('.nav-container').css({
            'height':'100px',
            'justify-content':'space-between',
            'flex-wrap':'nowrap'
        });
        $('.page-links').css('display','none');
        $('.page-link').toggleClass('hvr');
        $('.nav-but').css('display','block');
        $('.logo').css('display','block');
        $('.close-nav').css('display','none');
        $('.function-links').css('display','flex');
    }
    render() {
        return (
            <div className="nav-container" id="navigation">
                <div className="logo">EliteClothing</div>                
                <div className="page-links">
                    <div className="page-links-center">
                        <Link to="/" onClick={this.closeNav} className="nav-link hvr page-link">Home</Link>
                        <Link to="/shop" onClick={this.closeNav} className="nav-link hvr page-link">Shop</Link>
                        <Link to="/news" onClick={this.closeNav} className="nav-link hvr page-link">News</Link>
                        <Link to="/contact" onClick={this.closeNav} className="nav-link hvr page-link">Contact</Link>
                    </div>
                </div>
                
                <div className="nav-links function-links">
                    <Link to="/cart" onClick={this.closeNav} id="cart-logo-container" className="nav-link s-shift function-link"><i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/profile" onClick={this.closeNav} className="nav-link s-shift function-link"><i className="fas fa-user-circle"></i></Link>
                    <div onClick={this.openNav}><i className="fas fa-bars open-nav function-link"></i></div>
                </div>

                <div className="close-nav" onClick={this.closeNav}><i className="fas fa-times"></i></div>   


                             
            </div>
        )
    }
}

export default Nav;