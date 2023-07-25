import { useState, useEffect } from 'react';

import Catalog from './Catalog';
import Content from './Content';
import Sections from './Sections';

// interfaces
import { IPost, ITPost } from '../interfaces';



function Main() {
    const [topics, setTopics] = useState<ITPost[]>([]);

    // set path of data file
    const localPath = "http://localhost:3000/data/TopicPosts.json";
    const publicPath = "https://suke-blogs.vercel.app/data/TopicPosts.json";

    // console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
    const topicsFilePath = process.env.NODE_ENV === "development" ? localPath : publicPath;

    

    useEffect(() => {
      fetch(topicsFilePath)
      .then(response => response.json())
      .then(data => {
        // console.log("data from main: ", data);
        setTopics(data);
      })
      .catch(error => console.log("error from fetching posts file: ", error))
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