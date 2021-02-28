import React from "react";
import { ContainerAvatar, FotoPerfil, InfoUser } from "./style";

const Avatar = () => {
  return (
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
  );
};

export default Avatar;
