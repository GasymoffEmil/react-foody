import './Footer.scss';

// Images Import - Start
import Logo from '../img/logo.svg';
// Images Import - Start

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                        <a href="/" className="footer__logo">
                            <img src={Logo} alt="Footer Logo"/>
                        </a>
                        <nav className="footer__menu">
                            <a href="/">About</a>
                            <a href="/">How it works</a>
                            <a href="/">Contact Us</a>
                            <a href="/">Help</a>
                            <a href="/">Privacy Policy</a>
                        </nav>
                        <span className="copyrights">&#169; 2021 Foodie. All rights reserved</span>
                    </div>
                    <div className="footer__right"></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer