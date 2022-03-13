import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";
import DashBoard from "../components/dashBoard";
import Intro from "../components/intro";
import { Button, Grid } from "semantic-ui-react";

export default function Home(props) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  function renderApp() {
    if (active) {
      return <DashBoard>{props.children}</DashBoard>;
    } else
      return (
        <Intro>
          <Grid textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column>
                <button onClick={connect} style={{ padding: "20px" }}>
                  Connect To
                  <br />
                  <img
                    src="./images/Metamask-logo.svg"
                    alt="my image"
                    width="260px"
                    height="50px"
                  />
                </button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Intro>
      );
  }

  return <div className="">{renderApp()}</div>;
}
