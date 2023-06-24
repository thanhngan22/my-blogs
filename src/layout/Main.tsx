import { useState, useEffect } from 'react';

import Catalog from './Catalog';
import Content from './Content';
import Sections from './Sections';

// modules
import FetchListPosts from '../modules/FetchListPosts';
import { IPost } from '../interfaces';

function Main() {
  const [listTopics, setListTopics] = useState<string[]>([]);
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    const data = FetchListPosts();
    let listObj: IPost[];
    data
      .then((res) => {
        // console.log('res: ', res);
        listObj = res;
        setData(listObj);
      })
      .then(() => {
        const listTopics = listObj.map((obj) => {
          return obj.topic;
        });
        // console.log('listTopics: ', listTopics);
        setListTopics(listTopics);
      });
  }, []);


  return (
    <div className="main__container flex ">
        <Catalog tittles={listTopics} />
        <Content data={data} />
        <Sections data={data} />
        </div>
  )

}

export default Main;