import React, { useState } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import { useWeb3React } from "@web3-react/core";

export default (props) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [balance, setBalance] = useState(false);
  const [balanceToken, setBalanceToken] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("Click to Connect");
  const appTitle = !!process.env.appTitle ? process.env.appTitle : "Flip Coin";
  const AppLogo = "/images/Logo.png";

  //setBalance(props.balance);

  return (
    <Menu className="MenuContainer">
      <Menu.Item>
        {AppLogo !== "" ? <Image src={AppLogo} size="small" /> : appTitle}
      </Menu.Item>
      <Menu.Item>
        <h1 className="AppTitle">{appTitle}</h1>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="WalletAmount">
          <Menu text vertical style={{ padding: "0px" }}>
            <Menu.Item>
              <Icon
                name="bitcoin"
                alt="Your Balance"
                size="big"
                color="black"
              />
              {props.balance ? props.balance.substring(0, 5) : "--"}
            </Menu.Item>
            <Menu.Item>
              <Icon name="cog" alt="Your Balance" size="big" color="black" />
              {props.balanceToken ? props.balanceToken.substring(0, 5) : "--"}
            </Menu.Item>
          </Menu>
        </Menu.Item>
        <Menu.Item className="WalletInfo">
          {active ? account.substring(0, 6) : ""}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
