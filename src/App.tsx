import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  return (
<Router>
<div className="app__container h-screen flex flex-col">
      <div id="header" className="h-6">
        <Header />
      </div>
      <div id="main" className="h-full">
        <Main />
      </div>
      <div id="footer" className="h-6">
        <Footer />
      </div>
    </div>
</Router>
  );
}

export default App;
