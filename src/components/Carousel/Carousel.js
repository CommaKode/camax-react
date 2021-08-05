import React from 'react';
import './Carousel.scss';

import Card from '../Card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);
  
const Carousel = (props) => {
  const { carImg, carAlt, data, ...rest } = props;
  return (
    <div className="carousel-container container" {...rest}>
      <div className="carousel">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          navigation
          loop={true}
          // centerInsufficientSlides={true}
          // longSwipes={false}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          // edgeSwipeThreshold={20}
          freeMode={true}
          freeModeSticky={true}
          grabCursor={true}
          mousewheel={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  title={card.title}
                  price={card.price}
                  image={card.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="image">
        <img src={carImg} alt={carAlt} />
      </div>
    </div>
  );
};

export default Carousel;
