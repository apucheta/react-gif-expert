import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const newImgs = await getGifs(category);
    setImages(newImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return { images, isLoading };
};
