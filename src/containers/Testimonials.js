import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Testimonials.scss';
import Database from "../data";
import TestimonialCard from "../components/TestimonialCard";

const tesimonials = Database.testimonials;

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
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
      ]
};

const Testimonials = (props) => {
    return (
        <section className="section testimonials">
            <div className="container">
                <div className="testimonials__inner">
                    <h2
                        className="section-title section-title--centered section-title--not-underlined">Our Clients Speak</h2>
                    <h3 className="section-subtitle section-subtitle--centered">We have been working with clients around the world</h3>
                    <Slider className="testimonials-slider" {...settings}>
                        {
                            tesimonials.map((elem, index) => {   
                                console.log(index);     
                                return <TestimonialCard
                                    key={index}
                                    title={elem.title}
                                    message={elem.message}
                                    avaSrc={elem.avaSrc}
                                    authorsName={elem.authorsName}
                                    authorsPosition={elem.authorsPosition}
                                />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Testimonials