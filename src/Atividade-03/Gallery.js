import IrmaoDoJorel  from './imgs/irmao-do-jorel.webp'
import Lara from './imgs/lara.webp';
import Jorel from './imgs/Jorel.webp';
import './style.css';

export function Card({ children }) { 
    return (
        <div className="card">
            {children} 
        </div>
    );
}

export function Profile({ imagem, nome }) {  // Exportação nomeada - passando props
    return (
        <Card>  
            <div className="perfil">
                <img src={imagem} className='imgs' alt={nome} />
            </div>
        </Card>
    );
}

export default function Gallery() {  // Exportação padrão - única
    return (
        <> 
            <section>
                <Profile 
                    imagem={IrmaoDoJorel}
                    nome="Irmão do Jorel"
                />
                <Profile 
                    imagem={Lara}
                    nome="Lara"
                />
                <Profile 
                    imagem={Jorel}
                    nome="Jorel"
                />
            </section>
        </>
    );
}
