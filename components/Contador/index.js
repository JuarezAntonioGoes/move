import React, { useRef } from "react";
import ButtonCiclo from "../ButtonCiclo";
import { ConstainerContador } from "./style";

const Contador = () => {
  const [time, setTime] = React.useState(0.1 * 60);
  const [timeActive, setTimeActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  let contadorTimeOut;

  const [minutosLeft, minutosRight] = Math.floor(time / 60)
    .toString()
    .padStart(2, "0")
    .split("");

  const [segundosLeft, segundosRight] = Math.floor(time % 60)
    .toString()
    .padStart(2, "0")
    .split("");

  const handleStart = () => {
    setTimeActive(true);
  };

  const handleEnd = () => {
    setTimeActive(false);
    clearTimeout(contadorTimeOut);
    setTime(0.1 * 60);
  };

  React.useEffect(() => {
    if (timeActive && time > 0) {
      contadorTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (timeActive && time === 0) {
      setHasFinished(true);
    }
  }, [timeActive, time]);

  return (
    <>
      <ConstainerContador>
        <div>
          <span>{minutosLeft}</span>
          <span>{minutosRight}</span>
        </div>
        :
        <div>
          <span>{segundosLeft}</span>
          <span>{segundosRight}</span>
        </div>
      </ConstainerContador>
      {hasFinished ? (
        <ButtonCiclo disabled>
          Ciclo encerrado
          <img src="./images/finished.svg" />
        </ButtonCiclo>
      ) : (
        <>
          {timeActive ? (
            <ButtonCiclo onClick={handleEnd} timeActive={timeActive}>
              Abandonar ciclo
              <img src="./images/cancel.svg" />
            </ButtonCiclo>
          ) : (
            <ButtonCiclo onClick={handleStart} timeActive={timeActive}>
              Iniciar um ciclo
              <img src="./images/play.svg" />
            </ButtonCiclo>
          )}
        </>
      )}
    </>
  );
};

export default Contador;
