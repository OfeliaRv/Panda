import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './assets/img/logo_white.svg'
import Login from './components/auth/Login'
import copyright_item from './assets/img/copyright.svg'

const Auth = () => {
    return (
        <div id="auth">
            <Router>
                <div className="auth-card">
                    <div className="auth-card-left">
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="auth-card-right">
                        <Route path="/login" component={Login} />
                        <footer>
                            <img id="copyright" src={copyright_item} alt="c"></img>
                            <p id="rights-text">&nbsp;&nbsp; 2021 &nbsp;&nbsp;Pandanavigation. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Auth;