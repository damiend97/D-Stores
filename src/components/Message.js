import React, {Component} from 'react';

class Message extends Component {
    render() {
        return (
            <div id="mc" className="message-container">
                {this.props.message}
            </div>
        )
    }
}

export default Message;