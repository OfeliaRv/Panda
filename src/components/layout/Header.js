import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/avatar.png'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-part">
                <span className="material-icons">menu</span>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="nav-part">
                <div className="admin">
                    <img className="admin-img" src={user} alt="admin-img" />
                    <p>Name Surname <span className="material-icons">expand_more</span></p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;