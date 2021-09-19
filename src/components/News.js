import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class News extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;

        let fvHeight = viewHeight - navHeight;
        $('.full-height-container').css('min-height', fvHeight);
    }

    render() {
        return (
            <div className="news-container">
                 <div className="news-cover full-height-container">
                    Elite Clothing News Feed
                </div>
                <div className="news-items">
                    <div id="nitem1">
                        <div className="n-box">
                        <div className="banner">2512 Grant Street, San Diego, CA</div>
                            <div className="n-center">
                                <div className="n-header">New Location</div>
                                <div className="n-content">
                                    <p>We are excited to announce that we are officially open for business in San Diego. This is the largest of all of our locations and we are very proud of the way it turned out. Please swing by and enjoy a discount shopping price for your first time shopping there!</p>

                                    <div className="image-cards">
                                        <div className="image-card"><p>New Products</p></div>
                                        <div className="image-card"><p>New Location</p></div>
                                        <div className="image-card"><p>New <br /> Deals</p></div>
                                    </div>
                                    
                                    <div className="store-info">
                                        <div className="t-row">
                                            <div className="darken">Monday - Friday</div><div className="clear nbl">7:00am - 8:30pm</div>
                                        </div>
                                        <div className="t-row">
                                            <div className="darken d-nbo">Saturday - Sunday</div><div className="clear d-nbo nbl">9:00am - 9:30pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="nitem2">
                        <div className="n-box">
                            <div className="n-center">
                                <div className="n-header">Closed for Corona</div>
                                <div className="n-content">
                                    <h2>How Covid is affecting us...</h2>
                                    <div className="row-container">
                                        Unfortunately due to the Coronavirus we have been forced to shut down all physical store locations until this maddness comes to an end! However, fear not...for 80% of our business consists of online consumers. We hope that you will continue your business with us via our online shopping portal.
                                    </div>
                                    <br /><br />
                                    <h2>How we are staying positive...</h2>
                                    <div className="row-container">
                                        We as a company believe that the darkest times bring out in the best of us. That's why we have taken this opportunity to add to our product selection. Please browse our new face mask selection in the <i className="text-adjust">accessories</i> tab of our shop.
                                    </div>
                                    <br /><br />
                                    <h2>Elite Mask Designs - <i><Link style={{color: 'black'}}to="/shop">Shop Now</Link></i></h2>
                                    <div className="faces-container">
                                        <div className="face1"></div>
                                        <div className="face2"></div>
                                        <div className="face3"></div>
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
                   <div id="nitem3">
                        <div className="n-box">
                            <div className="n-center">
                                <div className="n-header">Helping Hands 2021</div>
                                <div className="n-content">
                                    <h2>Our Mission</h2>
                                    <div className="row-container">
                                        Help us donate to those in need! We work with several other organizations to give to the less fortunate! We believe that giving back to the community is what keeps us going. That's why our team has commited to match every dollar spent with us towards fighting for the homeless, disabled, and less fortunate.
                                    </div>
                                    <br /><br />
                                    <h2>Our Partners</h2>
                                    <div className="boxes">
                                        <div className="box1"></div>
                                        <div className="box2"></div>
                                        <div className="box3"></div>
                                    </div>
                                    <h2>How to Donate</h2>
                                    <div className="donation-form-container">
                                        <form action="" className="donation-form">
                                            <input type="text" placeholder="Name" className="donate-name"/><br />
                                            <input type="text" placeholder="Email" className="donate-email"/><br />
                                            <textarea name="" id="" cols="30" rows="10" className="donate-area" placeholder="Say hello and we will schedule you a donation consultation!"></textarea><br />
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            
        )
    }
}

export default News;