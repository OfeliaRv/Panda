import { DataContext } from '../../DataContext'
import { useContext } from 'react'
import {useDispatch} from 'react-redux'
import logo from '../../assets/img/logo.svg'
import user_img from '../../assets/img/avatar.png'
import menu_img from '../../assets/img/menu.svg'
import logout_img from '../../assets/img/logout.svg'
import { toggleSidebar } from '../../actions'

const Navbar = () => {
    // const { isActive, currentUser } = useContext(DataContext);
    // const [active, setActive] = isActive;
    // const [user, setUser] = currentUser;

    // const toggleMenu = () => {
    //     setActive(!active);
    // };

    // const userLogout = () => {
    //     setUser(null);
    // }

    const dispatch = useDispatch();

    return (
        <nav>
            <div className="nav-part">
                <img id="menu-icon" src={menu_img} onClick={() => dispatch(toggleSidebar)} alt="menu" />
                {/* <img id="menu-icon" src={menu_img} alt="menu" /> */}

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="nav-part">
                <div className="admin">
                    <img className="admin-img" src={user_img} alt="admin-img" />
                    <p>Name Surname</p>
                    {/* <img id="logout" onClick={userLogout} src={logout_img} alt="logout" /> */}
                    <img id="logout" src={logout_img} alt="logout" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;