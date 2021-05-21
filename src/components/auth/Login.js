import { login } from '../../actions/AuthAction';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Router } from 'react-router';
// import { createBrowserHistory } from 'history'

// const history = createBrowserHistory();


const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    return (
            <div className="auth-card">
                <div className="auth-heading">
                    <h1>Sign in to Panda Admin</h1>
                </div>
                <form className="form" id="login-form" onSubmit={() => dispatch(login(data))}>
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