import Screenshots1 from './img/screenshots-slider-item-01.png';
import Screenshots2 from './img/screenshots-slider-item-02.png';
import TestimonialAvatar1 from './img/testimonial-ava-01.jpg';
import TestimonialAvatar2 from './img/testimonial-ava-02.jpg';
import TestimonialAvatar3 from './img/testimonial-ava-03.jpg';
import TestimonialAvatar4 from './img/testimonial-ava-04.jpg';

const Database = {
    screenshots: [
        {
            id: 1,
            imgSrc: Screenshots1,
            srcAlt: 'Screenshot 01'
        }, {
            id: 2,
            imgSrc: Screenshots2,
            srcAlt: 'Screenshot 02'
        }, {
            id: 3,
            imgSrc: Screenshots1,
            srcAlt: 'Screenshot 03'
        }, {
            id: 4,
            imgSrc: Screenshots2,
            srcAlt: 'Screenshot 04'
        }
    ],
    testimonials: [
        {
            title: 'Efficient Collaborating',
            message: `Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome!`,
            avaSrc: TestimonialAvatar2,
            authorsName: 'Jane Cooper',
            authorsPosition: 'CEO at ABC Corporation'
        }, 
        {
            title: 'A big part of my conversions',
            message: `In just one month of being a customer, I've been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen.`,
            avaSrc: TestimonialAvatar1,
            authorsName: 'John Doe',
            authorsPosition: 'Producer'
        }, 
        {
            title: 'Efficiency',
            message: `I have had no issues with the app and the delivery people have all been wonderful! The comminication between employee and customer is splendid.`,
            avaSrc: TestimonialAvatar3,
            authorsName: 'Jennifer Brady',
            authorsPosition: 'Manager'
        }, 
        {
            title: 'Working',
            message: `Easy to find restaurants, easy to order and arrives timely.`,
            avaSrc: TestimonialAvatar4,
            authorsName: 'Ryan Gwillim',
            authorsPosition: 'IOS Developer'
        }
    ],
    aboutUsContent: {
        title: `About Us`,
        subtitle: `Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!`,
        description: `We consist of a constantly growing community of local experts showcasing a range of curated content around events, food, shopping, fashion, sightseeing, local communities, travel and so much more!We'll help you make your weekend plans, inform you about the best events happening all around the world, tell you all about the best places to eat in the city and much much more. Here's a little taste of the plethora of features we offer -You will happily receive expert recommendations tailor-made to suit your interests. We'll be providing you with city-specific stories and videos, handy local information - all right on your smartphone, ready to be scrolled through!We'll be updating and pushing through fresh content every few hours, giving you more than enough time to scan through and make plans to explore your city.You can also like, share and bookmark all your favorite articles and blurbs, and store them ready for future lookups!We pride ourselves on being one of the fastest-loading apps out there today so that you'll have a seamless browsing experience.With all this and more, all fresh and ready for you guys, this is one platform that'll become your lifeline to navigate all corners of your city. Explore away!`
    }
}

export default Database