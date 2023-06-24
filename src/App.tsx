import React from 'react';
import { Outlet, BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import router from './routes';
// components

function App() {
  return (
<div id="App">
  < RouterProvider router={router} />
</div>
  );
}

export default App;
