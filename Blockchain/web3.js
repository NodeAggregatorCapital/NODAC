/********************************************
 * Instantiates and creates a ready to use web3
 * object and tries to connect to contract on
 * page load
 */

import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  try {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
  } catch (err) {
    console.log("Web3: ", err.message);
  }
} else {
  try {
    // We are on the server *OR* the user is not running metamask
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      )
    );
  } catch (err) {
    console.log("Web3*: ", err.message);
  }
}
export default web3;
