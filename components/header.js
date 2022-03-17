import React, { useState } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import { useWeb3React } from "@web3-react/core";

export default (props) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [balance, setBalance] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("Click to Connect");
  const appTitle = !!process.env.appTitle ? process.env.appTitle : "Flip Coin";
  const AppLogo = "/images/Logo.png";

  //setBalance(props.balance);

  return (
    <Menu style={{ marginTop: "20px", backgroundColor: "#333" }}>
      <Menu.Item>
        {AppLogo !== "" ? <Image src={AppLogo} size="small" /> : appTitle}
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item style={{ backgroundColor: "var(--light-color)" }}>
          <Icon name="bitcoin" alt="Your Balance" size="big" />
          {props.balance.substring(0, 5)}
        </Menu.Item>
        <Menu.Item
          style={{
            backgroundColor: "var(--dark-color)",
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
