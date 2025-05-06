import { Link } from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

export default function Atv01(){
    return (
        <>
            <h2>Semana 1</h2>
            <Relogio />
            <Letreiro />
            <Link to="/">Voltar</Link>
        </>
    );
};
