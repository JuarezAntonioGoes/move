import React, { createContext } from "react";

export const ContextoCiclo = createContext();

const CicloProvider = ({ children }) => {
  const [hasFinished, setHasFinished] = React.useState(false);
  const [timeActive, setTimeActive] = React.useState(false);
  const [minDefult, setMinDefult] = React.useState(0.1 * 60);
  const [time, setTime] = React.useState(0.1 * 60);
  const [challengeCompleted, setChallengeCompleted] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [experienceCurrent, setExperienceCurrent] = React.useState(0);

  const experienceToNextChallenge = Math.pow((level + 1) * 4, 2);

  React.useEffect(() => {}, []);

  const updateExperience = (experienceConquisted) => {
    console.log(experienceCurrent, experienceConquisted);

    if (experienceConquisted + experienceCurrent > experienceToNextChallenge) {
      setLevel(level + 1);
      setExperienceCurrent(
        experienceConquisted + experienceCurrent - experienceToNextChallenge
      );
    } else {
      setExperienceCurrent(experienceCurrent + experienceConquisted);
    }
  };

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
        experienceToNextChallenge,
        updateExperience,
        experienceCurrent,
      }}
    >
      {children}
    </ContextoCiclo.Provider>
  );
};

export default CicloProvider;
