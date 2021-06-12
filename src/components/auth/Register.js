import eye_dimmed from '../../assets/img/eye_dimmed.svg'
import { useEffect, useState } from 'react'
import copyright_item from '../../assets/img/copyright.svg'
import logo from '../../assets/img/logo.svg'
import back_arrow from '../../assets/img/arrow-right.svg'
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { useDispatch } from 'react-redux'
import authService from '../api-authorization/AuthorizeService'
import axios from 'axios'
import { login } from '../../actions/authAction'

const history = createBrowserHistory();

const Register = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = "Panda Navigation - Sign Up"
    })

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

    const onSubmit = e => {
        e.preventDefault();

        console.log(data);

        if (password !== data.password) {
            alert("Password fields are not the same!");
        } else {
            axios.post('/Authentication/Register', data, { withCredentials: true })
                .then(_ => {
                    authService.signIn({ returnUrl: "/" })
                        .then(res => {
                            authService.getUser()
                                .then(user => {
                                    dispatch(login(user));
                                    window.location.replace(res.state.returnUrl);
                                });
                        });
                })
                .catch(error => {
                    console.log(error.message);
                });
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
                        <form className="auth-form" onSubmit={onSubmit}>
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-input" type="text" id="name" placeholder="Name" onChange={e => setName(e.target.value)} required />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="surname">Surname</label>
                                    <input className="form-input" type="text" id="surname" placeholder="Surname" onChange={e => setData(prevState => ({ ...prevState, fullName: name + " " + e.target.value }))} required />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-input" type="email" id="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required />
                                </div>
                            </div>
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-input" type="password" id="password" placeholder="Password" onChange={e => setData(prevState => ({ ...prevState, password: e.target.value }))} required />
                                    <img onClick={passwordVisible} src={eye_dimmed} alt="see password" />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="rep-password">Repeat password</label>
                                    <input className="form-input" type="password" id="rep-password" placeholder="Repeat password" onChange={e => setPassword(e.target.value)} required />
                                    <img onClick={passwordVisible} src={eye_dimmed} alt="see password" />
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="position">Position</label>
                                    <input className="form-input" type="text" id="position" placeholder="Position" onChange={e => setData(prevState => ({ ...prevState, position: e.target.value }))} required />
                                </div>
                            </div>
                            <div className="form-col">
                                <div className="input-holder">
                                    <label htmlFor="company-name">Company name</label>
                                    <input className="form-input" type="text" id="company-name" placeholder="Company name" onChange={e => setData(prevState => ({ ...prevState, company: e.target.value }))} required />
                                </div>
                                {/* <div className="form-tools">
                                    <div className="check">
                                        <input className="form-input check" type="checkbox" required />
                                        <label>I agree with <span>Terms of Service </span> and <span> Privacy Policy</span></label>
                                    </div>
                                </div> */}
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