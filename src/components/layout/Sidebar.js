import { DataContext } from '../../DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    // const { sideNavbar, isActive } = useContext(DataContext);
    // const [sideNavbarItems] = sideNavbar;
    // const [active, setActive] = isActive;

    const sidebarItems = useSelector(state => state.data.sidebarItems);
    const active = useSelector(state => state.sidebar);

    return (
        <div id="sidebar" className={active ? 'sidebar-active' : null}>
        {/* <div id="sidebar"> */}
        <p>{active.opened}</p>
            <div className="sidebar-items-holder">
                {sidebarItems.map(item =>
                    <Link to={"/" + item.name} key={item.id}>
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