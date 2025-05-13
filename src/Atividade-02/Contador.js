import React, { useState } from 'react';
import './style.css';
import ciclo from './imgs/ciclo.png';
import homem from './imgs/homem.png';
import mulher from './imgs/mulher.png';
import mais from './imgs/mais.png';
import menos from './imgs/menos.png';

export default function Contador(){
    const [contagemHomem, setContagemHomem] = useState(0);
    const [contagemMulher, setContagemMulher] = useState(0);

    const soma = contagemHomem + contagemMulher;
    
    function adicionarHomem(){
        setContagemHomem(contagemHomem + 1);
    }
    function adicionarMulher(){
        setContagemMulher(contagemMulher + 1);
    }
    function removerHomem(){
        setContagemHomem(contagemHomem - 1);
    }
    function removerMulher(){
        setContagemMulher(contagemMulher - 1);
    }

    const reset = () => {
        setContagemHomem(0);
        setContagemMulher(0);
    };

    return (
        <div className="atividade03-container" id="contador">
            <div className="container">
                <div className="container_titulo">
                    <h1>Total</h1>
                    <img src={ciclo} alt="Redefinir" id="reset" onClick={reset} />
                </div>

                <div className="resultado" id="soma">{soma}</div>

                <div className="container_imagens">
                    <img src={homem} alt="Homem" id="homem" />
                    <img src={mulher} alt="Mulher" id="mulher" />
                </div>

                <div className="container_botoes">
                    <div>
                    <img src={mais} alt="Adicionar" className="botao" onClick={adicionarHomem} />
                    <img src={menos} alt="Remover" className="botao" onClick={removerHomem} />
                    </div>

                    <div>
                    <img src={mais} alt="Adicionar" className="botao" onClick={adicionarMulher} />
                    <img src={menos} alt="Remover" className="botao" onClick={removerMulher} />
                    </div>
                </div>

                <div className="container_resultados">
                    <div>
                    <p>Homens</p>
                    <div className="quadrado" id="contagem_homem">{contagemHomem}</div>
                    </div>

                    <div>
                    <p>Mulheres</p>
                    <div className="quadrado" id="contagem_mulher">{contagemMulher}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
