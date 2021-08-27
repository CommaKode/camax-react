import React from 'react';
import './PageNotFound.scss';
import illus from '../../Images/Illustrations/illustration-404.svg';
import Heading from '../Heading/Heading';
import Button from '../Buttons/Button';

const PageNotFound = () => {
  return (
    <div className="page-404">
      <div className="container-404 container">
        <img className="img-404" src={illus} alt="404" />
        <div className="text-404">
          <Heading title="صفحه موردنظر شما پیدا نشد" />
          <p>شاید آن را در لینک های زیر پیدا کنید 👇</p>
          <div className="btns-404">
            <Button title="صفحه اول" url="/" variant="first-btn" />
            <Button title="محصولات" url="products" variant="second-btn" />
            <Button
              title="خدمات پس از فروش"
              url="services"
              variant="last-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
