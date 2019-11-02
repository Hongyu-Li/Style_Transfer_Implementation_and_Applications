import React from 'react';
import './App.module.scss';
import Header from './Header';
import Content from './routers.js';

function App() {
  return (
    <div className="app">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
