import React from 'react';
import ReactDOM from 'react-dom/client';

function LetreiroTexto({ texto }) {
  return <h1>{texto}</h1>;
}

export default function Letreiro() {
  //cria-se uma referencia

  if (!window.letreiroIniciado) {
    window.letreiroIniciado = true;

    const frase = "Conheça a Fatec";
    let index = 0;

    const intervalo = setInterval(() => {
      const rootContainer = document.getElementById('letreiro-container');
      if (!rootContainer) return;

      const root = ReactDOM.createRoot(rootContainer);
      const parte = frase.slice(0, index + 1);
      root.render(<LetreiroTexto texto={parte} />);
      index++;

      if (index === frase.length) {
        clearInterval(intervalo);
      }
    }, 150);
  }

  return <div id="letreiro-container"></div>;
}