import React from 'react';
import './App.css';

import Header from './components/Topo';
import Main from './components/Conteudo';
import Rodape from './components/Rodape';


export default function App() {  
    return (
      <div className='App'>
        <Header />
        <Main />
        <Rodape />
      </div>
    ); 
}

