// react markdown
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
// import mermaid from 'mermaid';

// utils
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IPost } from '../interfaces';

interface IProps {
  data: IPost[];
}

const Content: React.FC<IProps> = ({ data }) => {
  //   console.log('data: ', data);

  const [content, setContent] = useState<string>(`
  # Hi there 👋  
  
  ### This is my blog webpage :")`);

  //   get url
  const url = useLocation();
  // console.log('url: ', url);

  //   fetch data func
  const fetchData = async (filePath: string) => {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      // console.log('fetch data successfully !');
      // console.log('text: ', text);

      setContent(text);

      return text;
    } catch (err) {
      console.error('error when fetching: ', err);
      return '';
    }
  };

  useEffect(() => {
    // get tittle from url
    const tittle = url.pathname.split('/')[1];

    // find post with tittle
    const post = data.find((post) => {
      const postTittle = post.topic.toLowerCase().replace(/\s/g, '-'); // correct later | topic and tittle ****
      // console.log("postTittle: ", postTittle);
      // console.log("tittle: ", tittle);

      return postTittle === tittle;
    });

    // console.log('post: ', post);

    const filePath = post?.path;

    if (filePath !== undefined) {
      // console.log('filePath: ', filePath);
      fetchData(filePath);
    }
  }, [url.pathname]);

  useEffect(() => {
    // get all h2 and add href and cursor pointer
    const h2Elements = document.querySelectorAll('h2');
    console.log('h2Elements: ', h2Elements);

    h2Elements.forEach((h2, index) => {
      h2.id = `${index}`;
      // h2.style.cursor = 'pointer';
    });

    function observeSections () {
          // create a new Intersection Observer
    const viewedSections: Array<string> = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSectionId = entry.target.id;
          console.log('Currently viewed section id: ', currentSectionId);

          if (!viewedSections.includes(currentSectionId)) {
            viewedSections.push(currentSectionId);
            console.log('viewedSections: ', viewedSections);
          } else {
            const index = viewedSections.indexOf(currentSectionId);
            if (index !== -1) {
              viewedSections.splice(index, 1);
            }
          }
        }
      });

      if (viewedSections.length > 0) {
        history.pushState(null, '', `#${viewedSections[0]}`);

        // clear all viewed sections
        viewedSections.splice(0, viewedSections.length);
      }
    });

    // observe all h2 elements
    h2Elements.forEach((item) => {
      observer.observe(item);
    });
    }

    window.addEventListener('scroll', observeSections);

    observeSections();

  }, [content]);

  return (
    <div className="content__wrapper w-3/5 overflow-y-auto overflow-x-hidden">
      <div className="blog__main">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </div>
  );
};

export default Content;
