import { MdEmail, MdLock } from 'react-icons/md';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from '../../services/api';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async FormData => {
        try {
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`);
            if(data.length === 1){
                navigate('/feed');

            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
            
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                        <br />
                        O seu futuro global agora!
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                              placeholder="Senha" 
                              type="password"
                              leftIcon={<MdLock />} 
                            />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Login };
