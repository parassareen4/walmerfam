import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentStories from './components/RecentStories';
import Quote from './components/Quote';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RecentStories />
      <Quote />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;