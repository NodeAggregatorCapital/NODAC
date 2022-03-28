import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Header from "./header";

export default (props) => {
  return (
    <Container>
      <Header
        balance={props.balance}
        balanceToken={props.balanceToken}
        currentAccount={props.currentAccount}
      />
      {props.children}
    </Container>
  );
};
