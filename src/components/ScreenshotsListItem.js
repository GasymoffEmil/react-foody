const ScreenShotsListItem = (props) => {
    return (
        <div className="screenshots-slider__item">
            <picture>
                <img src={props.imgSrc} alt={props.alt}/>
            </picture>
        </div>
    )
}

export default ScreenShotsListItem