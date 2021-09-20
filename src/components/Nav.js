import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Nav extends Component {
    openNav = () => {
        $('.nav-container').css({
            'height':'100vh',
            'flex-direction':'column-reverse',
            'justify-content':'center',
            'flex-wrap':'wrap'  
        });
        $('.nlmain').css({
            'display': 'flex'
        })
        $('.nlsub').css({
            'display':'flex'
        });
        $('.nav-link-hvr').toggleClass('hvr');
        $('.nav-link-hvr').css('width','100%');
        $('.nav-but').css('display','none');
        $('.logo').css('display','none');
        $('.nav-x').css({
            'display':'block',
            'text-align':'center',
            'position':'absolute',
            'top':'20px'
        });
    }
    closeNav = () => {
        $('.nav-container').css({
            'height':'100px',
            'flex-direction':'initial',
            'justify-content':'space-between',
            'flex-wrap':'nowrap'
        });
        $('.nav-links').css('display','none');
        $('.nav-link-hvr').toggleClass('hvr');
        $('.nav-link-hvr').css('width','auto');
        $('.nav-but').css('display','block');
        $('.logo').css('display','block');
        $('.nav-x').css('display','none');
    }
    render() {
        return (
            <div className="nav-container" id="navigation">
                <div className="logo">EliteClothing</div>

                <div className="nav-but" onClick={this.openNav}><i className="fas fa-bars"></i></div>
                
                <div className="nav-links nlmain">
                    <Link to="/" className="nav-link hvr nav-link-hvr">Home</Link>
                    <Link to="/shop" className="nav-link hvr nav-link-hvr">Shop</Link>
                    <Link to="/news" className="nav-link hvr nav-link-hvr">News</Link>
                    <Link to="/contact" className="nav-link hvr nav-link-hvr">Contact</Link>
                </div>
                
                <div className="nav-links nlsub">
                    <Link to="/cart" id="cart-logo-container" className="nav-link s-shift ml"><i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/profile" className="nav-link s-shift mr"><i className="fas fa-user-circle"></i></Link>
                </div>

                <div className="nav-x" onClick={this.closeNav}><i className="fas fa-times"></i></div>                
            </div>
        )
    }
}

export default Nav;