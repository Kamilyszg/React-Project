import { Link } from "react-router-dom";
import Contador from "./Atividade-02/Contador";


export default function Atv02(){
    return (
        <>
            <h2 style={{textAlign: "center"}}>Semana 2</h2>
            <Contador /> 
            <Link to="/" style={{ marginLeft: 20}}>Voltar</Link>
     
        </>
    );
};
