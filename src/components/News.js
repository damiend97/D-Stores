import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class News extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;

        let fvHeight = viewHeight - navHeight;
        $('.full-height-container').css('min-height', fvHeight);
        $('.split').css('min-height', fvHeight);

        // let leftHeight = $('#ls2').css('height');
        // $('#rs2').css('height',leftHeight);
        
        // window.addEventListener('scroll', this.handleScroll);
    }

    // handleScroll() {
    //     // top of element
    //     var elementTop = $($(".left-container")).offset().top;
    //     // bottom of element
    //     var elementBottom = elementTop + $($(".left-container")).outerHeight();
    //     // top of view
    //     var viewportTop = $(window).scrollTop();
    //     // bottom of view
    //     var viewportBottom = viewportTop + $(window).height();
    //     // return bool
    //     if (elementBottom > viewportTop && elementTop < viewportBottom ) {
    //         $(".left-container").css("background","rgba(0,0,0," + (((elementTop - viewportBottom)/1000 * -2) - .1) + ")");
    //     }
    // }
    render() {
        return (
            <div className="news-container">
                 <div className="news-cover full-height-container">
                    Elite Clothing News Feed
                </div>
                <div className="news-items">
                    <div className="full-height-container" id="nitem1">
                        <div className="n-header">New Location</div>
                        <div className="no-flex">
                            <div id="ls1-container">
                                <div id="ls1-image"></div>
                                <div id="ls1">
                                    <div className="info-mask"></div>
                                    <div className="top-layer">
                                        <div className="top-layer">
                                            2512 Grant Street <br />San Diego, CA
                                        </div>
                                        <div className="top-layer">
                                            Monday - Friday <br />
                                            7:00am - 8:30pm <br />
                                            Saturday and Sunday <br />
                                            9:00am - 9:30pm
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="rs1">We are excited to announce that we are officially open for business in San Diego. This is the largest of all of our locations and we are very proud of the way it turned out. Please swing by and enjoy a discount shopping price for your first time shopping there! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur recusandae, distinctio quaerat fugiat, rerum dignissimos deleniti temporibus labore earum est eligendi. Consequuntur, tempore dignissimos sapiente, excepturi consectetur inventore nesciunt temporibus nulla id aperiam modi animi ducimus nemo. Repellat nemo asperiores inventore, impedit voluptatum illum similique mollitia saepe officia, esse dicta fugit quidem atque quas eius. Tempora odio at voluptatem, deserunt consequuntur aliquam, mollitia minus eligendi nobis architecto dignissimos facilis enim saepe quaerat sed magni omnis adipisci aspernatur autem debitis! Maxime itaque enim aperiam expedita sed dolorem officiis numquam repellendus! Quae, nostrum nobis excepturi incidunt dolor fugiat assumenda omnis voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi facilis tempora beatae, voluptatibus maiores voluptates officia provident magni reprehenderit?<br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut molestias earum iure nobis quos ab vel voluptas quasi accusamus eos animi, vero qui ad magni provident distinctio officia blanditiis libero iste nisi error? Ipsa minus commodi nihil harum molestias error velit suscipit exercitationem? Nemo, accusamus accusantium neque nihil repudiandae libero magni rem maxime quae modi asperiores blanditiis velit repellat doloremque nostrum voluptas. Aspernatur minus beatae non distinctio tempora laudantium!</div>
                            <br /><br /><hr />
                            <div className="image-cards">
                                <div className="image-card"><p>New Products</p></div>
                                <div className="image-card"><p>New Location</p></div>
                                <div className="image-card"><p>New <br /> Deals</p></div>
                            </div>
                            <p className="bottom-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quis. Quisquam cupiditate ipsa quidem dignissimos facilis ea, doloribus, sint a deleniti nulla quibusdam veritatis debitis animi. Repellendus beatae similique consequuntur consequatur vitae, eius sequi iste aperiam praesentium asperiores vel. Maxime non et iure neque pariatur porro qui impedit tenetur perferendis!</p>
                        </div>
                    </div>

                    <div className="full-height-container" id="nitem2">
                        <div className="n-header">Closed for Corona</div>
                        <div className="n-body">
                            <div className="split" id="ls2">
                                <h2>How Covid is affecting us...</h2>
                                Unfortunately due to the Coronavirus we have been forced to shut down all physical store locations until this maddness comes to an end! However, fear not...for 80% of our business consists of online consumers. We hope that you will continue your business with us via our online shopping portal.
                                <br /><br />
                                <h2>How we are staying positive...</h2>
                                We as a company believe that the darkest times bring out in the best of us. That's why we have taken this opportunity to add to our product selection. Please browse our new face mask selection in the <i className="text-adjust">accessories</i> tab of our shop.
                                <br /><br />
                                
                            </div>
                            <div className="split" id="rs2"></div>
                            <div className="gborder">
                            <div className="mask-container">
                                <h2>Elite Mask Designs - <i><Link style={{color: 'white'}}to="/shop">Shop Now</Link></i></h2>
                            </div>
                            <div className="faces-container">
                                    <div className="face1"></div>
                                    <div className="face2"></div>
                                    <div className="face3"></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="full-height-container" id="nitem3">
                        <div className="n-header">Helping Hands 2021</div>
                        <div className="no-flex">
                            <div id="hh-card1">
                                <div className="mask-contain"></div>
                                <div id="hh-text1">
                                    <p><div className="box-heading">Our Mission</div><br />Help us donate to those in need! We work with several other organizations to give to the less fortunate! We believe that giving back to the community is what keeps us going. That's why our team has commited to match every dollar spent with us towards fighting for the homeless, disabled, and less fortunate.</p>
                                </div>
                            </div>
                            <div id="hh-card2">
                                <div className="mask-contain"></div>
                                <div id="hh-text2">
                                    <p><div className="box-heading">Our Partners</div><br /></p>
                                    <div className="boxes">
                                        <div className="box1"></div>
                                        <div className="box2"></div>
                                        <div className="box3"></div>
                                    </div>
                                </div>  
                            </div>
                            <div id="hh-card3">
                                <div className="mask-contain"></div>
                                <div id="hh-text3">
                                    <p><div className="box-heading">How to Donate</div><br /></p>
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
        )
    }
}

export default News;