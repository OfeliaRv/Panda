import React, { Component } from 'react';

class UpperSection extends Component {
    render() {
        return (
            <section className="upper-section">
                <div className="page-heading">
                    <h1>Advanced solutions</h1>
                    <h1>for safe and efficient air navigation</h1>
                </div>
                <div className="heading-buttons">
                    <button className="heading-button">Explore Visuals</button>
                    <button className="heading-button">View Products</button>
                </div>
            </section>
        );
    }
}

export default UpperSection;
