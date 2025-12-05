import * as yup from 'yup';

export const Validar = yup.object().shape({
    nome: yup.string().required('*Preencher o campo obrigatório NOME!*'),
    email: yup.string().required('*Preencher o campo obrigatório E-MAIL!*'),
    ass: yup.string().required('*Preencher o campo obrigatório ASSUNTO!*'),
    msg: yup.string().required('*Preencher o campo obrigatório MENSAGEM!*'),
})