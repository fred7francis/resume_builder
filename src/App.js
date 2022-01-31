import React from 'react';
import Navbar from './components/layout/Navbar';
import AppRoutes from './components/pages/AppRoutes';

const App = () => {
  return <>
    <Navbar />
    <div className="container">
      <AppRoutes />
    </div>
  </>;
};

export default App;

