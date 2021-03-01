import React from "react";
import { ContextoCiclo } from "../../contexts/CicloContext";
import {
  CicloContainer,
  Main,
  MainResult,
  ContainerIntro,
  Button,
} from "./style";

import action from "../../action-ciclo.json";

const CardCiclo = () => {
  const {
    hasFinished,
    challengeCompleted,
    setChallengeCompleted,
    updateExperience,
    handleResetContador,
    handleNotify,
  } = React.useContext(ContextoCiclo);

  const actionIndex = Math.floor(Math.random() * action.length);
  const actionSelected = action[actionIndex];

  const handleFalhei = () => {
    handleResetContador();
  };

  const handleCompletei = (experienceConquisted) => {
    handleResetContador();
    setChallengeCompleted(challengeCompleted + 1);
    updateExperience(experienceConquisted);
  };

  React.useEffect(() => {
    if (hasFinished && hasFinished) {
      handleNotify(actionSelected.amount);
    }
  }, [hasFinished, hasFinished]);

  return (
    <CicloContainer>
      {hasFinished && hasFinished ? (
        <ContainerIntro>
          <MainResult>
            <header>
              <h2>Ganhe {actionSelected.amount} xp</h2>
            </header>

            <img
              src={`./images/${actionSelected.type}.svg`}
              alt="seta para cima"
            />

            <h1>Exercite-se</h1>

            <div>
              <p>{actionSelected.description}.</p>
            </div>
          </MainResult>
          <footer>
            <Button onClick={handleFalhei} isCancel={true}>
              Falhei
            </Button>
            <Button
              onClick={() => handleCompletei(actionSelected.amount)}
              isCancel={false}
            >
              Completei
            </Button>
          </footer>
        </ContainerIntro>
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
