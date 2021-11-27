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
                        <h2 className="section-title">{props.title}</h2>
                        <h3 className="section-subtitle">{props.subtitle}</h3>
                        <div className="about__text-desc">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About