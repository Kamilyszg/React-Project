import { Link } from "react-router-dom";
import Relogio from "./Atividade-01/Relogio";
import Letreiro from "./Atividade-01/Letreiro";
import './Atividade-01/style.css';

export default function Atv01(){
    return (
        <div className="container-01">
            <h2>Semana 1</h2>
            <Relogio />
            <Letreiro />
            <Link to="/">Voltar</Link>
        </div>
    );
};
