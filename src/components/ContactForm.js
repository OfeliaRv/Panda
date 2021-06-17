import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Recaptcha from 'react-recaptcha'
import { addMessage } from '../actions/messageAction'

const ContactForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [isVerified, setIsVerified] = useState(false);

    const sitekey = '6LdkSzIbAAAAACcecjOL2KJFlX-bnJaewboiA7qn';
    let recaptchaInstance;

    const onloadCallback = () => {
        console.log('reCaptcha successfully loaded');
    }

    const verifyCallback = response => {
        if (response) {
            setIsVerified(true);
        }
    }

    const expiredCallback = () => {
        console.log('reCaptcha expired');
    };

    const onSubmit = e => {
        if (isVerified) {
            dispatch(addMessage(data));
            recaptchaInstance.reset();
        } else {
            e.preventDefault(); 
            alert('Prove you are not a robot!');
        }
    }

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-container">
                <div className="form-line form-line-inputs">
                    <div className="input-holder">
                        <label htmlFor="name">Name</label>
                        <input className="form-input" type="text" id="name" placeholder="Name" onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input className="form-input" type="email" id="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required />
                    </div>
                </div>
                <div className="form-line form-line-text">
                    <textarea className="form-input" placeholder="Your Message" onChange={e => setData(prevState => ({ ...prevState, messageText: e.target.value }))} required></textarea>
                </div>
            </div>
            <div className="contact-button">
                <Recaptcha
                    ref={e => recaptchaInstance = e}
                    sitekey={sitekey}
                    render="explicit"
                    size="compact"
                    onloadCallback={onloadCallback}
                    verifyCallback={verifyCallback}
                    expiredCallback={expiredCallback}
                />
                <button className="grey-button">Send</button>
            </div>
        </form>
    );
}

export default ContactForm;