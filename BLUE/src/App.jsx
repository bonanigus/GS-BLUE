import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Videos from './components/Videos';
import ApiSection from './components/ApiSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Importe o CSS aqui

const App = () => (
  <div>
    <Header />
    <Banner />
    <Features />
    <Videos />
    <ApiSection />
    <Contact />
    <Footer />
  </div>
);

export default App;