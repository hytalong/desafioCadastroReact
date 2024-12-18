import { Link } from "react-router-dom";

import  bannerImage  from "../../assets/banner.png";

import { Button } from "../../components/Button";
import {  Header } from "../../components/Header";
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Container, Column, TextContent, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
            <TitleHighlight> # RANKING TOP 5 SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?vx4"/>
            <UserInfo percentual={27} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?vx4"/>
            <UserInfo percentual={89} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?vx4"/>
            <UserInfo percentual={57} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?vx4"/>
            <UserInfo percentual={12} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?vx4"/>
            </Column>
    </Container>
    </>)
}

export { Feed }