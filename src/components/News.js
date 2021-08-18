import React, { Component } from 'react';
import $ from 'jquery';

class News extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;

        let fvHeight = viewHeight - navHeight;
        $('.full-height-container').css('min-height', fvHeight);

        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        // top of element
        var elementTop = $($(".left-container")).offset().top;
        // bottom of element
        var elementBottom = elementTop + $($(".left-container")).outerHeight();
        // top of view
        var viewportTop = $(window).scrollTop();
        // bottom of view
        var viewportBottom = viewportTop + $(window).height();
        // return bool
        if (elementBottom > viewportTop && elementTop < viewportBottom ) {
            $(".left-container").css("background","rgba(0,0,0," + (((elementTop - viewportBottom)/1000 * -2) - .1) + ")");
        }
    }
    render() {
        return (
            <div className="news-container">
                 <div className="news-cover full-height-container">
                    {/* <div className="cover-image"></div> */}
                    Elite Clothing News Feed
                </div>
                <div className="news-items">
                    <div className="full-height-container" id="nitem1">
                        <div className="news-heading" id="nh1"><h1><i>New Location</i></h1></div>
                        <div className="text-box">
                            <div className="mask"></div>
                            {/* <div className="tboxtext"></div> */}
                        </div>
                        <div className="location-content">
                            <div className="cube-content">
                                <div>
                                    We are excited to announce that we are officially open for business in San Diego. This is the largest of all of our locations and we are very proud of the way it turned out. Please swing by and enjoy a discount shopping price for your first time shopping there!
                                </div>
                            </div>
                        </div>

                        <div className="news-detail" id="bg-white">
                            <div className="image-cards">
                                <div className="image-card"><p>New Products</p></div>
                                <div className="image-card"><p>New Location</p></div>
                                <div className="image-card"><p>New <br /> Deals</p></div>
                            </div>

                            <div className="content-diamond">
                                <div>
                                    <h2>San Diego Elite Clothing</h2>
                                    <h1>Open for business!</h1>
                                    <h4>2512 Grant St. San Diego, CA</h4>
                                    <div>
                                        7:00am - 8:30pm Mon - Fri <br />
                                        9:00am - 9:30pm Sat - Sun
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="full-height-container" id="nitem2">
                        <div className="news-heading" id="nh22">
                            
                            <div className="news-heading" id="nh2"></div>
                            
                        </div>
                        <div className="news-detail ndpadding">
                            <h1>How Covid is affecting us...</h1><br />
                            Unfortunately due to the Coronavirus we have been forced to shut down all physical store locations until this maddness comes to an end! However, fear not...for 80% of our business consists of online consumers. We hope that you will continue your business with us via our online shopping portal.
                            <br /><br /><br /><hr /><br /><br />
                            <div>
                                <h1>How we are staying positive...</h1><br />
                                We as a company believe that the darkest times bring out in the best of us. That's why we have taken this opportunity to add to our product selection. Please browse our new face mask selection in the <i className="text-adjust">accessories</i> tab of our shop.
                            </div><br /><br /><br /><hr /><br /><br />
                            <div className="sec3">
                                <h1>Face Mask Designs - <u><i>Shop Now</i></u></h1>
                            </div><br />
                            <div className="faces-container">
                                <div className="face1"></div>
                                <div className="face2"></div>
                                <div className="face3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="full-height-container" id="nitem3">
                        <div className="news-heading" id="nh3">
                            <h1><i>HELPING HANDS 2021</i></h1>
                        </div>
                        <div className="news-detail" id="nd3">
                            Help us donate to those in need! We work with several other organizations to give to the less fortunate! We believe that giving back to the community is what keeps us going. That's why our team has commited to match every dollar spent with us towards fighting for the homeless, disabled, and less fortunate.
                            <br /><br /><br />
                            <h2>OUR PARTNERS</h2>
                            <div className="boxes">
                                <div className="box1"></div>
                                <div className="box2"></div>
                                <div className="box3"></div>
                            </div>
                            <br />
                            <h2>HOW TO DONATE</h2>
                            <br />
                            <form action="" className="donation-form">
                                <input type="text" placeholder="NAME" className="donate-name"/><br />
                                <input type="text" placeholder="EMAIL" className="donate-email"/><br />
                                <textarea name="" id="" cols="30" rows="10" className="donate-area" placeholder="MESSAGE US YOUR INFO AND WE WILL SCHEDULE YOU A DONATION CONSULTATION! :)"></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;