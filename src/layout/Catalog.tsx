import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface IProps {
  tittles: string[];
}

const Catalog: React.FC<IProps> = ({ tittles }) => {
  const location = useLocation();

  useEffect(() => {
    // get content after first / in url
    let topic = location.pathname.split('/')[1];
    console.log('topic: ', topic);

    // cat # if has
    if (topic.includes('#')) {
      topic = topic.split('#')[0];
    }

    // go through list topics and find match
    const listTopics = document.querySelectorAll('.list__topics li');
    listTopics.forEach((item) => {
      // console.log('item: ', item);
      const url = item.id;
      if (url === topic) {
        item.classList.add('current__topic');
      } else {
        item.classList.remove('current__topic');
      }
    });
  }, [location]);

  // console.log("tittles: ", tittles);
  const loading = <li key={0}>loading...</li>;

  const [jsx, setJsx] = useState<JSX.Element[] | null>([loading]);

  useEffect(() => {
    const list = tittles.map((tittle, index) => {
      const url = tittle.replace(/\s/g, '-').toLowerCase();
      return (
        <li className="catalog__item" key={index} id={url}>
          <Link to={`/${url}`} className="text-slate-900 hover:text-slate-700">
            {tittle}
          </Link>
        </li>
      );
    });
    if (list !== null) {
      // console.log('list: ', list);
      setJsx(list);
    }
  }, [tittles]);

  return (
    <div className="catalog__wrapper w-1/5 pl-4 pr-5 py-5  ">
      <div className="catalog__header">
        <h1 className="text-xl text-slate-800 "> 🌩️ Index</h1>
      </div>
      <div className="catalog__main flex flex-row">
        <div className="left__bar"></div>
        <ul className="list__topics">{jsx}</ul>
        {/* <div className="right__bar"></div> */}
      </div>
    </div>
  );
};

export default Catalog;
