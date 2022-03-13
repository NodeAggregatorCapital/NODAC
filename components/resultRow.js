import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import web3 from "../Blockchain/web3";
import flip from "../Blockchain/flip";

class ResultRow extends Component {
  state = { errMessage: "", loading: false };

  render() {
    const { Row, Cell } = Table;
    const { id, stake, onResponse } = this.props;

    let resultLabel = "--";
    if (stake._result == 1) resultLabel = "Aped";
    else if (stake._result == 2) resultLabel = "Rekt";

    return (
      <Row style={{ backgroundColor: stake._settled ? "#ffc1cc" : "" }}>
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
            <Icon color="blue" name="check" />
          ) : (
            <Icon
              color="blue"
              name="shopping cart"
              style={{ cursor: "pointer" }}
              onClick={onResponse}
              stakeid={id + 1}
            />
          )}
        </Cell>
      </Row>
    );
  }
}

export default ResultRow;
