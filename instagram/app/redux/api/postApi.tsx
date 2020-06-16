import {POST_FETCH_URL} from '../constants';

const posts = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    creator: 'trupti_mondler',
    creatorThumbnail: 'https://reactnative.dev/img/tiny_logo.png',
    post: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    creator: 'trupti_mondler',
    creatorThumbnail: 'https://reactnative.dev/img/tiny_logo.png',
    post: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    creator: 'trupti_mondler',
    creatorThumbnail: 'https://reactnative.dev/img/tiny_logo.png',
    post: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
const fetchPosts = async userId => {
  const response = await fetch(`${POST_FETCH_URL}`);

  const data = await response.json();

  if (data && data.error) {
    console.log('error throw');
    throw new Error(data.errors);
  }
  data.posts = posts;
  return data.posts;
};

export {fetchPosts};
