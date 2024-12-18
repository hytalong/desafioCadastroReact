import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from '../../services/api';

import { Button } from "../../components/Button";





import { Header } from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleCadastro, Title, TitleCadastro, Wrapper } from './styles';
import { Input } from '../../components/Input';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

    const schema = yup.object({
        nome: yup.string().min(10, 'No mínimo 10 caracteres').required('Campo obrigatório'),
        email: yup.string().email('Email não é válido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    }).required();

    const Cadastro = () =>  {
            const navigate = useNavigate();

            const { control, handleSubmit, formState: { errors } } = useForm({
                    resolver: yupResolver(schema),
                    mode: 'onChange',
                });
    

  return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubTitleCadastro>Crie a sua conta e make the change</SubTitleCadastro>
                <form handleSubmit>
                    <Input 
                        name="nome"
                        errorMessage={errors?.nome?.message}
                        control={control}
                        placeholder="Nome"
                        leftIcon={<MdPerson />}
                    />
                    <Input
                        name="email"
                        errorMessage={errors?.email?.message}
                        control={control}
                        placeholder="E-mail"
                        leftIcon={<MdEmail />}
                    />
                    <Input
                        name="password"
                        errorMessage={errors?.password?.message}
                        control={control}
                        placeholder="password"
                        leftIcon={<MdLock />}
                    />
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <Row>
                    <SubTitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleCadastro>
                </Row>
                <Row>
                    <b>Já tenho conta.</b>
                   <CriarText>Fazer login</CriarText>
                </Row>
            </Wrapper>
        </Column>

    </Container>

    </>
  )
}


export { Cadastro };