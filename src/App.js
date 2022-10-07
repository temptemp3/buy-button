import React, { useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./app/sale/build/index.main.mjs";
import { compactAddress } from "./app/sale/functions";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const appIds = [
  ["TINN", 114980325]
];
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

const appService = {
  getApp: async (id) => {
    return (
      (await axios.get(`${getConfig(provider).appEndpoint}/api/v2/apps/${id}`))
        ?.data || {}
    );
  },
};

function App() {
  const [app, setApp] = React.useState(null);
  const [state, setState] = React.useState({ appId: appIds[0][1] });
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  useEffect(() => {
    if (loading) return;
    const timeout = setTimeout(
      () => appService.getApp(state.appId).then(setApp),
      1000
    );
    return () => clearTimeout(timeout);
  }, [loading, state.appId]);
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
    setState({ ...state, reach, addr });
  };
  const onBuy = async () => {
    try {
      setLoading(true);
      const acc = await state.reach.connectAccount({ addr: state.addr });
      const ctc = acc.contract(backend, state.appId);
      await acc.tokenAccept(app.view.token);
      await ctc.a.buy(amount);
      appService.getApp(state.appId).then(setApp);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <select onChange={(e) => setState({ ...state, appId: e.target.value })}>
        {appIds.map(([name, value]) => (
          <option value={value}>{name}</option>
        ))}
      </select>
      <header className="App-header">
        {!app ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            Loading...
          </>
        ) : (
          <>
            {app && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "400px",
                  }}
                >
                  <div>{app.view.unitName}</div>
                  <div>{app.view.fPrice}A</div>
                </div>
                <div
                  style={{
                    background: "black",
                    height: "400px",
                    width: "400px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      color: "pink",
                      height: `${
                        parseFloat(app.view.fTokenPercentRemaining) * 100
                      }%`,
                      width: `100%`,
                      background: "green",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {Object.keys(app.view).map((k) => {
                      switch (k) {
                        case "fTokenAmount":
                          return <div key={k}>{app.view[k]} remaining</div>;
                        /*
                      case "manager":
                        return (
                          <div key={k}>
                            {k}: {compactAddress(app.view[k])}
                          </div>
                        );
                        */
                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
              </>
            )}
            {state?.addr ? (
              <>
                <div>
                  <p>Connected as: {compactAddress(state.addr, 5)}</p>
                </div>
                {!loading ? (
                  <>
                    <small style={{ color: "aqua" }}>
                      Cost:{" "}
                      {Number(parseFloat(app.view.fPrice) * amount).toFixed(6)}A
                    </small>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <small>{app.view.unitName}</small>&nbsp;
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder={`Amount in ${app.view.unitName}`}
                        onChange={(e) => setAmount(e.target.value)}
                        step="1"
                      />
                      <button style={{ display: "inline" }} onClick={onBuy}>
                        Buy
                      </button>
                    </div>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <small>ALGO</small>&nbsp;
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={Number(amount * app.view.fPrice).toFixed(6)}
                        placeholder={`Amount in ALGO`}
                        onChange={(e) =>
                          setAmount(e.target.value / app.view.fPrice)
                        }
                      />
                      <button style={{ display: "inline" }} onClick={onBuy}>
                        Buy
                      </button>
                    </div>
                  </>
                ) : (
                  <button disabled>Processing...</button>
                )}
              </>
            ) : (
              <div>
                <button onClick={onConnect}>Connect</button>
              </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
