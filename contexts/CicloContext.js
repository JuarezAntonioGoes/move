import React, { createContext } from "react";

export const ContextoCiclo = createContext();

const CicloProvider = ({ children }) => {
  const [hasFinished, setHasFinished] = React.useState(false);

  return (
    <ContextoCiclo.Provider value={{ hasFinished, setHasFinished }}>
      {children}
    </ContextoCiclo.Provider>
  );
};

export default CicloProvider;
