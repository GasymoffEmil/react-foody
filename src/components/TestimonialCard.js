const TestimonialCard = (props) => {
    return (
        <div className="testimonials-slider__item-wrapper">
            <div className="testimonials-slider__item">
                <div className="testimonials-slider__text">
                    <h4 className="testimonials-slider__item-title">{props.title}</h4>
                    <div className="testimonials-slider__item-desc">
                        <p>{props.message}</p>
                    </div>
                </div>
                <div className="testimonials-slider__author">
                    <picture className="testimonials-slider__author-avatar">
                        <img src={props.avaSrc} alt={props.authorsName}/>
                    </picture>
                    <h4 className="testimonials-slider__author-name">{props.authorsName}</h4>
                    <span className="testimonials-slider__author-position">{props.authorsPosition}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard