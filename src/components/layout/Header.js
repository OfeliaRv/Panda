import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <header>
            <Link to="/"><div className="logo">
                <img src={logo} alt="logo" />
            </div></Link>
            <nav>
                <ul className="navigation-list">
                    <Link to="/"><li className="navigation-list-item"><a>Home</a></li></Link>
                    <Link to="/products"><li className="navigation-list-item"><a>Products</a></li></Link>
                    <li className="navigation-list-item"><a>Customers</a></li>
                    <li className="navigation-list-item"><a>Previews</a></li>
                    <li className="navigation-list-item"><a>News</a></li>
                    <li className="navigation-list-item"><a>Contacts</a></li>
                    <li className="navigation-list-item"><a>Forum</a></li>
                </ul>
            </nav>
            <div className="lang-select">
                <div>
                    <span className="lang" id="az">AZ</span> |
                    <span className="lang" id="ru">RU</span> |
                    <span className="lang" id="en">EN</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
