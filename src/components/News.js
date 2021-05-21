import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className="news-container">
                <div className="news-flex">
                    <div className="news-item full" id="ni1"></div>
                    <div className="news-description">
                        <div className="news-header">New Store, San Diego, CA</div>
                        <div className="news-body">Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatibus! dolor sit amet consectetur adipisicing elit. Amet facere eos facilis temporibus, exercitationem qui.</div>
                    </div>
                </div>
                <div className="news-flex">
                    <div className="news-item full" id="ni2"></div>
                    <div className="news-description">
                        <div className="news-header">Closed for Corona</div>
                        <div className="news-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae vitae est pariatur consequatur? Maiores nesciunt assumenda ducimus, illo, dignissimos excepturi minus pariatur impedit a, voluptas maxime! Nostrum similique sunt voluptate maiores, eos laborum, in assumenda ut minus dolor fugit labore? Dignissimos non eligendi repudiandae suscipit modi. Repellendus, dicta necessitatibus.</div>
                    </div>
                </div>
                <div className="news-flex">
                    <div className="news-item full" id="ni3"></div>
                    <div className="news-description">
                        <div className="news-header">Helping Hands 2020</div>
                        <div className="news-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum, hic impedit deserunt ex molestiae ipsam ipsum tenetur quibusdam labore, culpa possimus dicta maxime perferendis qui rerum soluta. Quidem ipsum aliquam sapiente, nam, alias eligendi quod sed exercitationem deserunt harum in. Repellat ea sed accusantium a iusto voluptatem molestias veritatis minus ipsum animi. Exercitationem alias dolorem nisi aperiam sunt, similique aliquam vero omnis iste. Quaerat consectetur saepe accusantium architecto molestias cum similique aperiam nulla perspiciatis maiores obcaecati, molestiae eveniet dicta eligendi? Unde, labore incidunt temporibus ut veniam voluptate pariatur neque repellat laudantium nihil quidem, autem rem aliquid qui ducimus tempore?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;