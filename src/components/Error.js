import React, { Component } from 'react';
import $ from 'jquery';

class Error extends Component {
    componentDidMount() {
        let viewHeight = document.documentElement.clientHeight;
        let navHeight = document.getElementById('navigation').clientHeight;
        
        let fvHeight = viewHeight - navHeight;
        $('.error-container').css('height', fvHeight);
    }

    render() {
        return (
            <div className="error-container">
                Oops! Sorry we can't find this page!
            </div>
        )
    }
}

export default Error;