import { DataContext } from '../../DataContext'
import { useContext } from 'react'

const Sidebar = () => {
    const { sideNavbar } = useContext(DataContext);
    const [sideNavbarItems] = sideNavbar;

    return (
        <div id="sidebar">
            <div className="sidebar-items-holder">
                {sideNavbarItems.map(item =>
                    <div className="sidebar-item">
                        <div className="sidebar-icon">{item.icon}</div>
                        <p className="sidebar-name">{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;