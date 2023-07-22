import { useState, useEffect } from 'react';

import Catalog from './Catalog';
import Content from './Content';
import Sections from './Sections';

// interfaces
import { IPost, ITPost } from '../interfaces';



function Main() {
    const [topics, setTopics] = useState<ITPost[]>([]);

    const topicsFilePath = "data/TopicPosts.json";

    

    useEffect(() => {
      fetch(topicsFilePath)
      .then(response => response.json())
      .then(data => {
        console.log("data from main: ", data);
        setTopics(data);
      })
      .catch(error => console.log(error))
    }, []);


  return (
    <div className="main__container flex ">
        <Catalog topics = {topics} />
        <Content topics = {topics} />
        <Sections />
        </div>
  )

}

export default Main;