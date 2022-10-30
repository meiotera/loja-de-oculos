import React from "react"
import './topo.css'

export default function Header() {
    return(
        <header className="topo">
            <div className="limitar-secao">               
                <img src="./assets/img/logo.png" alt="logo ótica" />
            
                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    );
}

