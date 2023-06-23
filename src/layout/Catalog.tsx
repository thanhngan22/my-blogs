import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface IProps {
  tittles: string[];
}

const Catalog: React.FC<IProps> = ({ tittles }) => {
  // console.log("tittles: ", tittles);
  const loading = <div>loading...</div>;

  const [jsx, setJsx] = useState<JSX.Element[] | null>([loading]);

  useEffect(() => {
    const list = tittles.map((tittle, index) => {
      const url = tittle.replace(/\s/g, '-').toLowerCase();
      return (
        <li className="catalog__item" key={index}>
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
    <div className="catalog__wrapper w-1/5 pl-12 pr-5 py-5 overflow-auto overflow-x-hidden ">
      <div className="catalog__header">
        <h1 className="text-xl text-slate-900"> 📜 Table of contents</h1>
      </div>
      <div className="catalog__main pl-10 pt-4">
        <ul className="list__topics">
          {jsx}
          </ul>
      </div>
    </div>
  );
};

export default Catalog;
