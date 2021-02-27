import React from "react";
import { Barra, ConstainerBarra, Progress } from "./style";

const BarraProgress = () => {
  return (
    <ConstainerBarra>
      <span>0 xp</span>
      <Barra>
        <Progress>
          <div>600px</div>
        </Progress>
      </Barra>
      <span>600 xp</span>
    </ConstainerBarra>
  );
};

export default BarraProgress;
