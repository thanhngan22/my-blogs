import { useEffect, useState } from 'react';
import { IPost } from '../interfaces';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface IProps {
  data: IPost[];
}

const Sections = () => {


  return (
    <div className="sections__wrapper w-1/5 px-3 py-3 border-l border-white flex flex-col justify-between">
      <div className="section__1">
        <div className="sections__header">
          <h1 className="text-xl text-white"> 📝 Sections | In this post</h1>
        </div>
        <div className="sections__body flex py-2">
          <div className="bar bg-red-400 ml-1 h-auto"></div>
          <div className="sections__list py-2 pl-4 pr-2 text-gray-400 ">
            {/* create fake list */}
            
          </div>
        </div>
      </div>

      <div className=" bg-blue-500 fixed bottom-0 right-3  px-3 h-5 text-sm font-semibold">
        <a href="https://github.com/thanhngan22">© thanhngan22</a>
      </div>
    </div>
  );
};

export default Sections;
