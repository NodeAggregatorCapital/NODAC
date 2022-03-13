import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import MetamaskProvider from "../components/wallet/metaMaskProvider";

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <Component {...pageProps} />
      </MetamaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
