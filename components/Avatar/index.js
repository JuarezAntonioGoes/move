import React from "react";
import { ContextoCiclo } from "../../contexts/CicloContext";
import {
  Container,
  ContainerAvatar,
  ContainerDesafio,
  FotoPerfil,
  InfoUser,
} from "./style";

const Avatar = () => {
  const { challengeCompleted, level } = React.useContext(ContextoCiclo);

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
            <span>Level {level}</span>
          </p>
        </InfoUser>
      </ContainerAvatar>

      <ContainerDesafio>
        <span>Desafios completos</span>
        <span>{challengeCompleted.toString().padStart(2, "0")}</span>
      </ContainerDesafio>
    </Container>
  );
};

export default Avatar;
