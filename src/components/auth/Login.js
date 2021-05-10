import axios from 'axios'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const Login = () => {
    const loginHandler = e => {
        e.preventDefault();

        const data = {
            email: this.email,  // or username
            password: this.password
        }

        axios.post(`url`, data)
            .then(res => {
                // setUser(
                //     [
                //         {
                //             email: data.email,
                //             token: res.data.token,
                //             password: data.password
                //         }
                //     ]
                // )
                // localStorage.setItem('token', res.data.token);
                // localStorage.setItem('user-email', data.email);
                // localStorage.setItem('user-password', data.password);
                // localStorage.setItem('user-type', "Administrator");
                console.log("Admin Login Successful!");
                history.push('dashboard');
            })
            .catch(err => {
                alert('Wrong email or password');
                console.log(err);
            })
    }

    return (
        <div className="auth-card">
            <div className="auth-heading">
                <h1>Sign in to Panda Admin</h1>
            </div>
            <form className="form" id="login-form" onSubmit={loginHandler}>
                <div className="auth-form">
                    <input type="email" name="email" placeholder="Email" onChange={e => this.email = e.target.value} required />
                    <input type="password" name="password" placeholder="Password" onChange={e => this.password = e.target.value} required />
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