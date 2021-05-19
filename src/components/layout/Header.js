import logo from '../../assets/img/logo.svg'
import person from '../../assets/img/person.svg'

const Header = () => {
    return (
        <header>
            <a href="/"><div className="logo">
                <img src={logo} alt="logo" />
            </div></a>
            <nav>
                <ul className="navigation-list">
                    <a href="/"><li className="navigation-list-item"><p>Home</p></li></a>
                    <a href="/products"><li className="navigation-list-item"><p>Products</p></li></a>
                    <a href="/customers"><li className="navigation-list-item"><p>Customers</p></li></a>
                    <a href="/reviews"><li className="navigation-list-item"><p>Reviews</p></li></a>
                    <a href="/news/0"><li className="navigation-list-item"><p>News</p></li></a>
                    <a href="/contacts"><li className="navigation-list-item"><p>Contacts</p></li></a>
                    <a href="/forum"><li className="navigation-list-item"><p>Forum</p></li></a>
                </ul>
            </nav>
            <div className="header-buttons">
                <a href="/login"><div className="auth-button white-button">
                    <div className="icon-holder" style={{pointerEvents: 'none'}}>
                        <img src={person} alt="person" />
                    </div>
                    <p>Login</p>
                </div></a>
                {/* <div className="lang-select">
                    <span className="lang" id="az">AZ</span> |
                    <span className="lang" id="ru">RU</span> |
                    <span className="lang" id="en">EN</span>
                </div> */}
            </div>
        </header>
    );
}

export default Header;
