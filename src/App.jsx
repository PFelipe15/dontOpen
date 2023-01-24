import { useEffect, useState } from 'react'
  ;
import './App.css'

function App() {

  const handleClick = () => {
    const button = document.querySelector('.nao')

    // gerando novas coordenadas aleatoriamente
    const newLeft = Math.floor(Math.random() * 800);
    const newTop = Math.floor(Math.random() * 800);
    const newBottom = Math.floor(Math.random() * 800);
    const newRigth = Math.floor(Math.random() * 800);
    // atualizando as coordenadas do botão
    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
    button.style.bottom = `${newBottom}px`;
    button.style.right = `${newRigth}px`;

  }



  return (
    <div className="App">

      <h1 className='title '>Você quer Namorar Comigo?</h1>
      <div className="container">



        <button className='sim' onClick={() => {
          alert("Obrigado por aceitar por livre e espontânea vontade")
        }} >Sim</button>

        <button className='nao' onClick={() => {
          handleClick()
        }} >Não</button>
      </div>


    </div>
  )
}

export default App