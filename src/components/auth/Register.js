import eye_dimmed from '../../assets/img/eye_dimmed.svg'

const Register = () => {

    const passwordVisible = () => {
        var password = document.getElementById("password");
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    return (
        <div className="auth-container" id="register">
            <h1 className="auth-heading">Register</h1>
            <form className="auth-form" action="">
                <div className="input-holder">
                    <label htmlFor="fullname">Name</label>
                    <input className="form-input" type="text" name="fullname" id="fullname" placeholder="Name" required />
                </div>
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
                        <label htmlFor="remember">I agree with <span>Terms of Service </span> and <span> Privacy Policy</span></label>
                    </div>
                </div>
                <button type="submit" className="grey-button">Create an Account</button>
                <button className="white-button google-button"><div id="google-icon"></div> Sign up with Google</button>
            </form>
        </div>
    );
}

export default Register;