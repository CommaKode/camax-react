import React from 'react';
import './AboutUs.scss';
import AboutUsData from './AboutUsData';
import InfoCard from './InfoCard';

const AboutUs = (props) => {
  const { cName, ...rest } = props;
  return (
    <div className={'aboutus ' + cName} {...rest}>
      <span className="aboutus-bg"></span>
      <div className="aboutus-container">
        <div className="aboutus-intro container">
          <h3 className="aboutus-h">
            چرا <span>کامکث؟</span>
          </h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="info-cards">
          <div className="card-box container">
            {AboutUsData.map((card, index) => {
              return (
                <InfoCard
                  Image={card.Image}
                  title={card.title}
                  txt={card.txt}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
