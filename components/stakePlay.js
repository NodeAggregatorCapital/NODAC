import React, { Component } from "react";
import {
  Grid,
  Button,
  Form,
  Message,
  Image,
  Checkbox,
} from "semantic-ui-react";
import TypeAnimation from "react-type-animation";
import web3 from "../Blockchain/web3";
import flip from "../Blockchain/flip";

const deployedAddress = process.env.contractAddress
  ? process.env.contractAddress
  : "0xAbaf7922103BeDdbB825728B4106391AA66e3144";

const tokenAddress = process.env.tokenAddress
  ? process.env.tokenAddress
  : "0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8"; //BTCB Address

const minABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_value", type: "uint256" }],
    name: "burn",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_value", type: "uint256" }],
    name: "unfreeze",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "freezeOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_value", type: "uint256" }],
    name: "freeze",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { payable: false, stateMutability: "nonpayable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Freeze",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Unfreeze",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
];

class StakePlay extends Component {
  state = {
    minPlaceholderTxt:
      "Min Amount: " +
      (!!this.props.minStakeToken ? this.props.minStakeToken : "--") +
      " NODAC",
    stakeAmount: "",
    stakeMessage: !!process.env.tagline
      ? process.env.tagline
      : "Waiting user selection...",
    errorMsg: "",
    approved: false,
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault(); //prevents default action

    const tokenName = this.state.minPlaceholderTxt.split(" ").pop();

    try {
      if (parseFloat(this.state.stakeAmount) == "") {
        this.setState({
          errorMsg: "Please enter a minimum amount",
        });
        throw { message: "Please enter a minimum amount" };
      } else if (
        parseFloat(this.state.stakeAmount) <
        (tokenName === "NODAC" ? this.props.minStakeToken : this.props.minStake)
      ) {
        this.setState({
          errorMsg:
            "Min Amount is " +
            (tokenName === "NODAC"
              ? this.props.minStakeToken
              : this.props.minStake),
        });
        throw {
          message:
            "Min Amount is " +
            (tokenName === "NODAC"
              ? this.props.minStakeToken
              : this.props.minStake),
        };
      } else if (
        parseFloat(this.state.stakeAmount) >
        (tokenName === "NODAC" ? this.props.maxStakeToken : this.props.maxStake)
      ) {
        this.setState({
          errorMsg:
            "Max Amount is " +
            (tokenName === "NODAC"
              ? this.props.maxStakeToken
              : this.props.maxStake),
        });
        throw {
          message:
            "Max Amount is " +
            (tokenName === "NODAC"
              ? this.props.maxStakeToken
              : this.props.maxStake),
        };
      } else if (
        parseFloat(this.state.stakeAmount) >
        (tokenName === "NODAC" ? this.props.balanceToken : this.props.balance)
      ) {
        this.setState({
          errorMsg:
            "Cannot exceed your max balance of " +
            (tokenName === "NODAC"
              ? this.props.balanceToken
              : this.props.balance),
        });
        throw {
          message:
            "Cannot exceed your max balance of " +
            (tokenName === "NODAC"
              ? this.props.balanceToken
              : this.props.balance),
        };
      }
      this.setState({ loading: true });
      //If any error messages are on screen, reset them before attempting next change.
      if (this.state.errorMsg != "") this.setState({ errorMsg: "" });

      const accounts = await web3.eth.getAccounts(); //retrieve user accounts

      if (tokenName === "NODAC") {
        const tokenContract = await new web3.eth.Contract(minABI, tokenAddress);
        if (!this.state.approved) {
          //Approve staking amount first
          await tokenContract.methods
            .approve(
              deployedAddress,
              web3.utils.toWei(this.state.stakeAmount, "ether")
            )
            .send({
              from: accounts[0],
            })
            .then(this.setState({ approved: true }));
        } else {
          //if already approved then stake the approved amount
          await flip.methods
            .stake(web3.utils.toWei(this.state.stakeAmount, "ether"))
            .send({
              from: accounts[0],
              value: web3.utils.toWei(this.props.oracleFee, "ether"),
            }); //stake users wage to the contract using their FIRST account
        }
      } else {
        //AVAX TOKEN
        const totalAmount =
          parseFloat(this.state.stakeAmount) + parseFloat(this.props.oracleFee);
        await flip.methods.stakeAVAX().send({
          from: accounts[0],
          value: web3.utils.toWei(totalAmount.toString(), "ether"),
        }); //stake users wage to the contract using their FIRST account
      }
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

  onChangeToken = async (event, cbox) => {
    if (cbox.checked) {
      //PODAC SELECTED
      this.setState({
        minPlaceholderTxt: "Min Amount: " + this.props.minStakeToken + " NODAC",
      });
    } else {
      //AVAX SELECTED
      this.setState({
        minPlaceholderTxt: "Min Amount: " + this.props.minStake + " AVAX",
      });
    }
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
    const { minStake, maxStake, minStakeToken, maxStakeToken, streak } =
      this.props;
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
                  placeholder={this.state.minPlaceholderTxt}
                  value={this.state.stakeAmount}
                  onChange={this.onChange}
                  className="stakeAmountInput"
                />
              </Form.Field>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  color: "var(--dark-color)",
                  paddingBottom: "20px  ",
                }}
              >
                AVAX
                <Checkbox
                  toggle
                  defaultChecked
                  onChange={this.onChangeToken}
                  style={{ margin: "0 20px 0 20px" }}
                />
                NODAC
              </div>
              <Message error header="Oops!" content={this.state.errorMsg} />
              <button className="stakeBtn" type="submit">
                {process.env.stakeBtn
                  ? this.state.minPlaceholderTxt.split(" ").pop() === "NODAC"
                    ? this.state.approved
                      ? process.env.stakeBtn
                      : "Approve"
                    : process.env.stakeBtn
                  : "Stake"}
              </button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default StakePlay;
