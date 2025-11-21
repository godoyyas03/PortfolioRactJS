import React from "react";
import LogotipoFooter from '../images/logotipoJP.png';
import Linkedin from '../images/icones/iconsLinkedin.png';
import GitHub from '../images/icones/iconsGithub.png';
import Youtube from '../images/icones/iconsYoutube.png';
import Facebook from '../images/icones/iconsFacebook.png';
import Instagram from '../images/icones/iconsInstagram.png';
import Behance from '../images/icones/iconsBehance.png';

const Footer = () => (
    <footer className="endPage">
        <section className="rsFooter">
            <div className="wrap">
                <h1 className="titleRS">Redes Sociais!</h1>
                <div className="iconRS">
                    <a href="#" target="_blank" className="linkRS">
                        <img src={Linkedin} alt="Linkedin" title="Linkedin" className="iconIMG"/>
                    </a>
                    <a href="#" target="_blank" className="linkRS">
                        <img src={GitHub} alt="GitHub" title="GitHub" className="iconIMG"/>
                    </a>
                    <a href="#" target="_blank" className="linkRS">
                        <img src={Youtube} alt="Youtube" title="Youtube" className="iconIMG"/>
                    </a>
                    <a href="#" target="_blank" className="linkRS">
                        <img src={Facebook} alt="Facebook" title="Facebook" className="iconIMG"/>
                    </a>
                    <a href="#" target="_blank" className="linkRS">
                        <img src={Instagram} alt="Instagram" title="Instagram" className="iconIMG"/>
                    </a>
                    <a href="#" target="_blank" className="linkRS">
                        <img src={Behance} alt="Behance" title="Behance" className="iconIMG"/>
                    </a>
                </div>
            </div>
        </section>

        <section className="copy">
            <div className="wrap">
                <div className="infoCopy">
                    <p>Todos os direitos reservados © 2025/2026</p>
                    <a href="#">
                        <img src={LogotipoFooter} alt="JP Portfólio" title="JP Portfólio" className="logotipoCopy"/>
                    </a>
                </div>
            </div>
        </section>
    </footer>
)

export  default Footer;