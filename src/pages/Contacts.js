import MainSection from '../components/MainSection'
import ContactForm from "../components/ContactForm"
import mail from '../assets/img/mail.svg'
import location from '../assets/img/location.svg'
import phone from '../assets/img/phone.svg'
import fax from '../assets/img/fax.svg'

const Contacts = () => {
    return (
        <div id="contacts">
            <MainSection>
                <div className="contacts-holder">
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={location} alt="mail" />
                            <p>59, Rashid Behbudov str.,<br />Baku, Azerbaijan, AZ1022</p>
                        </div>
                        <div className="contact-item">
                            <img src={phone} alt="mail" />
                            <p>+994 12 497 3737</p>
                        </div>
                        <div className="contact-item">
                            <img src={fax} alt="mail" />
                            <p>+994 12 498 1993</p>
                        </div>
                        <div className="contact-item">
                            <img src={mail} alt="mail" />
                            <p>pandasales@risk.az<br/>pandasupport@risk.az<br/>pandasupport@risk.az</p>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </MainSection>
        </div>
    );
}

export default Contacts;