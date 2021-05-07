import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
    return (
        <div id="layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;