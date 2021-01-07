import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="footer-row upper-row">
                        <div className="footer-col">
                            <img src={require('../../../assets/img/stamp.png')} alt="stamp" />
                        </div>
                        <div className="footer-col">
                            <img className="footer-icons" src={require('../../../assets/img/location.svg')} alt="location" />
                            <div className="footer-text">
                                <p>59, Rashid Behbudov str.,</p>
                                <p>Baku, Azerbaijan, AZ1022</p>
                            </div>
                        </div>
                        <div className="footer-col">
                            <img className="footer-icons" src={require('../../../assets/img/mail.svg')} alt="mail" />
                            <div className="footer-text">
                                <p>pandasales@risk.az</p>
                                <p>pandasupport@risk.az</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-row lower-row">
                        <img src={require('../../../assets/img/copyright.svg')} alt="c"></img>&nbsp;&nbsp;
                        <p>2020    &nbsp;&nbsp;Pandanavigation. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;