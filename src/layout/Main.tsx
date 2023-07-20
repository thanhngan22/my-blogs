import { useState, useEffect } from 'react';

import Catalog from './Catalog';
import Content from './Content';
import Sections from './Sections';

// interfaces
import { IPost, ITPost } from '../interfaces';

function Main() {
    const filePath = 'data/TopicPosts.json';


    useEffect(() => {
      fetch(filePath)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error))
    }, []);


  return (
    <div className="main__container flex ">
        <Catalog />
        <Content  />
        <Sections />
        </div>
  )

}

export default Main;