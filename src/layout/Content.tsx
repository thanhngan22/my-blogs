import { IPost, ITPost } from '../interfaces';

import { useLayoutEffect } from 'react';

interface IProps {
  topics: ITPost[];
  // singlePosts: IPost[];
}

const Content: React.FC<IProps> = ({ topics }) => {
  // console.log('topics from content: ', topics);

  useLayoutEffect(() => {
    const path = 'data/blogs/Linux/readme.html';
    fetch(path)
      .then((res) => res.text())
      .then((data) => {
        // console.log('data readme.html: ', data);
        // set inner HTML
        const blogMain = document.querySelector('.blog__main');
        if (blogMain !== null) {
          blogMain.innerHTML = data;
        }
      })
      .catch((error) => {
        console.error('Error fetching readme.html:', error);
      });
  }, []);

  return (
    <div className="content__wrapper w-3/5 overflow-y-auto overflow-x-hidden ">
      <div className="--menu__catalog ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.7em"
          className="px-1 py-1 rounded-sm cursor-pointer bg-pink-300 hover:bg-gray-400 hover:rotate-45 "
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="blog__main"></div>
      <div className= "--menu__sections">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.7em"
          className='px-1 py-1  rounded-sm cursor-pointer bg-pink-200 hover:bg-gray-400 hover:rotate-12'
          viewBox="0 0 448 512"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      </div>
    </div>
  );
};

export default Content;
