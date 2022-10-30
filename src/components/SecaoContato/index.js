import React from "react";
import './contato.css'

export default function SecaoContato() {
    return(
        <section id="contato">
            <div className="limitar-secao">
                <div>
                    <h4 className="subtitulo">Fale conosco</h4>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <address className="endereco">
                    <div className="container-endereco">
                        <h4>Contato</h4>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/local.png" alt="" />
                            <span>Nova Iguaçi, RJ</span>
                        </div>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/telefone.png" alt="" />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/email.png" alt="" />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className="container-endereco">
                        <h4>Nossas Redes Sociais</h4>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/fb.png" alt="" />
                            <span>/OticaVida</span>
                        </div>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/ig.png" alt="" />
                            <span>@oticavidarj</span>
                        </div>
                        <div className="container-img">
                            <img className="icone-endereco" src="././assets/img/tt.png" alt="" />
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </address>
            </div>
        </section>
    );
}