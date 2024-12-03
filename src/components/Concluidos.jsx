import React from 'react';
import './Concluidos.css';

export default function Concluidos({ totalConcluidos }) {
    console.log({totalConcluidos})
  return (
    <div className="concluidos">
      <h3>Total de agendamentos concluídos: <span>{totalConcluidos} finalizados</span></h3>
    </div>
  );
}
