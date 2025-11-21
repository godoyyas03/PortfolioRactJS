import React, {useState} from "react";
import LogotipoHeader from '../images/logotipoJP.png'; 

const MenuMobile = () => {
    // gerenciar o estado/comportamento do menu mobile, no caso, em estado de desativado.

    const [classOn, setClassOn] = useState(false);

    return (
        <header>
            <section className="container">
                <div className="logotipo">
                    <img src={LogotipoHeader} alt="Logotipo JP Portfólio!" title="Logotipo JP Portfólio!" className="imgLogotipo"/>
                </div>

{/* classOn junto com o onclick vai manipular a ação de ativar e desativar o menu mobile de acordo o clique do usuario! */}
                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-item"><a href="">home</a></li>
                            <li className="nav-item"><a href="#about">quem sou</a></li>
                            <li className="nav-item"><a href="#portfolio">portfólio</a></li>
                            <li className="nav-item"><a href="#contact">contato</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )

}

export default MenuMobile;