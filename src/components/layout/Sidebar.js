import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const menuItems = useSelector(state => state.menu.menuItems);
    const active = useSelector(state => state.toggleMenu);

    return (
        <div id="sidebar" className={active ? 'sidebar-active' : null}>
            <div className="sidebar-items-holder">
                {menuItems.map(item =>
                    <Link to={"/" + item.link} key={item.id}>
                        <div className="sidebar-item">
                            <div className="sidebar-icon">{item.icon}</div>
                            <p className="sidebar-name">{item.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Sidebar;