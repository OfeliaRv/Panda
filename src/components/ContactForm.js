const ContactForm = () => {
    return (
        <form className="contact-form" action="">
            <div className="contact-form-container">
                <div className="form-line">
                    <div className="input-holder">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-line">
                    <textarea name="message" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div className="contact-button">
                <button className="grey-button">Send</button>
            </div>
        </form>
    );
}

export default ContactForm;