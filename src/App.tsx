import React from 'react';

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Catalog from './layout/Catalog';
import Content from './layout/Content';
import Sections from './layout/Sections';

function App() {
  return (
    <div className="app__container h-screen flex flex-col">
      <div id="header" className="h-6">
        <Header />
      </div>
      <div className="main__container flex ">
        <Catalog />
        <Content />
        <Sections />
      </div>
      <div id="footer" className="h-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
