import React from "react";
import './sobre.css'

export default function SecaoSobre() {
    return(
        <section id="sobre">
            <div className="limitar-secao">
                <div className="descricao">
                    <h2 className="subtitulo">Quem somos nós?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className="cards-descricao">
                    <img src="././assets/img/loja.png" alt="" />
                    <div>
                        <h3 className="subtitulo">Nossas filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h3 className="subtitulo">Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="././assets/img/atendimento.png" alt="" />
                </div>
            </div>
        </section>
    );
}