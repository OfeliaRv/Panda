import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import person from '../../assets/img/person.svg'

const Header = () => {
    return (
        <header>
            <Link to="/"><div className="logo">
                <img src={logo} alt="logo" />
            </div></Link>
            <nav>
                <ul className="navigation-list">
                    <Link to="/"><li className="navigation-list-item"><p>Home</p></li></Link>
                    <Link to="/products"><li className="navigation-list-item"><p>Products</p></li></Link>
                    <Link to="/customers"><li className="navigation-list-item"><p>Customers</p></li></Link>
                    <Link to="/reviews"><li className="navigation-list-item"><p>Reviews</p></li></Link>
                    <Link to="/news"><li className="navigation-list-item"><p>News</p></li></Link>
                    <Link to="/contacts"><li className="navigation-list-item"><p>Contacts</p></li></Link>
                    <Link to="/forum"><li className="navigation-list-item"><p>Forum</p></li></Link>
                </ul>
            </nav>
            <div className="header-buttons">
                <a href="/login"><div className="auth-button white-button">
                    <div className="icon-holder">
                        <img src={person} alt="person" />
                    </div>
                    <p>Login</p>
                </div></a>
                <div className="lang-select">
                    <span className="lang" id="az">AZ</span> |
                    <span className="lang" id="ru">RU</span> |
                    <span className="lang" id="en">EN</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
