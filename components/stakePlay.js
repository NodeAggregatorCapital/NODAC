import React, { Component } from "react";
import { Grid, Button, Form, Message, Image } from "semantic-ui-react";
import TypeAnimation from "react-type-animation";
import web3 from "../Blockchain/web3";
import flip from "../Blockchain/flip";

class StakePlay extends Component {
  state = {
    stakeAmount: "",
    stakeMessage: !!process.env.tagline
      ? process.env.tagline
      : "Waiting user selection...",
    errorMsg: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //prevents default action

    try {
      if (this.state.stakeAmount == "") {
        this.setState({
          errorMsg: "Please enter a minimum amount",
        });
        throw { message: "Please enter a minimum amount" };
      } else if (this.state.stakeAmount < this.props.minStake) {
        this.setState({
          errorMsg: "Min Amount is " + this.props.minStake,
        });
        throw { message: "Min Amount is " + this.props.minStake };
      } else if (this.state.stakeAmount > this.props.maxStake) {
        this.setState({
          errorMsg: "Max Amount is " + this.props.maxStake,
        });
        throw { message: "Max Amount is " + this.props.maxStake };
      }
      this.setState({ loading: true });
      //If any error messages are on screen, reset them before attempting next change.
      if (this.state.errorMsg != "") this.setState({ errorMsg: "" });

      const accounts = await web3.eth.getAccounts(); //retrieve user accounts

      await flip.methods.stakeAVAX().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.stakeAmount, "ether"),
      }); //stake users wage to the contract using their FIRST account
    } catch (err) {
      this.setState({ errorMsg: err.message }); //Capture the error event and display it to user
    } finally {
      this.setState({ loading: false });
    }
  };

  onChange = async (event) => {
    this.setState({ stakeAmount: event.target.value });
    if (this.state.errorMsg != "") this.setState({ errorMsg: "" }); //If any error messages are on screen, reset them before attempting next change.
  };

  renderStreak(streak) {
    const myStreakImg = !!process.env.fireImg
      ? process.env.fireImg
      : "streakfire.gif";

    if (streak == 1)
      return (
        <Image
          src={`./images/${myStreakImg}`}
          size="mini"
          style={{ left: "45%" }}
        />
      );
    else if (streak == 2)
      return (
        <Image
          src={`./images/${myStreakImg}`}
          size="tiny"
          style={{ left: "30%" }}
        />
      );
    else if (streak > 0 && streak < 10)
      return (
        <Image
          src={`./images/${myStreakImg}`}
          size="small"
          style={{ left: "20%" }}
        />
      );
    else if (streak >= 10)
      return (
        <Image
          src={`./images/${myStreakImg}`}
          size="medium"
          style={{ left: "15%" }}
        />
      );
    else return "";
  }

  render() {
    const { minStake, maxStake, streak } = this.props;
    const minPlaceholder = "Min Amount: " + minStake + " AVAX";
    const amount = !!process.env.amountTxt ? process.env.amountTxt : "Amount";
    const stakeHeadsMsg = !!process.env.heads
      ? process.env.heads
      : "You're staking HEADS!!!";
    const stakeTailsMsg = !!process.env.tails
      ? process.env.tails
      : "You're staking TAILS!!!";

    return (
      <Grid className="GridContainer" centered>
        <Grid.Row
          columns={7}
          verticalAlign="bottom"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <Grid.Column
            style={{
              textAlign: "center",
              fontWeight: this.state.buttonHeads ? "bold" : "normal",
              color: this.state.buttonHeads ? "var(--light-color)" : "",
              textDecoration: this.state.buttonHeads ? "overline" : "none",
            }}
          >
            <Image
              src="./images/coin_heads.svg"
              size="tiny"
              centered
              className={this.state.buttonHeads ? "selectedCoin" : "coin"}
              onClick={() => {
                this.setState({
                  buttonTails: false,
                  buttonHeads: true,
                  stakeMessage: stakeHeadsMsg,
                });
              }}
            />
            Pick Heads
          </Grid.Column>
          <Grid.Column
            style={{
              position: "relative",
              textAlign: "center",
              color: "red",
            }}
          >
            {this.renderStreak(streak)}
            <div
              style={{
                position: "absolute",
                top: "50%",
                fontSize: "34px",
                fontWeight: "bold",
                WebkitTextStroke: "1px black",
                width: "100%",
                textAlign: "center",
              }}
            >
              {streak > 0 ? streak : ""}
            </div>
            <div
              style={{
                position: "absolute",
                top: "100%",
                width: "100%",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {streak > 0 ? "Your streak" : ""}
            </div>
          </Grid.Column>
          <Grid.Column
            style={{
              textAlign: "center",
              fontWeight: this.state.buttonTails ? "bold" : "normal",
              color: this.state.buttonTails ? "var(--light-color)" : "",
              textDecoration: this.state.buttonTails ? "overline" : "none",
            }}
          >
            <Image
              src="./images/coin_tails.svg"
              size="tiny"
              className={this.state.buttonTails ? "selectedCoin" : "coin"}
              centered
              onClick={() => {
                this.setState({
                  buttonTails: true,
                  buttonHeads: false,
                  stakeMessage: stakeTailsMsg,
                });
              }}
            />
            Pick Tails
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column className="stakeMsgContainer">
            <TypeAnimation
              cursor={true}
              sequence={[this.state.stakeMessage, 2000]}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Form onSubmit={this.onSubmit} error={this.state.errorMsg != ""}>
              <Form.Field>
                <label
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "var(--dark-color)",
                  }}
                >
                  {amount}
                </label>
                <input
                  placeholder={minPlaceholder}
                  value={this.state.stakeAmount}
                  onChange={this.onChange}
                  className="stakeAmountInput"
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMsg} />
              <button className="stakeBtn" type="submit">
                {process.env.stakeBtn ? process.env.stakeBtn : "I feel Lucky!"}
              </button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default StakePlay;
