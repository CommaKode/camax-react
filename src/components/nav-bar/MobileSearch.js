import React from 'react';
import searchVector from '../../Images/icons/search.svg';

const SearchMobile = () => {
  return (
    <div>
      <img src={searchVector} alt="search" />
      <input type="search" />
    </div>
  );
};

export default SearchMobile;
