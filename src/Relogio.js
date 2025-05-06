import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      const data = new Date();
      const horas = data.getHours();
      const minutos = data.getMinutes();
      const segundos = data.getSeconds();

      const horarioFormatado = `${horas} : ${minutos} : ${segundos}`;
      setHorario(horarioFormatado);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); 

  return (
    <div>
      <div id='relogio'>{horario}</div>
    </div>
  );
}

export default Relogio;
