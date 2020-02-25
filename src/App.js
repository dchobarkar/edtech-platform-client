import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Layout></Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
