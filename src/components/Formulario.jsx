import './Formulario.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Formulario(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); 

    const validarForm = (e) => {
        e.preventDefault()
        if(usuario === 'izaias' && senha === '1234'){
            alert("deuuu");
            navigate('/Agendar');
        } else{
            alert("não deuu")
        }
    }
    return (
        
        <div className="container-form">
            <form className="form" onSubmit={validarForm}>
                <h2>Login</h2>
                <input type="name" placeholder="Digite seu Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                <input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <button type="submit">Entrar</button>
            </form>
            <div className="foto">
                
            </div>
        </div>
    )
}