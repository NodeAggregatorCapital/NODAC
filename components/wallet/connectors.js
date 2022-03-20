import { InjectedConnector } from "@web3-react/injected-connector";

/************************
 * INJECTED CONNECTOR INTERFACE
 *
 * Connects to wallets like MetaMask
 */
export const injected = new InjectedConnector({
  supportedNetworks: [1, 3, 4, 5, 42],
});
