import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import './Testimonials.scss';

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

const Testimonials = (props) => {
    return(
        <section className="section testimonials">
            <div className="container">
                <div className="testimonials__inner">
                    <h2 className="section-title section-title--centered section-title--not-underlined">Our Clients Speak</h2>
                    <h3 className="section-subtitle section-subtitle--centered">We have been working with clients around the world</h3>
                    <Slider className="testimonials-slider" {...settings}>
                        <div className="testimonials-slider__item-wrapper">    
                            <div className="testimonials-slider__item">
                                <div className="testimonials-slider__text">
                                    <h4 className="testimonials-slider__item-title">Efficient Collaborating</h4>
                                    <div className="testimonials-slider__item-desc">
                                        <p>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
                                    </div>
                                </div>
                                <div className="testimonials-slider__author">
                                    <picture className="testimonials-slider__author-avatar">
                                        <img src={require('../img/testimonial-author-avatar.png').default} alt="Jane Cooper" />
                                    </picture>
                                    <h4 className="testimonials-slider__author-name">Jane Cooper</h4>
                                    <span className="testimonials-slider__author-position">CEO at ABC Corporation</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slider__item-wrapper">    
                            <div className="testimonials-slider__item">
                                <div className="testimonials-slider__text">
                                    <h4 className="testimonials-slider__item-title">Efficient Collaborating</h4>
                                    <div className="testimonials-slider__item-desc">
                                        <p>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
                                    </div>
                                </div>
                                <div className="testimonials-slider__author">
                                    <picture className="testimonials-slider__author-avatar">
                                        <img src={require('../img/testimonial-author-avatar.png').default} alt="Jane Cooper" />
                                    </picture>
                                    <h4 className="testimonials-slider__author-name">Jane Cooper</h4>
                                    <span className="testimonials-slider__author-position">CEO at ABC Corporation</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slider__item-wrapper">    
                            <div className="testimonials-slider__item">
                                <div className="testimonials-slider__text">
                                    <h4 className="testimonials-slider__item-title">Efficient Collaborating</h4>
                                    <div className="testimonials-slider__item-desc">
                                        <p>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
                                    </div>
                                </div>
                                <div className="testimonials-slider__author">
                                    <picture className="testimonials-slider__author-avatar">
                                        <img src={require('../img/testimonial-author-avatar.png').default} alt="Jane Cooper" />
                                    </picture>
                                    <h4 className="testimonials-slider__author-name">Jane Cooper</h4>
                                    <span className="testimonials-slider__author-position">CEO at ABC Corporation</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slider__item-wrapper">    
                            <div className="testimonials-slider__item">
                                <div className="testimonials-slider__text">
                                    <h4 className="testimonials-slider__item-title">Efficient Collaborating</h4>
                                    <div className="testimonials-slider__item-desc">
                                        <p>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
                                    </div>
                                </div>
                                <div className="testimonials-slider__author">
                                    <picture className="testimonials-slider__author-avatar">
                                        <img src={require('../img/testimonial-author-avatar.png').default} alt="Jane Cooper" />
                                    </picture>
                                    <h4 className="testimonials-slider__author-name">Jane Cooper</h4>
                                    <span className="testimonials-slider__author-position">CEO at ABC Corporation</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Testimonials