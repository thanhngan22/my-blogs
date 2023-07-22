import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// interfaces
import { IPost, ITPost } from '../interfaces';

interface IProps {
  topics : ITPost[];
}

const Catalog : React.FC<IProps> = ({ topics }) => {

  const [data, setData] = useState<JSX.Element[]>([]);
  
useEffect(() => {
  console.log("topics from catalog: ", topics)
  if (topics.length !== 0) {
    const listTopics = topics.map((topic, key) => {
      return (
        <ul className = "topic__item text-white pb-2" key = {key}>
          <Link to = {`${topic.path}`} className = "text-white text-base hover:text-blue-500 pb-2">
            <div className="right__triangle"></div>
            {topic.name}</Link>
          {
            topic.posts.map((post, key) => {
              return (
                <li className = "post__item post__item-active" key = {key}>
                  <Link to = {`${ post.path}`} className = "text-white hover:text-blue-500">
                    {post.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      )
    }) 
    setData(listTopics);
  }
}, [topics])

  return (
    <div className="catalog__wrapper w-1/5 pl-4 pr-5 py-5  ">
      <div className="catalog__header">
        <h1 className="text-xl text-white "> 🌩️ Index</h1>
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
