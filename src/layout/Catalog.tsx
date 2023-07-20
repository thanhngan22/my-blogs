import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface IProps {
  tittles: string[];
}

const Catalog = () => {
  

  return (
    <div className="catalog__wrapper w-1/5 pl-4 pr-5 py-5  ">
      <div className="catalog__header">
        <h1 className="text-xl text-white "> 🌩️ Index</h1>
      </div>
      <div className="catalog__main flex flex-row">
        <div className="left__bar"></div>
        <ul className="list__topics">{}</ul>
        {/* <div className="right__bar"></div> */}
      </div>
    </div>
  );
};

export default Catalog;
