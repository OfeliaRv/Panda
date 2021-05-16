import { useDispatch } from 'react-redux'
import logo from '../../assets/img/logo.svg'
import user_img from '../../assets/img/avatar.png'
import menu_img from '../../assets/img/menu.svg'
import logout_img from '../../assets/img/logout.svg'
import { Tools, Auth } from '../../actions'

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="nav-part">
                <img id="menu-icon" src={menu_img} onClick={() => dispatch(Tools.toggleSidebar())} alt="menu" />
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="nav-part">
                <div className="admin">
                    <img className="admin-img" src={user_img} alt="admin-img" />
                    <p>Name Surname</p>
                    <img id="logout" onClick={() => dispatch(Auth.logout())} src={logout_img} alt="logout" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;