import React from 'react';
//Forma que o REACT tem trabalhar com o browser (DOM)
import ReactDOM from 'react-dom';
import App from './App';

//Buscando no HTML uma div ou qualquer elemento que tenha o ID root e dentro dele
//coloca o scritct.
ReactDOM.render(
  <React.StrictMode>
  {/* Esse app foi importado e esta sendo usado como uma tag html, isso é chamado
  de JSX, sintaxe de usar html dentro do javascript.
  É um componete no React (tudo que conseguimos separar) */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);