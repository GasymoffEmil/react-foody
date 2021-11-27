import Slider from "react-slick";
import ScreenShotsListItem from "../components/ScreenshotsListItem";
import "slick-carousel/slick/slick.css"; 
import './Scroller.scss';
import Database from "../data";

const screenshots = [...Database.screenshots];

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
                        {
                            screenshots.map((elem, index) => {
                                return <ScreenShotsListItem key={index} imgSrc={elem.imgSrc} alt={elem.srcAlt}/>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Scroller