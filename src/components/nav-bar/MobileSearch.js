import React from 'react';
import searchVector from '../../Images/icons/search.svg';

const SearchMobile = () => {
  return (
    <div className="mobile-search">
      <button>
        <img src={searchVector} alt="search" />
      </button>
      <input type="search" />
    </div>
  );
};

export default SearchMobile;
