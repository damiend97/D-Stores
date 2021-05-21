import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;

        $('.full-view-split').css('height', viewHeight - navHeight);
    }

    render() {
        return (
            <div className="full-view-split">
                <div className="split1"></div>
                <div className="split2"></div>
                <div className="split3"></div>
                <div className="contact-box">Contact Us</div>
            </div>
        )
    }
}

export default Contact;