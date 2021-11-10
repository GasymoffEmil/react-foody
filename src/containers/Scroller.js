import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import './Scroller.scss';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    dotsClass: 'slider-custom-dots',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHove: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
};

const Scroller = (props) => {
    return (
        <section className="section screenshots">
            <div className="container">
                <div className="screenshots__inner">
                    <h2 className="section-title section-title--centered">Screenshots</h2>
                    <Slider className="screenshots-slider" {...settings}>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-01.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-02.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-01.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-02.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-01.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                        <div className="screenshots-slider__item">
                            <picture>
                                <img src={require('../img/screenshots-slider-item-02.png').default} alt="Screenshot 01" />
                            </picture>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Scroller