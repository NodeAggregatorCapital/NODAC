/*********************************************
 * TO RUN:    > node compile
 *
 * Checks for the "build" directory.
 * Deletes it if it and everything inside if it exists
 * Compiles the MaticStake.sol contract
 * Creates "build" directory
 * Creates ABI of each class from contract
 */
const path = require("path");
const fse = require("fs-extra");
const solc = require("solc");

const buildPath = path.resolve(__dirname, "build"); //retrieve build directory
fse.removeSync(buildPath); //delete build directory and all files within

const contractPath = path.resolve(__dirname, "contracts", "MaticStaker.sol"); //locate the contract(s)
const source = fse.readFileSync(contractPath, "utf8"); //read the contract(s)

const input = {
  language: "Solidity",
  sources: {
    contractFile: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

//compile the contracts and capture the output
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts
  .contractFile;

fse.ensureDirSync(buildPath); //confirm the build directory exsits, if not create it

//cycle through the contract(s)
for (let contract in output) {
  fse.outputJSONSync(
    path.resolve(buildPath, `${contract}.json`),
    output[contract]
  ); //write files of contract(s) in JSON format
}
