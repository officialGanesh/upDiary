import React from 'react';
import CardBlog from '../components/CardBlog';

import Header from '../components/Header';

function Home({ setIsAuth }) {

  
  return (
      <>
      <Header setIsAuth={setIsAuth} />
      <CardBlog />
      
      </>
  );
}

export default Home;
