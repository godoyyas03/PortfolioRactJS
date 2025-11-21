import React from "react";
import LayoutSite from '../images/layoutSite.jpeg';
import IconGithub from '../images/icones/icons-github-250.svg';

const Projetos = () => (
    <section className="projects" id="portfolio">
        <div className="wrap">
            <h1 className="titleProjects">Portfólio (Projetos)!</h1>
            <h2 className="textProjects">Estes são alguns dos principais Projetos Web desenvolvidos, utilizando recursos de Front-End.</h2>

            <div className="gridProjects">
                
                <div className="cardProjects">
                    <img src={LayoutSite} alt="Projeto Web" title="Projeto Web" className="imgCard"/>
                    <h3 className="titleCard">Projeto Web - front-end</h3>
                    <span className="infoProjects">Projeto Corporativo - Site Institucional.</span>
                    <a href="#" target="blank" className="repGitHub">
                        <img src={IconGithub} alt="GitHub" title="GitHub" className="imgGitHub"/> Repositório GitHub
                    </a>
                </div>

                <div className="cardProjects">
                    <img src={LayoutSite} alt="Projeto Web" title="Projeto Web" className="imgCard"/>
                    <h3 className="titleCard">Projeto Web - front-end</h3>
                    <span className="infoProjects">Projeto Corporativo - Site Institucional.</span>
                    <a href="#" target="blank" className="repGitHub">
                        <img src={IconGithub} alt="GitHub" title="GitHub" className="imgGitHub"/> Repositório GitHub
                    </a>
                </div>

                <div className="cardProjects">
                    <img src={LayoutSite} alt="Projeto Web" title="Projeto Web" className="imgCard"/>
                    <h3 className="titleCard">Projeto Web - front-end</h3>
                    <span className="infoProjects">Projeto Corporativo - Site Institucional.</span>
                    <a href="#" target="blank" className="repGitHub">
                        <img src={IconGithub} alt="GitHub" title="GitHub" className="imgGitHub"/> Repositório GitHub
                    </a>
                </div>

                <div className="cardProjects">
                    <img src={LayoutSite} alt="Projeto Web" title="Projeto Web" className="imgCard"/>
                    <h3 className="titleCard">Projeto Web - front-end</h3>
                    <span className="infoProjects">Projeto Corporativo - Site Institucional.</span>
                    <a href="#" target="blank" className="repGitHub">
                        <img src={IconGithub} alt="GitHub" title="GitHub" className="imgGitHub"/> Repositório GitHub
                    </a>
                </div>
            </div>


        </div>
    </section>
)

export default Projetos;