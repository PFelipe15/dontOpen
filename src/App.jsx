import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
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

  function notify() {


    toast.success("Obrigado por aceitar namorar comigo por livre e espontânea vontade ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "colored",
    });
  }

  return (
    <div className="App">

      <h1 className='title '>Você quer Namorar Comigo?</h1>
      <div className="container">


        <button className='sim' onClick={() => {
          notify()
        }} >Sim</button>

        <button className='nao' onClick={() => {
          handleClick()
        }} >Não</button>
      </div>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App