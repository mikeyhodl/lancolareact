import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;
