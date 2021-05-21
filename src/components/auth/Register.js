import { useState } from 'react'
import { register } from '../../actions/AuthAction'
import { useDispatch } from 'react-redux'


const Register = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    return (
        <div className="auth-card">
            <div className="auth-heading">
                <h1>Sign up to Panda Admin</h1>
            </div>
            <form className="form" id="register-form" onSubmit={() => dispatch(register(data))}>
                <div className="auth-form">
                    <input type="text" id="username" placeholder="Username" onChange={e => setData(prevState => ({ ...prevState, userName: e.target.value }))} required />
                    <input type="text" id="fullname" placeholder="Full Name" onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required />
                    <input type="email" id="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required />
                    <input type="password" id="password" placeholder="Password" onChange={e => setData(prevState => ({ ...prevState, password: e.target.value }))} required />
                </div>
                <button type="submit" className="auth-button">Sign up now</button>
            </form>
            <p className="under-auth-text">Or <a href="/login">Sign in</a> to your account</p>
        </div>
    );
}

export default Register;