import React from "react";
import {
  Container,
  ContainerAvatar,
  ContainerDesafio,
  FotoPerfil,
  InfoUser,
} from "./style";

const Avatar = () => {
  return (
    <Container>
      <ContainerAvatar>
        <FotoPerfil
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XA6DnYLdTIDG9RiZoCFFeVwa9z-Dq-dG2Q&usqp=CAU"
          alt="foto de perfil"
        />
        <InfoUser>
          <h1>Juarez Goes</h1>
          <p>
            <img src="./images/new.svg" alt="seta para cima" />
            <span>Level 1</span>
          </p>
        </InfoUser>
      </ContainerAvatar>

      <ContainerDesafio>
        <span>Desafios completos</span>
        <span>00</span>
      </ContainerDesafio>
    </Container>
  );
};

export default Avatar;
