import React, { Component } from 'react';

class VerifyLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            res: ""
        }
    }
    componentDidMount = () => {
        let loc = window.location.href.split('/');
        let res = loc.pop() || loc.pop();

        this.setState({
            res: res
        })
    }

    sendRes = (e) => {
        e.preventDefault();

        this.props.getCustomerToken(this.state.res);
    }
    render() {
        return (
            <div className="validate-message">
                <div>
                    ALMOST THERE! <br />
                    <button className="validate-button" onClick={this.sendRes}>Continue to profile</button>
                </div>
            </div>
        );
    }
}

export default VerifyLogin;