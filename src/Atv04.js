import { Link } from "react-router-dom";
import Toolbar from "./Atividade-04/Toolbar/Toolbar";
import Gallery from "./Atividade-04/Gallery/Gallery";

export default function Atv04(){
    return(
        <>
            <div className="toolbar">
                <Toolbar></Toolbar> 
            </div>
            <div className="gallery">
                <Gallery></Gallery>
            </div>
            <Link to="/" className="link-voltar">Voltar</Link>   
        </>
    );
}