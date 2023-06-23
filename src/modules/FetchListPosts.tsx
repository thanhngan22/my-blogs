import { IPost } from '../interfaces';

// get list posts information from json file
const filePath = 'data/main.json';

const FetchListPosts = async () => {
  let data: IPost[];

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    console.log('fetch data successfully !');
    // console.log(listObj);

    return data;
  }
  catch (err) {
    console.error('error when fetching: ', err);
    return [];
  }

};

export default FetchListPosts;
