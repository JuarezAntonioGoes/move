import React, { createContext } from "react";

export const ContextoCiclo = createContext();

const CicloProvider = ({ children }) => {
  const [hasFinished, setHasFinished] = React.useState(false);
  const [timeActive, setTimeActive] = React.useState(false);
  const [minDefult, setMinDefult] = React.useState(0.1 * 60);
  const [time, setTime] = React.useState(0.1 * 60);
  const [challengeCompleted, setChallengeCompleted] = React.useState(0);
  const [level, setLevel] = React.useState(0);

  return (
    <ContextoCiclo.Provider
      value={{
        hasFinished,
        setHasFinished,
        timeActive,
        setTimeActive,
        minDefult,
        time,
        setTime,
        challengeCompleted,
        setChallengeCompleted,
        level,
        setLevel,
      }}
    >
      {children}
    </ContextoCiclo.Provider>
  );
};

export default CicloProvider;
