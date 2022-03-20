import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import web3 from "../Blockchain/web3";

class ResultRow extends Component {
  state = { errMessage: "", loading: false };

  render() {
    const { Row, Cell } = Table;
    const { id, stake, onResponse, filter } = this.props;

    let resultLabel = "--";
    if (stake._result == 1) resultLabel = "Aped";
    else if (stake._result == 2) resultLabel = "Rekt";

    return (
      <Row
        style={{
          backgroundColor: stake._settled ? "var(--dark-color" : "",
          color: stake._settled ? "white" : "var(--dark-color)",
        }}
      >
        <Cell>{id + 1}</Cell>
        <Cell>{stake._staker.substring(0, 6)}</Cell>
        <Cell>{stake._timestamp}</Cell>
        <Cell>{web3.utils.fromWei(stake._avaxamount, "ether")}</Cell>
        <Cell>{stake._tokenamount}</Cell>
        <Cell style={{ color: stake._result == 1 ? "Green" : "Red" }}>
          {resultLabel}
        </Cell>
        <Cell style={{ textAlign: "center" }}>
          {stake._settled === true ? (
            <Icon name="check" style={{ color: "var(--light-color)" }} />
          ) : stake._staker === filter ? (
            <Icon
              name="shopping cart"
              style={{ cursor: "pointer", color: "var(--light-color)" }}
              onClick={onResponse}
              stakeid={id + 1}
            />
          ) : (
            <Icon
              name="clock"
              style={{ color: "var(--light-color)" }}
              stakeid={id + 1}
            />
          )}
        </Cell>
      </Row>
    );
  }
}

export default ResultRow;
