import {Fragment} from 'react'
import './Header.scss'

import Logo from '../img/logo.svg'

const Header = (props) => {
    return (
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <a href="/" className="header__logo">
                            <img src={Logo} alt="Logo"/>
                        </a>
                        <nav className={props.menuClasses}>
                            <a href="/">Home</a>
                            <a href="/">About Us</a>
                            <a href="/">How It Works</a>
                            <a href="/">Screenshots</a>
                            <a href="/">Testimonials</a>
                        </nav>
                        <form className="login-pannel btn-group">
                            <button className="btn btn--white btn--bold">
                                Login
                            </button>
                        </form>
                        <button className={props.burgerClasses} onClick={props.changeBurger}>
                            <span className="burger__line"></span>
                            <span className="burger__line"></span>
                            <span className="burger__line"></span>
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header