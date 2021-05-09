import eye_dimmed from '../../assets/img/eye_dimmed.svg'
import { useEffect } from 'react'
import copyright_item from '../../assets/img/copyright.svg'
import logo from '../../assets/img/logo.svg'
import back_arrow from '../../assets/img/arrow-right.svg'
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const Register = () => {

    useEffect(() => {
        document.title = "Panda Navigation - Sign Up"
    }, [])

    const passwordVisible = () => {
        var password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }

        var rep_password = document.getElementById("rep-password");
        if (rep_password.type === "password") {
            rep_password.type = "text";
        } else {
            rep_password.type = "password";
        }
    }

    return (
        <Router history={history}>
            <div id="register">
                <header>
                    <a href="/"><div className="logo">
                        <img src={logo} alt="logo" />
                    </div></a>
                </header>
                <div className="auth-card">
                    <div className="auth-container">
                        <div className="auth-heading">
                            <div className="go-back" onClick={() => history.goBack()}>
                                <img src={back_arrow} alt="back arrow" />
                                <p>Back</p>
                            </div>
                            <h1>Register</h1>
                        </div>
                        <form className="auth-form" action="">
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-input" type="text" name="name" id="name" placeholder="Name" required />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="surname">Surname</label>
                                    <input className="form-input" type="text" name="surname" id="surname" placeholder="Surname" required />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-input" type="email" name="email" id="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-input" type="password" name="password" id="password" placeholder="Password" required />
                                    <img onClick={passwordVisible} src={eye_dimmed} alt="see password" />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="rep-password">Repeat password</label>
                                    <input className="form-input" type="password" name="rep-password" id="rep-password" placeholder="Repeat password" required />
                                    <img onClick={passwordVisible} src={eye_dimmed} alt="see password" />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="position">Position</label>
                                    <input className="form-input" type="text" name="position" id="position" placeholder="Position" required />
                                </div>
                            </div>
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="company-name">Company name</label>
                                    <input className="form-input" type="text" name="company-name" id="company-name" placeholder="Company name" required />
                                </div>
                                <div className="form-tools">
                                    <div className="check">
                                        <input className="form-input check" type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">I agree with <span>Terms of Service </span> and <span> Privacy Policy</span></label>
                                    </div>
                                </div>
                                <button type="submit" className="grey-button">Create an Account</button>
                                {/* <button className="white-button google-button"><div id="google-icon"></div> Sign up with Google</button> */}
                            </div>
                        </form>
                    </div>
                </div>
                <footer>
                    <img id="copyright" src={copyright_item} alt="c"></img>
                    <p id="rights-text">&nbsp;&nbsp; 2021 &nbsp;&nbsp;Pandanavigation. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default Register;