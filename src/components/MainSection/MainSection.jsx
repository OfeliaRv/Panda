import React, { Component } from 'react';
import Widgets from './Widgets';

class MainSection extends Component {
    render() {
        return (
            <section className="main-section">
                <div className="left-items">
                    <img src={require('../../assets/img/left-item.png')} alt="item" />
                </div>
                <div className="center-content">
                    <div className="page-heading">
                        <h1>Customers</h1>
                    </div>
                    <div className="page-widgets">
                        <Widgets />
                    </div>
                </div>
                <div className="right-items">
                    <div className="buttons-group">
                        <div className="button">
                            <div className="button-dot"></div>
                        </div>
                        <div className="button">
                            <div className="button-dot"></div>
                        </div>
                        <div className="button clicked">
                            <div className="button-dot"></div>
                        </div>
                        <div className="button">
                            <div className="button-dot"></div>
                        </div>
                    </div>
                    <div className="next-button">
                        <img src={require('../../assets/img/arrow.svg')} alt="arrow" />
                    </div>
                </div>
            </section>
        );
    }
}

export default MainSection;
