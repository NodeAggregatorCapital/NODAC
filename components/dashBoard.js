import React, { Component, useState } from "react";
import { Image, Table, Grid, Icon } from "semantic-ui-react";
import flip from "../Blockchain/flip";
import web3 from "../Blockchain/web3";
import Layout from "../components/layout";
import ResultRow from "../components/resultRow";
import StakePlay from "../components/stakePlay";

const deployedAddress = process.env.contractAddress
  ? process.env.contractAddress
  : "0xAbaf7922103BeDdbB825728B4106391AA66e3144";

const coinImgFileName = !!process.env.coinImg
  ? process.env.coinImg
  : "coin_spin_bg.gif";

const CoinImg = `/images/${coinImgFileName}`; //Spinning coin

const tokenAddress = process.env.tokenAddress
  ? process.env.tokenAddress
  : "0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8"; //BTCB Address

// The minimum ABI to get ERC20 Token balance
const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    type: "function",
  },
];

class DashBoard extends Component {
  state = {
    userStakes: "",
    currentAccount: "Click to Connect",
    balanceAccount: "",
    filterMine: false,
  };

  //Retrieves the STAKE ID from a specific STAKE object
  onResponse = async (stake) => {
    try {
      const stakeid = stake.target.getAttribute("stakeid");
      await flip.methods
        .withdrawStake(stakeid)
        .send({ from: this.state.currentAccount });
    } catch (e) {
      console.log("Withdraw Err: ", e);
    }
  };

  //Renders all the STAKING DETAILS of each stake diplsayed from the contract
  renderStakes(currentAccount) {
    try {
      const limitResults = !this.state.filterMine
        ? !!process.env.limitResults
          ? process.env.limitResults
          : 10
        : this.state.stakes.length;

      return this.state.stakes.slice(0, limitResults).map((stake, index) => {
        if (
          stake._staker == this.state.currentAccount ||
          !this.state.filterMine
        ) {
          return (
            <ResultRow
              onResponse={this.onResponse}
              key={index}
              id={index}
              stake={stake}
              filter={currentAccount}
            />
          );
        }
      });
    } catch (e) {
      return (
        <Table.Row>
          <Table.Cell></Table.Cell>
        </Table.Row>
      );
    }
  }

  async componentDidMount() {
    try {
      const tokenContract = new web3.eth.Contract(minABI, tokenAddress);

      const balance = await web3.utils.fromWei(
        await web3.eth.getBalance(deployedAddress),
        "ether"
      );

      let balanceToken;
      try {
        balanceToken = await web3.utils.fromWei(
          await tokenContract.methods.balanceOf(deployedAddress).call(),
          "ether"
        );
      } catch (e) {
        balanceToken = "0";
      }

      const oracleFee = await web3.utils.fromWei(
        await flip.methods.oraclefee().call(),
        "ether"
      );
      const stakeCount = await flip.methods.StakeCount().call();
      const deterCount = await flip.methods.DeterminationCount().call();
      const minStake = await web3.utils.fromWei(
        await flip.methods.avaxmin().call(),
        "ether"
      );
      const maxStake = await web3.utils.fromWei(
        await flip.methods.avaxmax().call(),
        "ether"
      );

      const minStakeToken = await web3.utils.fromWei(
        await flip.methods.min().call(),
        "ether"
      );
      const maxStakeToken = await web3.utils.fromWei(
        await flip.methods.max().call(),
        "ether"
      );

      const stakes = await Promise.all(
        Array(parseInt(stakeCount))
          .fill()
          .map((element, index) => {
            return flip.methods.Stakes(index + 1).call();
          })
      );

      const determinations = await Promise.all(
        Array(parseInt(deterCount))
          .fill()
          .map((element, index) => {
            return flip.methods.Determinations(index + 1).call();
          })
      );

      const accounts = await web3.eth.getAccounts();
      const currentAccount = accounts[0];

      let balanceAccountToken;
      try {
        balanceAccountToken = await web3.utils.fromWei(
          await tokenContract.methods.balanceOf(currentAccount).call(),
          "ether"
        );
      } catch (e) {
        balanceAccountToken = "0";
      }

      const balanceAccount = await web3.utils.fromWei(
        await web3.eth.getBalance(currentAccount),
        "ether"
      );

      const userStakes = "";

      const streak = await flip.methods.Streak(currentAccount).call();

      this.setState({
        currentAccount: accounts[0],
        balanceAccount,
        balanceAccountToken,
        userStakes,
        balance,
        balanceToken,
        oracleFee,
        stakeCount,
        stakes,
        deterCount,
        determinations,
        minStake,
        maxStake,
        minStakeToken,
        maxStakeToken,
        streak,
      });
    } catch (e) {
      console.log("Caught", e.message);
    }
  }

  handleFilter = async () => {
    this.setState({ filterMine: !this.state.filterMine });
  };

  render() {
    const { Header, Row, Cell, HeaderCell, Body } = Table;

    const filterTxt = this.state.filterMine
      ? !!process.env.myFilterIconTxt
        ? process.env.myFilterIconTxt
        : "Showing yours"
      : !!process.env.allFilterIconTxt
      ? process.env.allFilterIconTxt
      : "Showing all";

    return (
      <Layout
        balance={this.state.balanceAccount}
        balanceToken={this.state.balanceAccountToken}
        currentAccount={this.state.currentAccount}
      >
        <StakePlay
          oracleFee={this.state.oracleFee}
          balance={this.state.balanceAccount}
          balanceToken={this.state.balanceAccountToken}
          minStake={this.state.minStake}
          maxStake={this.state.maxStake}
          minStakeToken={this.state.minStakeToken}
          maxStakeToken={this.state.maxStakeToken}
          streak={this.state.streak}
        />
        <Grid textAlign="center" style={{ marginTop: "40px" }}>
          <Grid.Row columns={5}>
            <Grid.Column>
              Stakes:
              <br />
              {this.state.stakeCount}
            </Grid.Column>
            <Grid.Column>
              Balance AVAX:
              <br />
              {this.state.balance}
            </Grid.Column>
            <Grid.Column>
              Balance NODAC:
              <br />
              {this.state.balanceToken}
            </Grid.Column>
            <Grid.Column>
              Oracle Fee:
              <br />
              {this.state.oracleFee}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Table className="tableResultRows">
          <Header>
            <Row className="tableCellHeader">
              <HeaderCell className="tableCellHeader">ID</HeaderCell>
              <HeaderCell className="tableCellHeader">Address</HeaderCell>
              <HeaderCell className="tableCellHeader">Time</HeaderCell>
              <HeaderCell className="tableCellHeader">AVAX Amount</HeaderCell>
              <HeaderCell className="tableCellHeader">Token Amount</HeaderCell>
              <HeaderCell className="tableCellHeader">Result</HeaderCell>
              <HeaderCell className="tableCellHeader">Settled</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderStakes(this.state.currentAccount)}
            <Row>
              <Cell colSpan="7" style={{ textAlign: "center" }}>
                <Icon
                  name="chart area"
                  onClick={this.handleFilter}
                  style={{
                    cursor: "pointer",
                    color: this.state.filterMine
                      ? "var(--light-color)"
                      : "var(--dark-color)",
                  }}
                  size="big"
                />
                {filterTxt}
              </Cell>
            </Row>
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default DashBoard;
