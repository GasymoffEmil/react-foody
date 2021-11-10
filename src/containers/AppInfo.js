import './AppInfo.scss';

const AppInfo = (props) => {
    return( 
        <section className="section app-info">
            <div className="container">
                <div className="app-info__inner">
                    <div className="app-info-text">
                        <h2 className="section-title section-title--white">How does this App Work?</h2>
                        <ul className="instructions">
                            <li className="instructions__item">
                                <picture className="instructions__item-icon">
                                    <img src={require('../img/instructions-icon-01.svg').default} alt="Make a profile" />
                                </picture>
                                <div className="instructions__item-text">
                                    <h4 className="instructions__item-title">Make a profile</h4>
                                    <div className="instructions__item-desc">
                                        <p>Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="instructions__item">
                                <picture className="instructions__item-icon">
                                    <img src={require('../img/instructions-icon-02.svg').default} alt="Make a profile" />
                                </picture>
                                <div className="instructions__item-text">
                                    <h4 className="instructions__item-title">Download it for Free</h4>
                                    <div className="instructions__item-desc">
                                        <p>Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="instructions__item">
                                <picture className="instructions__item-icon">
                                    <img src={require('../img/instructions-icon-03.svg').default} alt="Make a profile" />
                                </picture>
                                <div className="instructions__item-text">
                                    <h4 className="instructions__item-title">Enjoy this App</h4>
                                    <div className="instructions__item-desc">
                                        <p>Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="app-info__images">
                        <picture>
                            <img src={require('../img/app-info-phone.png').default} alt="Phone" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppInfo