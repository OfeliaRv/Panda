import { useEffect, useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import authService from '../api-authorization/AuthorizeService'
import logo from '../../assets/img/logo.svg'
import person from '../../assets/img/person.svg'
import signout from '../../assets/img/logout.svg'
import { logout } from '../../actions/authAction'

const Header = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     authService.getUser()
    //         .then(user => { setUser(user) });
    // }, [])

    const Logout = () => {
        authService.signOut({ returnUrl: "/" }).then(
            dispatch(logout),
            window.location.replace("/")
        );
    }

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
                    <a href="/news"><li className="navigation-list-item"><p>News</p></li></a>
                    <a href="/contacts"><li className="navigation-list-item"><p>Contacts</p></li></a>
                    {/* <a href="/forum"><li className="navigation-list-item"><p>Forum</p></li></a> */}
                </ul>
            </nav>
            {/* <div className={"header-buttons " + (user && "user-logged")}>
                {user == null && <a href="/login"><div className="auth-button white-button">
                    <div className="icon-holder" style={{ pointerEvents: 'none' }}>
                        <img src={person} alt="person" />
                    </div>
                    <p> Login</p>
                </div></a>
                }
                {user && <a onClick={Logout}><div className="auth-button white-button">
                    <div className="icon-holder" style={{ pointerEvents: 'none' }}>
                        {user == null ? <img src={person} alt="person" /> : <img src={signout} alt="person" />}
                    </div>
                    <p>{user == null ? "Login" : user && user.name}</p>
                </div></a>}
                {/* {user !== null && user && <div onClick={Logout} style={{ cursor: 'pointer' }}>logout</div>} */}
                {/* <div className="lang-select">
                    <span className="lang" id="az">AZ</span> |
                    <span className="lang" id="ru">RU</span> |
                    <span className="lang" id="en">EN</span>
                </div> */}
            {/* </div> */}
        </header>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.auth
    }
}

export default connect(
    mapStateToProps
)(Header)