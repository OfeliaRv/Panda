import copyright_item from '../../assets/img/copyright.svg'
import location_item from '../../assets/img/location.svg'
import mail_item from '../../assets/img/mail.svg'
import stamp_item from '../../assets/img/stamp.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <img id="copyright" src={copyright_item} alt="c"></img>
                <p id="rights-text">&nbsp;&nbsp; 2020 &nbsp;&nbsp;Pandanavigation. All rights reserved.</p>
            </div>
            <div className="footer-content">
                <div className="footer-col">
                    <img className="footer-icons" src={location_item} alt="location" />
                    <div className="footer-text">
                        <p>59, Rashid Behbudov str.,</p>
                        <p>Baku, Azerbaijan, AZ1022</p>
                    </div>
                </div>
                <div className="footer-col">
                    <img className="footer-icons" src={mail_item} alt="mail" />
                    <div className="footer-text">
                        <p>pandasales@risk.az</p>
                        <p>pandasupport@risk.az</p>
                    </div>
                </div>
                <img id="footer-stamp" src={stamp_item} alt="stamp" />
            </div>
        </footer>
    );
}

export default Footer;