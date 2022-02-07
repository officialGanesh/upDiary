import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home({ setIsAuth }) {

  
  return (
      <>
      <Header setIsAuth={setIsAuth} />

      <Footer />
      </>
  );
}

export default Home;
