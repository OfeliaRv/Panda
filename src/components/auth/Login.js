import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../api-authorization/AuthorizeService'
import { login } from '../../actions/AuthAction'

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    //for testing
    useEffect(() => {
        authService.getUser()
            .then(user => { console.log("user", user) });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        console.log("clicked");
        return (dispatch) => {
            axios.post('/Authentication/Login', data, { withCredentials: true })
                .then(() => {
                    authService.signIn({ returnUrl: "/" })
                        .then(res => {
                            authService.getUser()
                            .then(user => {
                                dispatch(login(user));
                                window.location.replace(res.state.returnUrl);
                            });
                        })
                        .catch(error => {
                            console.log(error.message);
                        });
                });
        }
    }

    return (
        <div className="auth-card">
            <div className="auth-heading">
                <h1>Sign in to Panda Admin</h1>
            </div>
            <form className="form" id="login-form" onSubmit={e => onSubmit(e)}>
                <div className="auth-form">
                    <input type="text" id="username" placeholder="Username" onChange={e => setData(prevState => ({ ...prevState, userName: e.target.value }))} required />
                    <input type="password" id="password" placeholder="Password" onChange={e => setData(prevState => ({ ...prevState, password: e.target.value }))} required />
                </div>
                <div className="check">
                    <input type="checkbox" name="remember-me" id="remember-me" />
                    <p>Remember me</p>
                </div>
                <button type="submit" className="auth-button">Sign in</button>
            </form>
            <p className="under-auth-text">Or register <a href="/register">here</a></p>
        </div>
    )
}

export default Login;