
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import React from 'react';
import Alert from './components/layouts/Alert'
import CoingeckoState from './context/coingecko/CoingeckoState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';
import Coin from './components/coins/Coin';
const App = ()=> {
  return (
    <CoingeckoState>
      <AlertState>
        <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/coin/:id" element={<Coin />}/>
            <Route path='*' element={<NotFound />} />
          </Routes></div></div>
        </BrowserRouter>
      </AlertState>
    </CoingeckoState>
  );
}

export default App;
