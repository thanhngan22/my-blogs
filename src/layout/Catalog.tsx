import { Link } from 'react-router-dom';
import { useState, useEffect, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

// interfaces
import { IPost, ITPost } from '../interfaces';

interface IProps {
  topics: ITPost[];
}

const Catalog: React.FC<IProps> = ({ topics }) => {
  const currentPost = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<JSX.Element[]>([]);

  const setCurrentPost = (e: any) => {
    if (currentPost.current !== null) {
      currentPost.current.classList.remove('--active__post');
    }

    currentPost.current = e.target.parentNode as HTMLDivElement;
    currentPost.current.classList.add('--active__post');
    // console.log("current post: ", currentPost.current)
    const postTitle = currentPost.current.innerText;
    // console.log("post title: ", postTitle)
    document.title = postTitle;
  };

  const toggle = (element: any) => {
    // console.log('element: ', element);
    if (element.classList.contains('--close')) {
      element.classList.remove('--close');
      element.classList.add('--open');
    } else {
      element.classList.remove('--open');
      element.classList.add('--close');
    }
  };

  const handleOnClickTopic = (event: any) => {
    // console.log('event: ', event.target.innerText);
    document.title = event.target.innerText;

    // console.log('event onclick: ', event.target);
    // get div element from tag a
    const divElement = event.target.children;
    // console.log('div element: ', divElement);
    if (divElement.length !== 0) {
      if (divElement[0].classList.contains('--right__triangle')) {
        divElement[0].classList.remove('--right__triangle');
        divElement[0].classList.add('--down__triangle');
      } else {
        divElement[0].classList.remove('--down__triangle');
        divElement[0].classList.add('--right__triangle');
      }
    }

    toggle(event.target.parentNode);
  };

  useEffect(() => {
    // console.log('topics from catalog: ', topics);
    if (topics.length !== 0) {
      const listTopics = topics.map((topic, key) => {
        return (
          <ul className="topic__item --close pb-2" key={key}>
            <Link
              to={`${topic.path}`}
              className="text-gray-400 text-sm hover:text-blue-500 "
              onClick={handleOnClickTopic}
            >
              <div className="--right__triangle"></div>
              {topic.name}
            </Link>
            {topic.posts.map((post, key) => {
              return (
                <li className="post__item " key={key}>
                  <Link
                    to={`${topic.path + post.path}`}
                    className="text-gray-300 hover:text-blue-500"
                    onClick={(e) => setCurrentPost(e)}
                  >
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      });
      setData(listTopics);
    }
  }, [topics]);

  return (
    <div className="catalog__wrapper w-1/5 pl-2 pr-3 py-3 ">
      <div className="catalog__header">
        <h1 className="text-xl text-white ">✏️Index </h1>
      </div>
      <div className="catalog__main flex flex-row">
        <div className="left__bar"></div>
        <div className="list__topics">{data}</div>
        {/* <div className="right__bar"></div> */}
      </div>
    </div>
  );
};

export default Catalog;
