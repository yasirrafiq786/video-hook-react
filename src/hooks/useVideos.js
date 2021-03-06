import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: 'AIzaSyAvzMOE3FB9w2AyzcVqjiWz8k63YWWZxmY',
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
