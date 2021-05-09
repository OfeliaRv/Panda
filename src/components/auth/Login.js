import fb from '../../assets/img/fb.svg'
import insta from '../../assets/img/insta.svg'
import linkedin from '../../assets/img/linkedin.svg'
import eye_dimmed from '../../assets/img/eye_dimmed.svg'
import { useEffect } from 'react'
import logo from '../../assets/img/logo_white.svg'
import copyright_item from '../../assets/img/copyright.svg'
import back_arrow from '../../assets/img/arrow-right.svg'
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const Login = () => {

    useEffect(() => {
        document.title = "Panda Navigation - Sign In"
    }, [])

    const passwordVisible = () => {
        var password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    return (
        <Router history={history}>
            <div id="login">
                <div className="login-card">
                    <div className="login-card-left">
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="login-card-right">
                        <div className="login-container">
                            <div className="go-back" onClick={() => history.goBack()}>
                                <img src={back_arrow} alt="back arrow" />
                                <p>Back</p>
                            </div>
                            <h1 className="login-heading">Sign in</h1>
                            <form className="login-form" action="">
                                <div className="input-holder">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-input" type="email" name="email" id="email" placeholder="Email" required />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-input" type="password" name="password" id="password" placeholder="Password" required />
                                    <img onClick={passwordVisible} src={eye_dimmed} alt="see password" />
                                </div>
                                <div className="form-tools">
                                    <div className="check">
                                        <input className="form-input check" type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <button className="grey-button">Login</button>
                                <p>Not registered yet? <a href="/register">Create an Account!</a></p>
                            </form>
                            <div className="socials">
                                <a href="https://facebook.com" className="social-item white-button">
                                    <img src={fb} alt="facebook" />
                                </a>
                                <a href="https://instagram.com" className="social-item white-button">
                                    <img src={insta} alt="instagram" />
                                </a>
                                <a href="https://linkedin.com" className="social-item white-button">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                        <footer>
                            <img id="copyright" src={copyright_item} alt="c"></img>
                            <p id="rights-text">&nbsp;&nbsp; 2021 &nbsp;&nbsp;Pandanavigation. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Login;