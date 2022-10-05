import React, { useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./app/sale/build/index.main.mjs";
import { getView } from "./app/sale/functions";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const appId = 114586728;
const provider = "TestNet";

const getConfig = (provider) => {
  let apiEndpoint;
  let appEndpoint;
  switch (provider) {
    case "MainNet":
      apiEndpoint = "https://mainnet-api.algonode.cloud";
      appEndpoint = "https://launcher.zestbloom.com";
    case "TestNet":
    default:
      apiEndpoint = "https://testnet-api.algonode.cloud";
      appEndpoint = "https://launcher.testnet.zestbloom.com";
  }
  return {
    apiEndpoint,
    appEndpoint,
  };
};

const apiService = {
  getAssetInfo: async (id, endpoint) => {
    return (
      (await axios.get(`${getConfig(provider).apiEndpoint}/v2/assets/${id}`))
        ?.data || {}
    );
  },
};

/*
const appService = {
  getApp: async (id, endpoint = "https://launcher.testnet.zestbloom.com") => {
    return (await axios.get(`${endpoint}/api/v2/apps/${id}`))?.data || {};
  },
};
*/
function App() {
  const [state, setState] = React.useState(null);
  /*
  useEffect(() => {
    if (app) return;
    appService.getApp(114560815).then(setApp);
  });
  */
  const getApp = async (reach, ctc) => {
    const app = await getView(reach, ctc);
    const {
      params: { decimals },
    } = await apiService.getAssetInfo(app.token);
    const fPrice = reach.formatCurrency(reach.bigNumberify(app.price));
    const fTokenAmount = reach.formatWithDecimals(
      reach.bigNumberify(app.tokenAmount),
      decimals
    );
    return { ...app, fPrice, fTokenAmount };
  };
  const onConnect = async () => {
    const providerEnv = {
      ALGO_TOKEN: "",
      ALGO_SERVER: "https://testnet-api.algonode.cloud",
      ALGO_PORT: "",
      ALGO_NODE_WRITE_ONLY: "no",

      ALGO_INDEXER_TOKEN: "",
      ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
      ALGO_INDEXER_PORT: "",
    };
    const networkEnv = "ALGO";
    const reach = loadStdlib({
      REACH_CONNECTOR_MODE: networkEnv,
      REACH_DEBUG: "YES",
    });
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv,
        MyAlgoConnect,
      })
    );
    const acc = await reach.getDefaultAccount();
    const {
      networkAccount: { addr },
    } = acc;
    const ctc = acc.contract(backend, appId);
    const app = await getApp(reach, ctc);
    console.log({ addr, app });
    setState({ reach, addr, app });
  };
  const onBuy = async () => {
    const acc = await state.reach.connectAccount({ addr: state.addr });
    const ctc = acc.contract(backend, appId);
    const amt = window.prompt("How much?");
    await acc.tokenAccept(state.app.token);
    await ctc.a.buy(state.reach.parseCurrency(amt, state.app.decimals));
    getApp(state.reach, ctc).then((app) => setState({ ...state, app }));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {state?.addr && state?.app ? (
          <>
            <div style={{ color: "pink" }}>
              {Object.keys(state.app).map((k) => (
                <div>
                  {k}: {state.app[k]}
                </div>
              ))}
            </div>
            <div>
              <p>Account: {state?.addr}</p>
            </div>
            <button style={{ display: "inline" }} onClick={onBuy}>
              Buy
            </button>
          </>
        ) : (
          <button onClick={onConnect}>Connect</button>
        )}
      </header>
    </div>
  );
}

export default App;
