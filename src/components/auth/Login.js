import { Link } from 'react-router-dom'
import fb from '../../assets/img/fb.svg'
import insta from '../../assets/img/insta.svg'
import linkedin from '../../assets/img/linkedin.svg'
import eye_dimmed from '../../assets/img/eye_dimmed.svg'

const Login = () => {

    const passwordVisible = () => {
        var password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    return (
        <div className="auth-container">
            <h1 className="auth-heading">Sign in</h1>
            <form className="auth-form" action="">
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
                    <Link to="/register">Forgot password?</Link>
                </div>
                <button className="grey-button">Login</button>
                <p>Not registered yet? <Link to="/register">Create an Account!</Link></p>
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
    );
}

export default Login;