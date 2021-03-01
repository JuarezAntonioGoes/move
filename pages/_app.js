import CicloProvider from "../contexts/CicloContext";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CicloProvider>
        <Component {...pageProps} />
      </CicloProvider>
    </>
  );
}
