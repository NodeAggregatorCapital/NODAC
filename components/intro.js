import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import Layout from "../components/layout";

const CoinImg = "/images/coin_spin_bg.gif";

export default (props) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Image src={CoinImg} size="small" centered />
      <h3 className="headerFont">Connect to your wallet to play!!</h3>
      {props.children}
    </div>
  );
};
