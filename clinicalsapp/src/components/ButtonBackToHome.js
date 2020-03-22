import React from 'react';
import { Link } from 'react-router-dom';

class ButtonBackToHome extends React.Component {
    render() {
        return (
            <div className="ui center aligned container">
                <Link className="large ui red button" to="/">
                    <i className="ui angle double left icon" />
                    Back to Home
                </Link>
            </div>
        )
    }
}

export default ButtonBackToHome;