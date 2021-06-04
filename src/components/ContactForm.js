import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../actions/messageAction'

const ContactForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    return (
        <form className="contact-form" onSubmit={() => dispatch(addMessage(data))}>
            <div className="contact-form-container">
                <div className="form-line form-line-inputs">
                    <div className="input-holder">
                        <label htmlFor="name">Name</label>
                        <input className="form-input" type="text" id="name" placeholder="Name" onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required/>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input className="form-input" type="email" id="email" placeholder="Email" onChange={e => setData(prevState => ({ ...prevState, email: e.target.value }))} required/>
                    </div>
                </div>
                <div className="form-line form-line-text">
                    <textarea className="form-input" placeholder="Your Message" onChange={e => setData(prevState => ({ ...prevState, messageText: e.target.value }))} required></textarea>
                </div>
            </div>
            <div className="contact-button">
                <button className="grey-button">Send</button>
            </div>
        </form>
    );
}

export default ContactForm;