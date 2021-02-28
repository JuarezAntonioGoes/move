import Avatar from "../components/Avatar";
import BarraProgress from "../components/BarraProgress";
import ButtonCiclo from "../components/ButtonCiclo";
import Contador from "../components/Contador";

export default function Home({ allPostsData }) {
  return (
    <>
      <BarraProgress />
      <Avatar />
      <Contador />
      <ButtonCiclo>Iniciar um ciclo</ButtonCiclo>
    </>
  );
}
