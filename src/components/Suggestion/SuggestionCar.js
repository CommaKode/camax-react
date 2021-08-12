import React, { useState } from 'react';
import Suggestion from './Suggestion';
import './Suggestion.scss';

import ShopCardList from '../Card/ShopCardList';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

SwiperCore.use([Navigation, EffectFade]);

const SuggestionCar = () => {
  const [trans, setTrans] = useState('');
  return (
    <div className={'suggestion ' + trans}>
      <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        navigation
        loop={true}
        grabCursor={true}
        onSlideNextTransitionStart={() => {
          setTrans('sugg-next');
        }}
        onSlideChangeTransitionEnd={() => {
          setTrans('');
        }}
        onSlidePrevTransitionStart={() => {
          setTrans('sugg-prev');
        }}
      >
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
