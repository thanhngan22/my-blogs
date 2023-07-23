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
    <div className="content__wrapper w-3/5 overflow-y-auto overflow-x-hidden">
      <div className="blog__main"></div>
    </div>
  );
};

export default Content;
