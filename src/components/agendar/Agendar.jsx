import './Agendar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

export default function Agendar() {
  const [inputCliente, setCliente] = useState('');
  const [inputServico, setServico] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [observacao, setObservacao] = useState('');
  const [arrayVazio, setArrayVazio] = useState([]);

  const navigate = useNavigate();

  const data = inputDate.trim() !== '';
  const hora = inputTime.trim() !== '';
  const cliente = inputCliente.trim() !== '';
  const servico = inputServico.trim() !== '';
  const obs = observacao.trim() !== '';

  useEffect(() => {
    const armazenamentoLocal = JSON.parse(localStorage.getItem("agendamento")) || [];
    setArrayVazio(armazenamentoLocal);
  }, []);

  function validarDados() {
    if (!data || !hora || !cliente || !servico || !obs) {
      alert("Tem algum campo vazio!!");
      return;
    }

    const agendamentoExistente = arrayVazio.find(
      (agend) =>
        agend.cliente.toLowerCase() === inputCliente.toLowerCase()
    );

    if (agendamentoExistente) {
      alert("Já existe um agendamento para este cliente (ID e Nome)!");
      return;
    }

    const novoAgendamento = {
      cliente: inputCliente,
      servico: inputServico,
      hora: inputTime,
      data: inputDate,
      observacao,
    };

    const novosAgendamentos = [...arrayVazio, novoAgendamento];
    setArrayVazio(novosAgendamentos);
    localStorage.setItem("agendamento", JSON.stringify(novosAgendamentos));

    alert("Horário agendado com sucesso!!");
  }

  return (
    <div className="agendar">
      <Sidebar />
      <div className="container-agenda">
        <div className="tabela-agendamento">
          <div className="tabela">
            <label>Nome</label>
            <input type="text" value={inputCliente} onChange={(e) => setCliente(e.target.value)} />
            <label>Serviço</label>
            <select value={inputServico} onChange={(e) => setServico(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Barba">Barba</option>
              <option value="Cabelo">Cabelo</option>
              <option value="Sobrancelha">Sobrancelha</option>
            </select>
            <label>Horário</label>
            <input type="time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
            <label>Data</label>
            <input className="input-date" type="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
            <button onClick={validarDados}>Agendar</button>
          </div>
          <div className="observacao">
            <label>Observação</label>
            <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} />
          </div>
        </div>
        <div className="horarios-agendados">
          <h3>Horários Agendados</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data</th>
                  <th>Horário</th>
                  <th>Serviço</th>
                  <th>Observação</th>
                </tr>
              </thead>
              <tbody>
                {arrayVazio.map((agendamento, index) => (
                  <tr key={index}>
                    <td>{agendamento.cliente}</td>
                    <td>{agendamento.data}</td>
                    <td>{agendamento.hora}</td>
                    <td>{agendamento.servico}</td>
                    <td className="obs-classe">{agendamento.observacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
