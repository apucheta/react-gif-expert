import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categorias, setCategories] = useState(['auto']);

  const onAddCategory = (cat) => {
    if (categorias.includes(cat)) return;
    setCategories([cat, ...categorias]);
    // console.log('cat', cat);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categorias.map((categoria) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;
