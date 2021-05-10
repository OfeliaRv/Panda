import axios from 'axios'
import { createBrowserHistory } from 'history'
import { useState } from 'react'

const history = createBrowserHistory();

const Register = () => {

    const [data, setData] = useState([]);

    const registerHandler = e => {
        e.preventDefault();

        console.log(data);

        axios.post(`http://localhost:42998/api/Authentication/register`, data)
            .then(res => {
                setUser(
                    {
                        username: data.username,
                        fullname: data.fullname,
                        email: data.email,
                        token: res.data.token,
                        password: data.password
                    }
                )
                localStorage.setItem('token', res.data.token);
                history.push('/');
                alert("Admin Register Successful!");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="auth-card">
            <div className="auth-heading">
                <h1>Sign up to Panda Admin</h1>
            </div>
            <form className="form" id="register-form" onSubmit={registerHandler}>
                <div className="auth-form">
                    <input type="text" name="username" placeholder="Username" onChange={e => setData(prevState => ({ ...prevState, username: e.target.value }))} required />
                    <input type="text" name="fullname" placeholder="Full Name" onChange={e => setData(prevState => ({ ...prevState, fullname: e.target.value }))} required />
                    <input type="email" name="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required />
                    <input type="password" name="password" placeholder="Password" onChange={e => setData(prevState => ({ ...prevState, password: e.target.value }))} required />
                </div>
                <button type="submit" className="auth-button">Sign up now</button>
            </form>
            <p className="under-auth-text">Or <a href="/login">Sign in</a> to your account</p>
        </div>
    );
}

export default Register;