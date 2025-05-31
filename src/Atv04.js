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
import CounterList from "./Atividade-04/List/CounterList";
import List3 from "./Atividade-04/List/List3";
import List4 from "./Atividade-04/List/List4";
import BucketList from "./Atividade-04/List/BucketList";
import './Atividade-04/Atv04.css'

export default function Atv04(){
    return(
        <>
        <h1 style={{ textAlign: 'center' }}>Atividades</h1>
            <div className="modules-grid">
                <div className="module-card">
                    <h2>Toolbar</h2>
                    <Toolbar />
                </div>
                <div className="module-card">
                    <h2>Gallery</h2>
                    <Gallery />
                </div>
                <div className="module-card">
                    <h2>Counter</h2>
                    <Counter />
                </div>
                <div className="module-card">
                    <h2>Bucket List</h2>
                    <BucketList />
                </div>
                <div className="module-card">
                    <h2>Form 1</h2>
                    <Form1 />
                </div>
                <div className="module-card">
                    <h2>Form 2</h2>
                    <Form2 />
                </div>
                <div className="module-card">
                    <h2>Form 3</h2>
                    <Form3 />
                </div>
                <div className="module-card">
                    <h2>List 1</h2>
                    <List1 />
                </div>
                <div className="module-card">
                    <h2>List 2</h2>
                    <List2 />
                </div>
                <div className="module-card">
                    <h2>List 3</h2>
                    <List3 />
                </div>
                <div className="module-card">
                    <h2>List 4</h2>
                    <List4 />
                </div>
                <div className="module-card">
                    <h2>Shape Editor</h2>
                    <ShapeEditor />
                </div>
                <div className="module-card">
                    <h2>Counter List</h2>
                    <CounterList />
                </div>
                <div className="module-card">
                    <h2>Moving Dot</h2>
                    <MovingDot />
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link to="/" className="link-voltar">Voltar</Link> 
            </div>
        </>
    );
}