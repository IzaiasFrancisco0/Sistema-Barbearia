import './Agendar.css'
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; 

export default function Agendar(){
    const [idCliente, setIdCliente] = useState(0);
    const [inputCliente, setCliente] = useState('');
    const [inputServico, setServico] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [observacao, setObservacao] = useState('');
    const [arrayVazio, setArrayVazio] = useState([]);

    const navigate = useNavigate(); 

    const iDCliente = idCliente !== 0;
    const data = inputDate !== '';
    const hora = inputTime !== '';
    const cliente = inputCliente !== '';
    const servico = inputServico !== '';
    const obs = observacao !== '';

    useEffect(() => {
      const armazenamentoLocal = JSON.parse(localStorage.getItem("agendamento")) || [];
     setArrayVazio(armazenamentoLocal);
     }, [])

  function validarDados() {
 

    if(!iDCliente || !data || !hora || !cliente || !servico || !obs){
        alert("Por favor, preencha todos os campos de data e hora.");
        return; 
   } 

         const novoAgendamento = {
            cliente: inputCliente,
            servico: inputServico,
            hora: inputTime,
            data: inputDate,
            idCliente,
            observacao,
         }

         const filterArray = arrayVazio.some((agend) => agend.data === inputDate && agend.hora === inputTime && agend.cliente === inputCliente && agend.servico === inputServico && agend.iDCliente === idCliente && agend.obs === observacao);

         if(filterArray){
            alert("já existe uma data e horario marcado!!");
         } else{
            setArrayVazio([...arrayVazio, novoAgendamento]);
            const novosAgendamentos = [...arrayVazio, novoAgendamento];
            setArrayVazio(novosAgendamentos);
            localStorage.setItem("agendamento", JSON.stringify(novosAgendamentos));

            alert("Horário agendado com sucesso!!");
       
         }
         
  }
    return(
        <div className="agendar">
           <Sidebar />
            <div className="container-agenda">
         
                <div className="tabela-agendamento">
                
                  <div className="tabela"> 
                  <label>ID Cliente</label>
                  <input type="number" onChange={(e) => setIdCliente(e.target.value)}/>
                  <label>Cliente</label>
                  <input type="text" onChange={(e) => setCliente(e.target.value)}/>
                  <label>Serviço</label>
                  <select value={inputServico} onChange={(e) => setServico(e.target.value)}>
                    <option value="Escolha um serviço"></option>
                   <option value="barba">Barba</option>
                   <option value="cabelo">Cabelo</option>
                   <option value="sobrancelha">Sobrancelha</option>
                  </select>
                <label>Escolha um horário</label>
                <input type="time" onChange={(e) => setInputTime(e.target.value)}></input>
                <label>Escolha uma data</label>
                <input className="input-date" type="date" onChange={(e) => setInputDate(e.target.value)}></input>
                <button onClick={validarDados}>Agendar</button>
                </div>
                <div className="observacao">
                  <label>Observação</label>
                 <textarea onChange={(e) => setObservacao(e.target.value)}>
                 
                 </textarea>
                </div>
                </div> 
                <div className="horarios-agendados">
                <h3>Horários agendados</h3>
                <div className="table-container"> 
              <table>
                <thead>
                    <tr>
                        <th>ID Cliente</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Serviço</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                 {arrayVazio.map((agendamento, index) => (
                    <tr key={index}>
                      <td>{agendamento.idCliente}</td>
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
    )
}