import { Link } from "react-router-dom";
import Toolbar from "./Atividade-04/Toolbar/Toolbar";
import Gallery from "./Atividade-04/Gallery/Gallery";
import Counter from "./Atividade-04/Counter/Counter";
import MovingDot from "./Atividade-04/MovingDot/MovingDot";
import Form1 from "./Atividade-04/Form/Form1";
import Form2 from "./Atividade-04/Form/Form2";
import Form3 from "./Atividade-04/Form/Form3";
import List1 from "./Atividade-04/List/List1";
import List2 from "./Atividade-04/List/List2";
import ShapeEditor from "./Atividade-04/List/ShapeEditor";



export default function Atv04(){
    return(
        <>
            <div className="toolbar">
                <Toolbar></Toolbar> 
            </div>
            <div className="gallery">
                <Gallery></Gallery>
            </div>
            <div className="counter">
                <Counter></Counter>
            </div>
            <div className="form">
                <Form1></Form1>
            </div>
            <div className="movingDot">
                <MovingDot></MovingDot>
            </div>
            <div className="form">
                <Form2></Form2>
            </div>
            <div className="form">
                <Form3></Form3>
            </div>
            <div className="list">
                <List1></List1>
            </div>
            <div className="list">
                <List2></List2>
            </div>
            <div className="list">
                <ShapeEditor></ShapeEditor>
            </div>
            <Link to="/" className="link-voltar">Voltar</Link>   
        </>
    );
}