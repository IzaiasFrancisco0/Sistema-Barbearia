import React from 'react';
import './Concluidos.css';

export default function Concluidos({ totalConcluidos }) {
  return (
    <div className="concluidos">
      <h3>Total de agendamentos concluídos: <span>{totalConcluidos} {totalConcluidos <= 1 ? 'Finalizado' : 'Finalizados'}</span></h3>
    </div>
  );
}
