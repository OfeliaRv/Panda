import { useDispatch, connect } from 'react-redux'
import { useEffect } from 'react'
import authService from '../../components/api-authorization/AuthorizeService'
import logo from '../../assets/img/logo.svg'
import user_img from '../../assets/img/avatar.png'
import menu_img from '../../assets/img/menu.svg'
import logout_img from '../../assets/img/logout.svg'
import { toggleSidebar } from '../../actions/ToolsActions'
import { logout } from '../../actions/AuthAction'

const Navbar = ({ userData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(userData.user);
    }, [])

    const Logout = () => {
        authService.signOut({ returnUrl: "/" }).then(res => {
            console.log("here");
            dispatch(logout);
            window.location.replace(res.state.returnUrl);
        });
    }

    return (
        <nav>
            <div className="nav-part">
                <img id="menu-icon" src={menu_img} onClick={() => dispatch(toggleSidebar())} alt="menu" />
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="nav-part">
                <div className="admin">
                    <img className="admin-img" src={user_img} alt="admin-img" />
                    <p>{userData.user.name}</p>
                    <img id="logout" onClick={Logout} src={logout_img} alt="logout" />
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.auth
    }
}

export default connect(
    mapStateToProps
)(Navbar)