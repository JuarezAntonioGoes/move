import React from "react";
import Button from "./style";

// import ico from "../../public/images/ico-start.svg";

const ButtonCiclo = ({ children, onClick, timeActive, ...args }) => {
  return (
    <Button onClick={onClick} timeActive={timeActive} {...args}>
      {children}
    </Button>
  );
};

export default ButtonCiclo;
