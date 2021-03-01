import React from "react";
import { ContextoCiclo } from "../../contexts/CicloContext";
import { Barra, ConstainerBarra, Progress } from "./style";

const BarraProgress = () => {
  const barraRef = React.useRef();

  const { experienceToNextChallenge, experienceCurrent } = React.useContext(
    ContextoCiclo
  );

  const largura = Math.floor(
    (experienceCurrent * 100) / experienceToNextChallenge
  );

  React.useEffect(() => {
    barraRef.current.style.width = `${largura}%`;
  }, [barraRef, largura]);

  return (
    <ConstainerBarra>
      <span>0 xp</span>
      <Barra>
        <Progress ref={barraRef}>
          <div>{experienceCurrent} xp</div>
        </Progress>
      </Barra>
      <span>{experienceToNextChallenge} xp</span>
    </ConstainerBarra>
  );
};

export default BarraProgress;
