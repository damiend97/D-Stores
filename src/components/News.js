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
                    <div className="cover-image"></div>
                </div>
                <div className="news-items">
                    <div className="full-height-container" id="nitem1">
                        <div className="news-heading" id="nh1"></div>
                        <div className="text-box">
                            <div className="mask"></div>
                            {/* <div className="tboxtext"></div> */}
                        </div>

                        <div className="news-detail">
                            <div className="image-cards">
                                <div className="image-card"><p>New Location</p></div>
                                <div className="image-card"><p>New Products</p></div>
                                <div className="image-card"><p>New <br /> Deals</p></div>
                            </div>

                            <div className="rl-container">
                                <div className="left-container">
                                    <div className="left-content">
                                        <h2>San Diego Elite Clothing</h2>
                                        <h1>Open for business!</h1>
                                        <h4>2512 Grant St. San Diego, CA</h4>
                                        <div>
                                            7:00am - 8:30pm Mon - Fri <br />
                                            9:00am - 9:30pm Sat - Sun
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                We are excited to announce that we are officially open for business in San Diego. This is the largest of all of our locations and we are very proud of the way it turned out. Please swing by and enjoy a discount shopping price for your first time shopping there!
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
                                <h1>Elite Face Masks - <u><i>Shop Now</i></u></h1>
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
                        </div>
                        <div className="news-detail">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae odit eligendi cupiditate ex suscipit eveniet in molestiae voluptatibus excepturi temporibus magni deserunt nemo, id, tempore veritatis iusto praesentium! Numquam necessitatibus obcaecati dolorem, optio cum aliquid dicta placeat illum quasi nam ut repellendus at, assumenda suscipit quas vero adipisci eaque amet excepturi similique asperiores consectetur hic totam. Sed, asperiores mollitia possimus consequatur deserunt, eveniet eos similique consectetur quidem animi sapiente repudiandae sint, tempora voluptates nisi id ducimus? Mollitia sint quo facilis nobis, doloribus repellendus quas quos blanditiis neque dolorum molestiae nemo alias iste nihil cupiditate maxime rem perferendis inventore voluptates! Sit laudantium quasi quam similique iste repellat sunt deleniti amet officiis. Doloremque, impedit rem eius quis voluptatibus vitae? Non quaerat fugiat numquam. Ipsa possimus repudiandae recusandae ipsum omnis! Quibusdam velit fugiat quaerat expedita dolorem illum reprehenderit quis ratione earum laboriosam nisi autem distinctio aliquam, fugit in ex. Delectus cumque assumenda natus nulla blanditiis id. Ducimus eum, neque sapiente velit, iure doloremque doloribus sed asperiores aliquid rerum, officiis nemo officia! Nam quo eveniet itaque quaerat iste facilis voluptatem, atque sint expedita ut ipsa incidunt, omnis dolorem vitae modi minima officia natus similique dicta? Adipisci delectus tempora nobis, necessitatibus aliquam quam qui nulla explicabo? Aliquid animi pariatur, assumenda asperiores ad iure magnam beatae recusandae nesciunt illo iste dolore molestiae quam aspernatur quia fugiat nihil itaque tenetur nostrum. Obcaecati culpa facilis numquam voluptas aperiam inventore minus! At, minima a possimus quia voluptate quae quis dicta labore nisi fugiat commodi iste, cumque et perspiciatis quam ad veritatis rem! Modi, obcaecati nesciunt! Neque, labore obcaecati commodi, quo eius aliquam dolorem sit inventore qui nostrum voluptatibus odit, laboriosam fuga nesciunt et ipsam doloribus molestiae laborum nulla dolorum. Nostrum, eum velit magni nulla expedita ratione voluptas neque iusto assumenda? Dolore similique obcaecati voluptatem tempora, neque provident consequatur accusantium suscipit ad ratione nisi voluptatibus totam sunt reiciendis quaerat, possimus nobis magnam maiores nostrum iusto velit at sequi pariatur aspernatur! Maxime, quod minima quibusdam perferendis non suscipit laudantium similique tempore autem omnis quia aut, natus tenetur asperiores ducimus! Illo ipsum mollitia voluptatum provident quasi hic, dolores eveniet repudiandae ullam dicta, vel incidunt esse quaerat eius qui, exercitationem blanditiis! Nam adipisci a ipsa tempore, veritatis vero molestias omnis. Delectus quae dolor, consectetur quidem veritatis aliquam fuga possimus esse iusto, laudantium assumenda. Quidem autem tempore quia, ducimus maxime omnis provident illo vel ipsum, cum eius id ratione, totam laborum incidunt excepturi harum temporibus atque saepe nisi. Consequatur debitis dicta quos eaque minima, maxime tempora. Odit dolorem, tenetur dolorum ipsum eveniet consectetur doloribus hic at voluptates blanditiis adipisci quia unde repellat harum rerum quas fuga ducimus explicabo ratione saepe autem, numquam officiis assumenda obcaecati. Quo, placeat nostrum eaque voluptatum cupiditate a blanditiis. In, corporis minima laboriosam consequatur nulla dolores quas tenetur odio at accusamus aliquid deserunt possimus, nemo delectus. Velit pariatur, natus consequatur debitis, reiciendis impedit voluptatum molestias esse doloribus accusantium voluptatem molestiae et dolore aliquam architecto adipisci sunt repudiandae autem. Quia provident eos nisi? Officiis eius laborum reprehenderit cupiditate, ullam repellendus!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;