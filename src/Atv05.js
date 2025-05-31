import { Link } from "react-router-dom";
import FormQuiz from "./Atividade-05/Form/FormQuiz";
import FormTicket from "./Atividade-05/Form/FormTicket";
import Accordion from "./Atividade-05/Accordion/Accordion";
import Messenger from "./Atividade-05/Contact-Chat/Messenger";
import "./Atividade-05/Atv05.css";

export default function Atv05() {
  return (
    <div className="container-atividade-05">
      <div className="bloco-componente">
        <FormQuiz />
      </div>

      <div className="bloco-componente">
        <FormTicket />
      </div>

      <div className="bloco-componente">
        <Accordion />
      </div>

      <div className="bloco-componente">
        <Messenger />
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/" className="link-voltar">Voltar</Link>
      </div>
    </div>
  );
}
