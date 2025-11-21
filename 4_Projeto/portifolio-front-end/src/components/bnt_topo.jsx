import React from "react";
import ImgTopo from '../images/btnNavInicio.png';


const BntTopo = () => (
    <div className="bntNav">
        <a href="#top">
            <img src={ImgTopo} alt="Voltar para o  Início" title="Voltar para o  Início" className="bntNavTopo"/>
        </a>
    </div>
)

export default BntTopo;