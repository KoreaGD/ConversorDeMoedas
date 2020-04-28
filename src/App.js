import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1 className="titulo">
        <img src="logo192.png" alt="Made with React" />
        <p id="title">CONVERSOR REACT.JS</p>
      </h1>
      <div className="convertFromTo">
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </div>
      <div className="convertFromTo">
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </div>
      <div className="convertFromTo">
        <Conversor moedaA="GBP" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="GBP" />
      </div>
      <div className="credits">Desenvolvido por Everton Trajano.</div>
    </div>
  );
}

export default App;
