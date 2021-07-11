import React, { Component } from 'react';
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
                    <div className="cover-image"></div>
                </div>
                <div className="news-items">
                    <div className="full-height-container" id="nitem1">
                        <div className="news-heading" id="nh1">
                        </div>
                        <div className="news-detail">
                            <div className="image-container">
                                <div className="store-pic"></div>
                            </div>
                            <div className="right-box">
                                <h2>San Diego Elite Clothing</h2>
                                <h1>Open for business!</h1>
                                <h4>2512 Grant St. San Diego, CA</h4>
                                <div>
                                    7:00am - 8:30pm Mon - Fri <br />
                                    9:00am - 9:30pm Sat - Sun
                                </div>
                            </div>
                            <div className="image-cards">
                                <div className="image-card"><p>New Location</p></div>
                                <div className="image-card"><p>New Product</p></div>
                                <div className="image-card"><p>New Deals</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="full-height-container" id="nitem2">
                        <div className="news-heading" id="nh2">
                        </div>
                        <div className="news-detail">
                        </div>
                    </div>
                    <div className="full-height-container" id="nitem3">
                        <div className="news-heading" id="nh3">
                        </div>
                        <div className="news-detail">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;