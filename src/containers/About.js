import './About.scss';

// Images Import - Start
import GalleryImg1 from '../img/about-section-image-01.png';
import GalleryImg2 from '../img/about-section-image-02.png';
import GalleryImg3 from '../img/about-section-image-03.png';
import GalleryImg4 from '../img/about-section-image-04.png';
// Images Import - End
const About = (props) => {
    return(  
        <section className="section about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__gallery">
                        <div className="about__gallery-item">
                            <picture>
                                <img src={GalleryImg1} alt="Food" />
                            </picture>
                        </div>
                        <div className="about__gallery-item">
                            <picture>
                                <img src={GalleryImg2} alt="Food" />
                            </picture>
                        </div>
                        <div className="about__gallery-item">
                            <picture>
                                <img src={GalleryImg3} alt="Food" />
                            </picture>
                        </div>
                        <div className="about__gallery-item">
                            <picture>
                                <img src={GalleryImg4} alt="Food" />
                            </picture>
                        </div>
                    </div>
                    <div className="about__text">
                        <h2 className="section-title">About Us</h2>
                        <h3 className="section-subtitle">Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!</h3>
                        <div className="about__text-desc">
                            <p>We consist of a constantly growing community of local experts showcasing a range of curated content around events, food, shopping, fashion, sightseeing, local communities, travel and so much more!We'll help you make your weekend plans, inform you about the best events happening all around the world, tell you all about the best places to eat in the city and much much more. Here's a little taste of the plethora of features we offer -You will happily receive expert recommendations tailor-made to suit your interests. We'll be providing you with city-specific stories and videos, handy local information - all right on your smartphone, ready to be scrolled through!We'll be updating and pushing through fresh content every few hours, giving you more than enough time to scan through and make plans to explore your city.You can also like, share and bookmark all your favorite articles and blurbs, and store them ready for future lookups!We pride ourselves on being one of the fastest-loading apps out there today so that you'll have a seamless browsing experience.With all this and more, all fresh and ready for you guys, this is one platform that'll become your lifeline to navigate all corners of your city. Explore away!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About