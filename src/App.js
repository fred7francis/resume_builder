import React, { useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import AppRoutes from './components/pages/AppRoutes';
import { Provider } from 'react-redux';
import store from './store';
import dummy from './components/data/dummy.json'

const App = () => {
  useEffect(() => {
    localStorage.setItem("resumeBuilder", JSON.stringify(dummy));
  }, []);

  return <>
    <Provider store={store}>
      <Navbar />
      <div className="container border mb-5" style={{}}>
        <AppRoutes />
      </div>
    </Provider>

  </>;
};

export default App;

