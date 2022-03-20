import React, { Component, useState } from "react";
import { Image, Table, Grid, Icon } from "semantic-ui-react";
import flip from "../Blockchain/flip";
import web3 from "../Blockchain/web3";
import Layout from "../components/layout";
import ResultRow from "../components/resultRow";
import StakePlay from "../components/stakePlay";

const coinImgFileName = !!process.env.coinImg
  ? process.env.coinImg
  : "coin_spin_bg.gif";
const CoinImg = `/images/${coinImgFileName}`;

class DashBoard extends Component {
  state = {
    userStakes: "",
    currentAccount: "Click to Connect",
    balanceAccount: "",
    filterMine: false,
  };

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
      const balance = await web3.utils.fromWei(
        await web3.eth.getBalance("0xAbaf7922103BeDdbB825728B4106391AA66e3144"),
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
      const balanceAccount = await web3.utils.fromWei(
        await web3.eth.getBalance(currentAccount),
        "ether"
      );
      const userStakes = "";

      const streak = await flip.methods.Streak(currentAccount).call();

      this.setState({
        currentAccount: accounts[0],
        balanceAccount,
        userStakes,
        balance,
        stakeCount,
        stakes,
        deterCount,
        determinations,
        minStake,
        maxStake,
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
        currentAccount={this.state.currentAccount}
      >
        <StakePlay
          minStake={this.state.minStake}
          maxStake={this.state.maxStake}
          streak={this.state.streak}
        />
        <Grid textAlign="center" style={{ marginTop: "40px" }}>
          <Grid.Row columns={5}>
            <Grid.Column>Stakes: {this.state.stakeCount}</Grid.Column>
            <Grid.Column>Contract Balance: {this.state.balance}</Grid.Column>
            <Grid.Column>Determinations: {this.state.deterCount}</Grid.Column>
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
