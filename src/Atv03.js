import { Link } from "react-router-dom";
import Gallery from './Atividade-03/Gallery'
import { Profile } from "./Atividade-03/Gallery";
import IrmaoDoJorel from './Atividade-03/imgs/irmao-do-jorel.webp';
import DescriptionList from "./Atividade-03/DescriptionList";
import List from "./Atividade-03/List";

export default function Atv03(){
    const objeto = {
        tema: {backgroundColor: "#E0FFFF"}
    }

    return (
        <div style={objeto.tema}>
            <h2>Semana 3</h2>

            <h3>Desenhos animados</h3>

            <p>Método default</p>
            <Gallery />

            
            <p>Método - exportação nomeada</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Profile imagem={IrmaoDoJorel} nome="Irmão do Jorel"/>
            </div>
            
            <DescriptionList />

            <p>Lista de renderização</p>
            <List/>

            <Link to="/" className="link-voltar">Voltar</Link>    
        </div>
    );
};