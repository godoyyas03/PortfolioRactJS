import React from "react";

import { useForm } from "react-hook-form";

// import { YupResolver } from '@hookform/YupResolver';
import { yupResolver } from '@hookform/resolvers/yup';

import { Validar } from '../js/validar';

import '../css/style.css';

import IconContactEmail from '../images/icones/iconsEmail.png';
import IconContactTelefone from '../images/icones/iconsTelefone.png';
import IconContactWhatsApp from '../images/icones/iconsWhatsapp.png';
import IconContactLocal from '../images/icones/iconsLocalizacao.png';
import { type } from "@testing-library/user-event/dist/type";

const Contato = () => {

    //estruturado os elementos do formulario html - variaveiss para o campo imput!
    const Input = ({ label, id, name, type, register, error }) => {
        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <input className="campForm" id={id} name={name} type={type} placeholder="Digite os dados aqui..." {...register(name)} />
            </span>
        )
    }

    const Textarea = ({ label, id, name, register, error }) => {

        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <textarea className="campFormMsg" id={id} name={name} placeholder="Digite os dados aqui..." {...register(name)}></textarea>
            </span>
        )
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className="titleContact">Contato</h1>
                <div className="boxContact">
                    <div className="infoContact">
                        <p>
                            Tire todas as suas dúvidas sobre os nossos serviços ou realize um orçamento.
                        </p>
                        <p>
                            Esses são nossos principais meios de contato:
                        </p>
                        <div>
                            <ul className="ulContact">
                                <li className="listCt">
                                    <img src={IconContactEmail} alt="" title="" className="iconCtc" />
                                    <span>contato@tecnologia.com.br</span>
                                </li>
                                <li className="listCt">
                                    <img src={IconContactTelefone} alt="" title="" className="iconCtc" />
                                    <span>(00) 0000-0000</span>
                                </li>
                                <li className="listCt">
                                    <img src={IconContactWhatsApp} alt="" title="" className="iconCtc" />
                                    <div className="boxWtpp">
                                        <span><a href="https://wa.me/5543991427254" target="_blank" className="linkWtpp">(00) 00000-0000</a></span>
                                        <span className="infoWtpp">Clique no número!</span>
                                    </div>
                                </li>
                                <li className="listCt">
                                    <img src={IconContactLocal} alt="" title="" className="iconCtc" />
                                    <span>Avenida Teste, nº100, CEP: 00000000 Londrina - PR.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="formContact">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Digite seu Nome:</label>
                            <Input type="text" name="nome" id="nome" register={register} error={errors.nome} />

                            <label>Digite seu Email:</label>
                            <Input type="email" name="email" id="email" register={register} error={errors.email} />

                            <label>Digite seu Assunto:</label>
                            <Input type="text" name="ass" id="ass" register={register} error={errors.ass} />

                            <label>Digite sua Mensagem:</label>
                            <Textarea name="msg" id="msg" register={register} error={errors.msg} />

                            <div className="alignBnt">
                                <button type="submit" className="bntForm" name="bntEnviar">enviar</button>
                                <button type="reset" className="bntFormReset" name="bntReset" onClick={() => reset()}>reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8973483269165!2d-51.178923025030166!3d-23.319482952749873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4313ff0ee975%3A0x1c33d6cf3ae5b478!2sWMBarros%20Treinamento%20em%20TI%20Cursos%20de%20Programa%C3%A7%C3%A3o%2C%20Front-end%2C%20Cria%C3%A7%C3%B5es%20de%20Sites%3A%20TUDO%20NA%20PR%C3%81TICA%20-%20PRESENCIAL%20E%20REMOTO!5e0!3m2!1spt-BR!2sbr!4v1758858979553!5m2!1spt-BR!2sbr" width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map-page" />
            </div>
        </section>
    )

}

export default Contato;