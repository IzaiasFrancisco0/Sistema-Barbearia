import './MostrarTabela.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Concluidos from './Concluidos';
import Sidebar from './Sidebar'; 

export default function MostrarTabela() {
  const [arrayVazio, setArrayVazio] = useState([]);

  useEffect(() => {
    const armazenamentoLocal = JSON.parse(localStorage.getItem("agendamento")) || [];
    setArrayVazio(armazenamentoLocal);
  }, []);

  function concluirTarefa(index) {
    const newArray = arrayVazio.map((item, i) =>
      i === index ? { ...item, concluido: !item.concluido } : item
    );
    setArrayVazio(newArray);
    localStorage.setItem("agendamento", JSON.stringify(newArray));
  }

  function excluirItem(index) {
    const newArray = arrayVazio.filter((_, i) => i !== index);
    setArrayVazio(newArray);
    localStorage.setItem("agendamento", JSON.stringify(newArray));
  }

  const totalConcluidos = arrayVazio.filter(agendamento => agendamento.concluido).length;

  return (
    <div className="mostrar-tabela">
        <Sidebar />
      <h2>Total de Agendamentos</h2>
      <Concluidos totalConcluidos={totalConcluidos} /> {/* Passa o total como prop */}
      <div className="table-container2">
        <table>
          <thead>
            <tr>
              <th>ID Cliente</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Serviço</th>
              <th>Observação</th>
              <th>Concluidos</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {arrayVazio.map((agendamento, index) => (
              <tr key={index}>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.idCliente} {/* ID Cliente */}
                </td>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.cliente} {/* Número */}
                </td>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.data} {/* Data */}
                </td>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.hora} {/* Hora */}
                </td>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.servico} {/* Serviço */}
                </td>
                <td style={{
                  textDecoration: agendamento.concluido ? 'line-through' : 'none',
                  color: agendamento.concluido ? 'red' : 'white'
                }}>
                  {agendamento.observacao} {/* Cliente */}
                </td>
                <td className="concluido" onClick={() => concluirTarefa(index)}>✔</td>
                <td className="icone-excluir" onClick={() => excluirItem(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
