import React from "react";
import './produtos.css'

export default function SecaoProdutos() {
    return (
        <section id="produtos">
            <div className="limitar-secao">
                <div>
                    <h2 className="subtitulo">Nossos Produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className="secao-cards">
                    <div>
                        <h2 className="subtitulo">Óculos de grau</h2>
                        <img src="././assets/img/oculos01.png" alt="óculos" />
                        <p>R$ 500,00</p>
                    </div>
                    <div>
                        <h2 className="subtitulo">Óculos transition</h2>
                        <img src="././assets/img/oculos02.png" alt="óculos" />
                        <p>R$ 750,00</p>
                    </div>
                    <div>
                        <h2 className="subtitulo">Óculos de sol</h2>
                        <img src="././assets/img/oculos03.png" alt="óculos" />
                        <p>R$ 700,00</p>
                    </div>
                    <div>
                        <h2 className="subtitulo">Óculos de infantil</h2>
                        <img src="././assets/img/oculos04.png" alt="óculos" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem</p>
                <ul className="lista">
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
                
            </div>
          
        </section>
    );
}