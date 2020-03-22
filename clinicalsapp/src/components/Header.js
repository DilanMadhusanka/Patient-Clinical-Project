import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h3 className="ui block header">
                    <i className="heartbeat red icon"></i>
                    Online Clinical Service
                </h3>
            </div>
        )
    }
}

export default Header;