import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from '../img/espe3.jpg';
import img2 from '../img/espe4.jpg';
import img3 from '../img/espe1.png';
import img4 from '../img/espe2.png';
import img5 from '../img/espe3.png';
import '../ImageCarousel.css'; 

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={5000} // 10 segundos
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className="carousel-arrow carousel-arrow-next"
              onClick={onClickHandler}
              title={label}
            >
              &#9654;
            </div>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div
              className="carousel-arrow carousel-arrow-prev"
              onClick={onClickHandler}
              title={label}
            >
              &#9664;
            </div>
          )
        }
      >
        <div>
          <img src={img1} alt="Imagen 1" />
        </div>
        <div>
          <img src={img2} alt="Imagen 2" />
        </div>
        <div>
          <img src={img3} alt="Imagen 3" />
        </div>
        <div>
          <img src={img4} alt="Imagen 4" />
        </div>
        <div>
          <img src={img5} alt="Imagen 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
