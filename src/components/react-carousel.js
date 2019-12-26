import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';

const ReactCarousel = () => {
    const images = {
        imageOne: 'http://placehold.jp/150x150.png',
        imageTwo: 'http://placehold.jp/120x120.png',
        imageThree: 'http://placehold.jp/130x130.png',
    };

    return (
        <React.Fragment>
            <Carousel
                slidesPerPage={2}
                arrows
                
                >
                <img src={images.imageOne} />
                <img src={images.imageTwo} />
                <img src={images.imageThree} />
                <img src={images.imageThree} />
            </Carousel>
        </React.Fragment>
    );
}

export default ReactCarousel;