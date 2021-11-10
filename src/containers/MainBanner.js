import './MainBanner.scss';
import PhoneImg from '../img/main-banner-phone-image.png'
const MainBanner = (props) => {
    return(  
        <section className="section main-banner">
            <div className="container">
                <div className="main-banner__inner">
                    <div className="main-banner__text">
                        <h1 class="title">Awesome App for Your <br/> Modern Lifestyle</h1>
                        <div class="desc">
                            <p>We'll help you make your plans, inform you about the best events happening all around the world, tell you all about the best places to eat in the city and much much more. </p>
                        </div>
                        <div className="btn-group">
                            <a href="/" className="btn">App Store</a>
                            <a href="/" className="btn btn--transparent">Google Play</a>
                        </div>
                    </div>
                    <div className="main-banner__images">
                        <picture>
                            <img src={PhoneImg} alt="Phone" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainBanner