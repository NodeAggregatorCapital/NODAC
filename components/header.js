import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { useWeb3React } from "@web3-react/core";

export default (props) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [balance, setBalance] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("Click to Connect");
  const appTitle = !!process.env.appTitle ? process.env.appTitle : "Flip Coin";

  //setBalance(props.balance);

  return (
    <Menu style={{ marginTop: "20px" }}>
      <Menu.Item>{appTitle}</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item style={{ backgroundColor: "lightyellow" }}>
          <Icon name="bitcoin" alt="Your Balance" size="large" />
          {props.balance.substring(0, 5)}
        </Menu.Item>
        <Menu.Item
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadus: "5px",
            fontWeight: "bold",
          }}
        >
          {active ? account.substring(0, 6) : ""}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
