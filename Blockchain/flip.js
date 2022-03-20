import web3 from "./web3";
import Flip from "./build/Flip.json";

const deployedAddress = process.env.contractAddress
  ? process.env.contractAddress
  : "0xAbaf7922103BeDdbB825728B4106391AA66e3144";

let instance;
try {
  instance = new web3.eth.Contract(Flip.abi, deployedAddress);
} catch (err) {
  console.log("Caught: ", err.message);
  instance = "";
}
export default instance;
