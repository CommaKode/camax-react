import React from 'react';
import Suggestion from './Suggestion';
import './Suggestion.scss';

import ShopCardList from '../Card/ShopCardList';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const SuggestionCar = () => {
  return (
    <div className="suggestion">
      <Swiper slidesPerView={1} navigation loop={true}>
        {ShopCardList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Suggestion
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SuggestionCar;
