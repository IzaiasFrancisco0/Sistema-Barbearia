import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCalendarDays, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Adicione um arquivo CSS para estilização, se necessário

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => navigate('/Agendar')}>
                    <span><FontAwesomeIcon icon={faCoffee} /></span> Agendar um Horário
                </li>
                <li onClick={() => navigate('/MostrarTabela')}>
                    <span><FontAwesomeIcon icon={faCalendarDays} /></span> Ver Horários Agendados
                </li>
                <li onClick={() => navigate('/Concluidos')}>
                    <span><FontAwesomeIcon icon={faBell} /></span> Total de horários concluídos
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;