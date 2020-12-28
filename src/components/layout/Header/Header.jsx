import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={require('../../../assets/img/panda-logo.png')} alt="logo" />
                </div>
                <nav>
                    <ul className="navigation-list">
                        <li className="navigation-list-item"><a>Home</a></li>
                        <li className="navigation-list-item"><a>Products</a></li>
                        <li className="navigation-list-item"><a>Customers</a></li>
                        <li className="navigation-list-item"><a>Previews</a></li>
                        <li className="navigation-list-item"><a>News</a></li>
                        <li className="navigation-list-item"><a>Contacts</a></li>
                        <li className="navigation-list-item"><a>Forum</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
