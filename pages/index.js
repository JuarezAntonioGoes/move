import Avatar from "../components/Avatar";
import BarraProgress from "../components/BarraProgress";
import CardCiclo from "../components/CardCiclo";
import Contador from "../components/Contador";
import { Containerleft, ContainerRight, Main } from "./styleIndex";

export default function Home() {
  return (
    <>
      <BarraProgress />

      <Main>
        <Containerleft>
          <Avatar />
          <Contador />
        </Containerleft>

        <ContainerRight>
          <CardCiclo />
        </ContainerRight>
      </Main>
    </>
  );
}
