import React, { Component } from 'react';

class Widget extends Component {
    render() {
        return (
            <div className="widget">
                <div className="widget-logo">
                   <img src={this.props.widget.logo} alt="logo"/>
                </div>
                <div className="widget-text">
                    <p>{this.props.widget.text}</p>
                </div>
            </div>
        );
    }
}

export default Widget;