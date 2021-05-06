import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Register = () => {

    const registerHandler = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            fullname: this.fullname,
            email: this.email,
            password: this.password

            // add repeat password 
        }

        console.log(data.json());

        axios.post(`auth/administrator/register`, data)
            .then(res => {
                setUser(
                    [
                        {
                            username: this.username,
                            fullname: this.fullname,
                            email: data.email,
                            token: res.data.token,
                            password: data.password
                        }
                    ]
                )
                // localStorage.setItem('token', res.data.token);
                // localStorage.setItem('user-email', data.email);
                // localStorage.setItem('user-password', data.password);
                // localStorage.setItem('user-type', "Administrator");
                history.push('dashboard');
                console.log("Admin Register Successful!");
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
                    <input type="text" name="username" placeholder="Username" onChange={e => this.username = e.target.value} required />
                    <input type="text" name="fullname" placeholder="Full Name" onChange={e => this.fullname = e.target.value} required />
                    <input type="email" name="email" placeholder="Email" onChange={e => this.email = e.target.value} required />
                    <input type="password" name="password" placeholder="Password" onChange={e => this.password = e.target.value} required />
                </div>
                <button type="submit" className="auth-button">Sign up now</button>
            </form>
            <p>Or <a href="/">Sign in</a> to your account</p>
        </div>
    );
}

export default Register;