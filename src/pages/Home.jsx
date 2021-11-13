import React from 'react';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Portfolio from '../components/portfolio';

const Home = () => {
  return (
    <>
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
