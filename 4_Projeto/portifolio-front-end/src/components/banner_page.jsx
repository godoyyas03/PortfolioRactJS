import React from "react";
import GitHubBanner from '../images/icones/icons-github-250.svg';
import LinkedinBanner from '../images/icones/icons-linkedin-250.svg';
import ImagemBanner from '../images/imgBanner.jpg';

const BannerPage = () => (
    <section className="bannerPage">
        <div className="wrap colum1">
            <div className="titleBanner">
                <h1 className="textBanner">
                    <span className="nome">Jhonas Perom</span>
                    <span className="funcao">Desenvolvedor Web Full-Stack</span>
                    <span className="descricao">Este é o meu Portfólio, conheça um pouco mais sobre o meu trabalho!</span>
                </h1>

                <div className="bntPortfolio">
                    <a href="#" target="_blank" className="linkGitHub">
                        <img src={GitHubBanner} alt="GitHub" title="GitHub" className="GitHub"/> GitHub
                    </a>
                    <a href="#" target="_blank" className="linkLinkedin">
                        <img src={LinkedinBanner} alt="Linkedin" title="Linkedin" className="Linkedin"/> Linkedin
                    </a>
                </div>
            </div>

            <div className="boxImgBanner">
                <img src={ImagemBanner} alt="Imagem para Apresentação Profissional!" title="Imagem para Apresentação Profissional!" className="imgBanner"/>
            </div>
        </div>
    </section>
)

export default BannerPage;