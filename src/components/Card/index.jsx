import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

import { CardContainer, Content, HasInfo, ImageBackGround, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackGround src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?t=st=1733425840~exp=1733429440~hmac=6b2d83b3cdc9d120c65580200c44ba869e9c1d41ff3c2c0cbc55cfee56296d7d&w=740"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?vx4"/>
                    <div>
                        <h4> Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Glogal avanade...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
    </CardContainer>
  )
}

export { Card }