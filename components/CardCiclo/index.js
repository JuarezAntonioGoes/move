import React from "react";
import { ContextoCiclo } from "../../contexts/CicloContext";
import { CicloContainer, Main } from "./style";

const CardCiclo = () => {
  const { hasFinished } = React.useContext(ContextoCiclo);

  return (
    <CicloContainer>
      {hasFinished ? (
        <Main>
          <h1>Terminous</h1>

          <div>
            <img src="./images/seta-cima.svg" alt="seta para cima" />
            <p>Complete-os e ganhe experiência e avance de leve.</p>
          </div>
        </Main>
      ) : (
        <Main>
          <h1>Inicie um ciclo para receber desafios a serem completados</h1>

          <div>
            <img src="./images/seta-cima.svg" alt="seta para cima" />
            <p>Complete-os e ganhe experiência e avance de leve.</p>
          </div>
        </Main>
      )}
    </CicloContainer>
  );
};

export default CardCiclo;
