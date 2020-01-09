import React from "react";
import Slider from "react-slick";
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
import CardActionAreaMUI from './card-action-area'


const SimpleSlider = () => {
    const settings = {
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide:true,
        swipe:true,
        arrows:true
    };

    return (
        <>
            <Slider {...settings}>
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
                
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
                
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
                <CardActionAreaMUI/>
            </Slider>
            <h2>Fidel is here</h2>
        </>
    );
}

export default SimpleSlider;
