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
            <div>
                <div className="map-container full-view-container">
            <div className="info">
                <h2>Elite Clothing Headquarters</h2>
                <hr></hr>
                <div className="split">
                    <div className="split-top">
                        1234 Homestead Rd<br></br>
                        Santa Clara, CA 95050<br></br>
                        (123) 456-7890<br></br>
                        eliteclothing@gmail.com
                    </div>
                    <div className="split-bottom">
                        Monday - Thursday, 11:00 to 19:00<br></br>
                        Friday and Saturday, 10:00 to 19:00<br></br>
                        Sunday, Closed
                    </div>
                </div>
            </div>
            <div className="map"></div>
            <div className="message-pointer">
                <p>Message Us</p><div className="down-arrow"></div>
            </div>
        </div>

        <div className="contact-text">
            <div className="custom-line"></div>
            <h1>contact us</h1>
            <div className="custom-line"></div>
        </div>
        <div className="contact-container">
            <form action="#" className="contact-form">
                <div className="grid-item" id="g1">
                    <label htmlFor="username">Name</label>
                    <input type="text" name="name" id="user-name"/>
                </div>
                <div className="grid-item" id="g2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="user-email"/>
                </div>
                <div className="grid-item" id="g3">
                    <label htmlFor="phonenumber">Phone Number (Optional)</label>
                    <input type="text" name="phonenumber" id="phone-number"/>
                </div>
                <div className="grid-item" id="g4">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="user-message"/>
                </div>
                <div className="grid-item" id="g5">
                    <input type="submit" value="send" id="user-submit"/>
                </div>
            </form>
        </div>
            </div>
        )
    }
}

export default Contact;