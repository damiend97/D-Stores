import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Home extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;
        let barHeight = document.getElementById('dbar').clientHeight;
        let slideHeight = viewHeight - (navHeight + barHeight);

        $('.image-slider').css('height', slideHeight);
        
        let fvHeight = viewHeight - navHeight;
        $('.full-view-container').css('height', fvHeight);
    }
    render() {
        
        return (
            <div className="home-container">
                <div className="dark-bar" id="dbar">Free shipping when you order before 7/2/20</div>

                <div className="image-slider">
                        <div className="slide" id="slide1"></div>
                        <div className="slide" id="slide2"></div>
                        <div className="slide" id="slide3"></div>
                        <div className="center-text">
                            <div>
                                <h1>LOOK GOOD FEEL GOOD</h1>
                                <Link to="/shop" className="shop-button">Start Shopping</Link>
                            </div>
                        </div>
                </div>

                <div className="full-view-container">
                    <div className="content-box">
                        <h1>Womens Footwear</h1>
                        <h3>Vanity Selection</h3>
                        <Link to="/buy" className="buy-button">Buy Now</Link>
                    </div>
                    <div className="image-box" id="ib1"></div>
                </div>

                <div className="full-view-container bg-gray">
                    <div className="image-box" id="ib2"></div>
                    <div className="content-box cl-white">
                        <h1>Assorted Outfits</h1>
                        <h3>A look just for you</h3>
                        <Link to="/buy" className="buy-button">Buy Now</Link>
                    </div>
                </div>

                <div className="full-view-container">
                    <div className="content-box">
                        <h1>Pump up your kicks</h1>
                        <h3>Elite Pros 3</h3>
                        <Link to="/buy" className="buy-button">Buy Now</Link>
                    </div>
                    <div className="image-box" id="ib3"></div>
                </div>

                <div className="parallax">
                    <div className="about-container">
                        <div className="flex-div">
                            <h1>Our Story</h1>
                            <br></br>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis veniam quam enim beatae? Obcaecati voluptate fugiat sint commodi, veniam assumenda aperiam enim beatae ipsa fugit sapiente voluptas deserunt laudantium minima?
                        </div>
                    </div>
                </div>

                <div className="news-preview">
                    <div className="news-text">
                        <div className="custom-line"></div>
                        <h1>news from our feed</h1>
                        <div className="custom-line"></div>
                    </div>
                    <div className="news-items">
                        <div className="news-item" id="ni1"></div>
                        <div className="news-item" id="ni2"></div>
                        <div className="news-item" id="ni3"></div>
                    </div>
                    <div className="news-descs">
                        <div className="news-desc">
                            <div className="news-header">New Store, San Diego CA</div>
                            <div className="news-body">Our new shop just opened on 3/2/2020! Swing by and check it out.<br/><br/><a href="#">Get more details here</a></div>
                        </div>
                        <div className="news-desc">
                            <div className="news-header">Closed for Corona</div>
                            <div className="news-body">Sorry for the inconvience everybody but we will be forced to shut down all locations until this maddness comes to an end!<br></br><br/><a href="#">Read More</a></div>
                        </div>
                        <div className="news-desc">
                            <div className="news-header">Helping Hands 2020</div>
                            <div className="news-body">Help us donate to those in need! We work with several other organizations to give to the less fortunate!<br></br><br/><a href="#">Get Started Here</a></div>
                        </div>
                    </div>
                </div>

                <div className="map-container">
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

export default Home;