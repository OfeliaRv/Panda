import { useState } from 'react'
import { register } from '../../actions/AuthAction'
import { useDispatch } from 'react-redux'
import authService from '../api-authorization/AuthorizeService'
import axios from 'axios'

const Register = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
        axios.post('/Authentication/RegisterAdmin', data)
            .then(_ => {
                authService.signIn({ returnUrl: "/" })
                    .then(res => {
                        authService.getUser()
                            .then(user => {
                                dispatch(register(user));
                                window.location.replace(res.state.returnUrl);
                            });
                    });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="auth-card">
            <div className="auth-heading">
                <h1>Sign up to Panda Admin</h1>
            </div>
            <form className="form" id="register-form" onSubmit={onSubmit}>
                <div className="auth-form">
                    <input type="text" id="username" placeholder="Username" onChange={e => setData(prevState => ({ ...prevState, userName: e.target.value }))} required />
                    <input type="text" id="fullname" placeholder="Full Name" onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required />
                    <input type="email" id="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required />
                    <input type="password" id="password" placeholder="Password" onChange={e => setData(prevState => ({ ...prevState, password: e.target.value }))} required />
                </div>
                <button type="submit" className="auth-button">Sign up now</button>
            </form>
            <p className="under-auth-text">Or <a href="/">Sign in</a> to your account</p>
        </div>
    );
}

export default Register;