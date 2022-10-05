// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    appLaunch: []
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Struct([['manager', ctc0], ['closed', ctc3], ['token', ctc2], ['tokenAmount', ctc1], ['price', ctc1]]);
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v944, v945, v947, v962] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v947, v1628, v1629, v1630, v1631, v1632] = svs;
      return (await ((async () => {
        
        const v1633 = {
          closed: v1629,
          manager: v1628,
          price: v1632,
          token: v1630,
          tokenAmount: v1631
          };
        
        return v1633;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v947, v978, v1047, v1048, v1049, v1050, v1051] = svs;
      return (await ((async () => {
        
        const v1052 = {
          closed: v1048,
          manager: v1047,
          price: v1051,
          token: v1049,
          tokenAmount: v1050
          };
        
        return v1052;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        ty: ctc4
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1],
      4: [ctc2, ctc0, ctc3, ctc2, ctc1, ctc1],
      6: [ctc2, ctc1, ctc0, ctc3, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    addr: ctc0,
    amt: ctc1,
    tok0: ctc2,
    ttl: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc4,
    close0_201: ctc5,
    grant0_201: ctc6,
    update0_201: ctc4
    });
  const ctc8 = stdlib.T_Null;
  
  
  const v934 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:30:67:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v935 = v934.addr;
  const v936 = v934.amt;
  const v937 = v934.tok0;
  const v938 = v934.ttl;
  
  const txn1 = await (ctc.sendrecv({
    args: [v935, v936, v938, v937],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v944, v945, v946, v947], secs: v949, time: v948, didSend: v46, from: v943 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v947
        });
      ;
      const v962 = stdlib.safeAdd(v948, v946);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v944, v945, v946, v947], secs: v949, time: v948, didSend: v46, from: v943 } = txn1;
  ;
  ;
  const v962 = stdlib.safeAdd(v948, v946);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v962],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v944, v945, v947, v962],
      evt_cnt: 0,
      funcNum: 2,
      lct: v948,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:109:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v947
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v977, v978], secs: v980, time: v979, didSend: v132, from: v976 } = txn2;
    const v981 = stdlib.gt(v977, stdlib.checkedBigNumberify('./interface.rsh:105:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v981, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Constructor'
      });
    const v983 = stdlib.gt(v978, stdlib.checkedBigNumberify('./interface.rsh:106:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v983, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Constructor'
      });
    const v985 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
    ;
    ;
    ;
    null;
    const v999 = {
      closed: false,
      manager: v976,
      price: v978,
      token: v947,
      tokenAmount: v977
      };
    let v1000 = v999;
    let v1001 = v979;
    
    while (await (async () => {
      const v1041 = v1000.closed;
      const v1046 = v1041 ? false : true;
      
      return v1046;})()) {
      const v1047 = v1000.manager;
      const v1048 = v1000.closed;
      const v1049 = v1000.token;
      const v1050 = v1000.tokenAmount;
      const v1051 = v1000.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn3;
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          undefined /* setApiDetails */;
          const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
          const v1131 = stdlib.le(v1129, v1050);
          stdlib.assert(v1131, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Constructor'
            });
          const v1133 = stdlib.safeMul(v1129, v978);
          ;
          const v1145 = null;
          await txn3.getOutput('buy', 'v1145', ctc8, v1145);
          ;
          ;
          const v1173 = stdlib.safeSub(v1050, v1129);
          const v1174 = {
            closed: v1048,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: v1173
            };
          const cv1000 = v1174;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1305 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1305, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can close',
            who: 'Constructor'
            });
          const v1307 = null;
          await txn3.getOutput('close', 'v1307', ctc8, v1307);
          ;
          const v1329 = {
            closed: true,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv1000 = v1329;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v1461 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1461, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Constructor'
            });
          const v1464 = null;
          await txn3.getOutput('grant', 'v1464', ctc8, v1464);
          const v1476 = {
            closed: v1048,
            manager: v1459,
            price: v1051,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1476;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
          const v1608 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1608, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can update',
            who: 'Constructor'
            });
          const v1610 = stdlib.gt(v1606, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1610, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Constructor'
            });
          const v1613 = null;
          await txn3.getOutput('update', 'v1613', ctc8, v1613);
          const v1625 = {
            closed: v1048,
            manager: v1047,
            price: v1606,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1625;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        }
      
      }
    const v1628 = v1000.manager;
    const v1629 = v1000.closed;
    const v1630 = v1000.token;
    const v1631 = v1000.tokenAmount;
    const v1632 = v1000.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1636, time: v1635, didSend: v838, from: v1634 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Manager(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Manager expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Manager expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    price: ctc1,
    tokenAmount: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc4,
    close0_201: ctc5,
    grant0_201: ctc6,
    update0_201: ctc4
    });
  const ctc8 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v944, v945, v946, v947], secs: v949, time: v948, didSend: v46, from: v943 } = txn1;
  ;
  ;
  const v962 = stdlib.safeAdd(v948, v946);
  const v966 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './interface.rsh:100:65:application',
    fs: ['at ./interface.rsh:99:15:application call to [unknown function] (defined at: ./interface.rsh:99:19:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'getParams',
    who: 'Manager'
    });
  const v967 = v966.price;
  const v968 = v966.tokenAmount;
  
  const v971 = stdlib.gt(v968, stdlib.checkedBigNumberify('./interface.rsh:105:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v971, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'tokenAmount must be greater than 0',
    who: 'Manager'
    });
  const v973 = stdlib.gt(v967, stdlib.checkedBigNumberify('./interface.rsh:106:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v973, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'Manager'
    });
  const v975 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
  
  const txn2 = await (ctc.sendrecv({
    args: [v944, v945, v947, v962, v968, v967],
    evt_cnt: 2,
    funcNum: 1,
    lct: v948,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v975, [[v968, v947]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v977, v978], secs: v980, time: v979, didSend: v132, from: v976 } = txn2;
      
      const v985 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
      sim_r.txns.push({
        amt: v985,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v977,
        kind: 'to',
        tok: v947
        });
      sim_r.txns.push({
        kind: 'from',
        to: v944,
        tok: undefined /* Nothing */
        });
      null;
      const v999 = {
        closed: false,
        manager: v976,
        price: v978,
        token: v947,
        tokenAmount: v977
        };
      const v1000 = v999;
      const v1001 = v979;
      
      if (await (async () => {
        const v1041 = v1000.closed;
        const v1046 = v1041 ? false : true;
        
        return v1046;})()) {
        const v1047 = v1000.manager;
        const v1048 = v1000.closed;
        const v1049 = v1000.token;
        const v1050 = v1000.tokenAmount;
        const v1051 = v1000.price;
        sim_r.isHalt = false;
        }
      else {
        const v1628 = v1000.manager;
        const v1629 = v1000.closed;
        const v1630 = v1000.token;
        const v1631 = v1000.tokenAmount;
        const v1632 = v1000.price;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v962],
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v944, v945, v947, v962],
      evt_cnt: 0,
      funcNum: 2,
      lct: v948,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:109:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v947
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v977, v978], secs: v980, time: v979, didSend: v132, from: v976 } = txn2;
    const v981 = stdlib.gt(v977, stdlib.checkedBigNumberify('./interface.rsh:105:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v981, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Manager'
      });
    const v983 = stdlib.gt(v978, stdlib.checkedBigNumberify('./interface.rsh:106:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v983, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Manager'
      });
    const v985 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
    ;
    ;
    ;
    null;
    const v999 = {
      closed: false,
      manager: v976,
      price: v978,
      token: v947,
      tokenAmount: v977
      };
    let v1000 = v999;
    let v1001 = v979;
    
    while (await (async () => {
      const v1041 = v1000.closed;
      const v1046 = v1041 ? false : true;
      
      return v1046;})()) {
      const v1047 = v1000.manager;
      const v1048 = v1000.closed;
      const v1049 = v1000.token;
      const v1050 = v1000.tokenAmount;
      const v1051 = v1000.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn3;
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          undefined /* setApiDetails */;
          const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
          const v1131 = stdlib.le(v1129, v1050);
          stdlib.assert(v1131, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Manager'
            });
          const v1133 = stdlib.safeMul(v1129, v978);
          ;
          const v1145 = null;
          await txn3.getOutput('buy', 'v1145', ctc8, v1145);
          ;
          ;
          const v1173 = stdlib.safeSub(v1050, v1129);
          const v1174 = {
            closed: v1048,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: v1173
            };
          const cv1000 = v1174;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1305 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1305, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can close',
            who: 'Manager'
            });
          const v1307 = null;
          await txn3.getOutput('close', 'v1307', ctc8, v1307);
          ;
          const v1329 = {
            closed: true,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv1000 = v1329;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v1461 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1461, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Manager'
            });
          const v1464 = null;
          await txn3.getOutput('grant', 'v1464', ctc8, v1464);
          const v1476 = {
            closed: v1048,
            manager: v1459,
            price: v1051,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1476;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
          const v1608 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1608, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can update',
            who: 'Manager'
            });
          const v1610 = stdlib.gt(v1606, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1610, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Manager'
            });
          const v1613 = null;
          await txn3.getOutput('update', 'v1613', ctc8, v1613);
          const v1625 = {
            closed: v1048,
            manager: v1047,
            price: v1606,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1625;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        }
      
      }
    const v1628 = v1000.manager;
    const v1629 = v1000.closed;
    const v1630 = v1000.token;
    const v1631 = v1000.tokenAmount;
    const v1632 = v1000.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1636, time: v1635, didSend: v838, from: v1634 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Relay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    buy0_201: ctc3,
    close0_201: ctc4,
    grant0_201: ctc5,
    update0_201: ctc3
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v944, v945, v946, v947], secs: v949, time: v948, didSend: v46, from: v943 } = txn1;
  ;
  ;
  const v962 = stdlib.safeAdd(v948, v946);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v962],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v944, v945, v947, v962],
      evt_cnt: 0,
      funcNum: 2,
      lct: v948,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:109:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v947
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v977, v978], secs: v980, time: v979, didSend: v132, from: v976 } = txn2;
    const v981 = stdlib.gt(v977, stdlib.checkedBigNumberify('./interface.rsh:105:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v981, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Relay'
      });
    const v983 = stdlib.gt(v978, stdlib.checkedBigNumberify('./interface.rsh:106:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v983, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Relay'
      });
    const v985 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
    ;
    ;
    ;
    null;
    const v999 = {
      closed: false,
      manager: v976,
      price: v978,
      token: v947,
      tokenAmount: v977
      };
    let v1000 = v999;
    let v1001 = v979;
    
    while (await (async () => {
      const v1041 = v1000.closed;
      const v1046 = v1041 ? false : true;
      
      return v1046;})()) {
      const v1047 = v1000.manager;
      const v1048 = v1000.closed;
      const v1049 = v1000.token;
      const v1050 = v1000.tokenAmount;
      const v1051 = v1000.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn3;
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          undefined /* setApiDetails */;
          const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
          const v1131 = stdlib.le(v1129, v1050);
          stdlib.assert(v1131, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Relay'
            });
          const v1133 = stdlib.safeMul(v1129, v978);
          ;
          const v1145 = null;
          await txn3.getOutput('buy', 'v1145', ctc7, v1145);
          ;
          ;
          const v1173 = stdlib.safeSub(v1050, v1129);
          const v1174 = {
            closed: v1048,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: v1173
            };
          const cv1000 = v1174;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1305 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1305, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can close',
            who: 'Relay'
            });
          const v1307 = null;
          await txn3.getOutput('close', 'v1307', ctc7, v1307);
          ;
          const v1329 = {
            closed: true,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv1000 = v1329;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v1461 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1461, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Relay'
            });
          const v1464 = null;
          await txn3.getOutput('grant', 'v1464', ctc7, v1464);
          const v1476 = {
            closed: v1048,
            manager: v1459,
            price: v1051,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1476;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
          const v1608 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1608, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can update',
            who: 'Relay'
            });
          const v1610 = stdlib.gt(v1606, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1610, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Relay'
            });
          const v1613 = null;
          await txn3.getOutput('update', 'v1613', ctc7, v1613);
          const v1625 = {
            closed: v1048,
            manager: v1047,
            price: v1606,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1625;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        }
      
      }
    const v1628 = v1000.manager;
    const v1629 = v1000.closed;
    const v1630 = v1000.token;
    const v1631 = v1000.tokenAmount;
    const v1632 = v1000.price;
    const txn3 = await (ctc.sendrecv({
      args: [v947, v1628, v1629, v1630, v1631, v1632],
      evt_cnt: 0,
      funcNum: 4,
      lct: v1001,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:212:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1636, time: v1635, didSend: v838, from: v1634 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v947
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc8, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1636, time: v1635, didSend: v838, from: v1634 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    buy0_201: ctc3,
    close0_201: ctc4,
    grant0_201: ctc5,
    update0_201: ctc3
    });
  const ctc7 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v944, v945, v946, v947], secs: v949, time: v948, didSend: v46, from: v943 } = txn1;
  ;
  ;
  const v962 = stdlib.safeAdd(v948, v946);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v962],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v944, v945, v947, v962],
      evt_cnt: 0,
      funcNum: 2,
      lct: v948,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:109:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v947
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1644, time: v1643, didSend: v858, from: v1642 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v977, v978], secs: v980, time: v979, didSend: v132, from: v976 } = txn2;
    const v981 = stdlib.gt(v977, stdlib.checkedBigNumberify('./interface.rsh:105:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v981, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Verifier'
      });
    const v983 = stdlib.gt(v978, stdlib.checkedBigNumberify('./interface.rsh:106:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v983, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Verifier'
      });
    const v985 = stdlib.safeAdd(v945, stdlib.checkedBigNumberify('./interface.rsh:16:20:decimal', stdlib.UInt_max, '1'));
    ;
    ;
    ;
    null;
    const v999 = {
      closed: false,
      manager: v976,
      price: v978,
      token: v947,
      tokenAmount: v977
      };
    let v1000 = v999;
    let v1001 = v979;
    
    while (await (async () => {
      const v1041 = v1000.closed;
      const v1046 = v1041 ? false : true;
      
      return v1046;})()) {
      const v1047 = v1000.manager;
      const v1048 = v1000.closed;
      const v1049 = v1000.token;
      const v1050 = v1000.tokenAmount;
      const v1051 = v1000.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn3;
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          undefined /* setApiDetails */;
          const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
          const v1131 = stdlib.le(v1129, v1050);
          stdlib.assert(v1131, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Verifier'
            });
          const v1133 = stdlib.safeMul(v1129, v978);
          ;
          const v1145 = null;
          await txn3.getOutput('buy', 'v1145', ctc7, v1145);
          ;
          ;
          const v1173 = stdlib.safeSub(v1050, v1129);
          const v1174 = {
            closed: v1048,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: v1173
            };
          const cv1000 = v1174;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1305 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1305, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can close',
            who: 'Verifier'
            });
          const v1307 = null;
          await txn3.getOutput('close', 'v1307', ctc7, v1307);
          ;
          const v1329 = {
            closed: true,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv1000 = v1329;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v1461 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1461, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Verifier'
            });
          const v1464 = null;
          await txn3.getOutput('grant', 'v1464', ctc7, v1464);
          const v1476 = {
            closed: v1048,
            manager: v1459,
            price: v1051,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1476;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          undefined /* setApiDetails */;
          ;
          const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
          const v1608 = stdlib.addressEq(v1120, v1047);
          stdlib.assert(v1608, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'only manager can update',
            who: 'Verifier'
            });
          const v1610 = stdlib.gt(v1606, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1610, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Verifier'
            });
          const v1613 = null;
          await txn3.getOutput('update', 'v1613', ctc7, v1613);
          const v1625 = {
            closed: v1048,
            manager: v1047,
            price: v1606,
            token: v1049,
            tokenAmount: v1050
            };
          const cv1000 = v1625;
          const cv1001 = v1122;
          
          v1000 = cv1000;
          v1001 = cv1001;
          
          continue;
          break;
          }
        }
      
      }
    const v1628 = v1000.manager;
    const v1629 = v1000.closed;
    const v1630 = v1000.token;
    const v1631 = v1000.tokenAmount;
    const v1632 = v1000.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1636, time: v1635, didSend: v838, from: v1634 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function _buy6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buy6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buy6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc4,
    close0_201: ctc5,
    grant0_201: ctc6,
    update0_201: ctc4
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v947, v978, v1047, v1048, v1049, v1050, v1051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1]);
  const v1087 = stdlib.protect(ctc4, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to "runbuy0_201" (defined at: ./interface.rsh:175:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'in',
    who: 'buy'
    });
  const v1088 = v1087[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1091 = stdlib.le(v1088, v1050);
  stdlib.assert(v1091, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to "runbuy0_201" (defined at: ./interface.rsh:175:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'not enough tokens',
    who: 'buy'
    });
  const v1098 = ['buy0_201', v1087];
  
  const v1116 = stdlib.safeMul(v1088, v978);
  
  const txn1 = await (ctc.sendrecv({
    args: [v947, v978, v1047, v1048, v1049, v1050, v1051, v1098],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v1116, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
      
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buy"
            });
          const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
          const v1133 = stdlib.safeMul(v1129, v978);
          sim_r.txns.push({
            amt: v1133,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1145 = null;
          const v1146 = await txn1.getOutput('buy', 'v1145', ctc8, v1145);
          
          sim_r.txns.push({
            kind: 'from',
            to: v1047,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1120,
            tok: v947
            });
          const v1173 = stdlib.safeSub(v1050, v1129);
          const v1174 = {
            closed: v1048,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: v1173
            };
          const v3190 = v1174.closed;
          if (v3190) {
            const v3197 = v1174.manager;
            const v3199 = v1174.token;
            const v3200 = v1174.tokenAmount;
            const v3201 = v1174.price;
            sim_r.isHalt = false;
            }
          else {
            const v3192 = v1174.manager;
            const v3194 = v1174.token;
            const v3195 = v1174.tokenAmount;
            const v3196 = v1174.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
  switch (v1121[0]) {
    case 'buy0_201': {
      const v1124 = v1121[1];
      undefined /* setApiDetails */;
      const v1129 = v1124[stdlib.checkedBigNumberify('./interface.rsh:175:10:spread', stdlib.UInt_max, '0')];
      const v1131 = stdlib.le(v1129, v1050);
      stdlib.assert(v1131, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:175:24:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:175:24:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
        msg: 'not enough tokens',
        who: 'buy'
        });
      const v1133 = stdlib.safeMul(v1129, v978);
      ;
      const v1145 = null;
      const v1146 = await txn1.getOutput('buy', 'v1145', ctc8, v1145);
      if (v649) {
        stdlib.protect(ctc8, await interact.out(v1124, v1146), {
          at: './interface.rsh:175:11:application',
          fs: ['at ./interface.rsh:175:11:application call to [unknown function] (defined at: ./interface.rsh:175:11:function exp)', 'at ./interface.rsh:180:12:application call to "k" (defined at: ./interface.rsh:179:13:function exp)', 'at ./interface.rsh:179:13:application call to [unknown function] (defined at: ./interface.rsh:179:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
          msg: 'out',
          who: 'buy'
          });
        }
      else {
        }
      
      ;
      ;
      const v1173 = stdlib.safeSub(v1050, v1129);
      const v1174 = {
        closed: v1048,
        manager: v1047,
        price: v1051,
        token: v1049,
        tokenAmount: v1173
        };
      const v3190 = v1174.closed;
      if (v3190) {
        const v3197 = v1174.manager;
        const v3199 = v1174.token;
        const v3200 = v1174.tokenAmount;
        const v3201 = v1174.price;
        return;
        }
      else {
        const v3192 = v1174.manager;
        const v3194 = v1174.token;
        const v3195 = v1174.tokenAmount;
        const v3196 = v1174.price;
        return;
        }
      break;
      }
    case 'close0_201': {
      const v1250 = v1121[1];
      return;
      break;
      }
    case 'grant0_201': {
      const v1376 = v1121[1];
      return;
      break;
      }
    case 'update0_201': {
      const v1502 = v1121[1];
      return;
      break;
      }
    }
  
  
  };
export async function _close6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _close6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _close6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc5,
    close0_201: ctc4,
    grant0_201: ctc6,
    update0_201: ctc5
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v947, v978, v1047, v1048, v1049, v1050, v1051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1]);
  const v1100 = ctc.selfAddress();
  const v1102 = stdlib.protect(ctc4, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:194:23:application call to [unknown function] (defined at: ./interface.rsh:194:23:function exp)', 'at ./interface.rsh:124:29:application call to "runclose0_201" (defined at: ./interface.rsh:194:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v1104 = stdlib.addressEq(v1100, v1047);
  stdlib.assert(v1104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:194:23:application call to [unknown function] (defined at: ./interface.rsh:194:23:function exp)', 'at ./interface.rsh:124:29:application call to "runclose0_201" (defined at: ./interface.rsh:194:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'only manager can close',
    who: 'close'
    });
  const v1109 = ['close0_201', v1102];
  
  const txn1 = await (ctc.sendrecv({
    args: [v947, v978, v1047, v1048, v1049, v1050, v1051, v1109],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:194:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
      
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v1307 = null;
          const v1308 = await txn1.getOutput('close', 'v1307', ctc8, v1307);
          
          sim_r.txns.push({
            kind: 'from',
            to: v1047,
            tok: v947
            });
          const v1329 = {
            closed: true,
            manager: v1047,
            price: v1051,
            token: v1049,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v3280 = v1329.closed;
          if (v3280) {
            const v3287 = v1329.manager;
            const v3289 = v1329.token;
            const v3290 = v1329.tokenAmount;
            const v3291 = v1329.price;
            sim_r.isHalt = false;
            }
          else {
            const v3282 = v1329.manager;
            const v3284 = v1329.token;
            const v3285 = v1329.tokenAmount;
            const v3286 = v1329.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
  switch (v1121[0]) {
    case 'buy0_201': {
      const v1124 = v1121[1];
      return;
      break;
      }
    case 'close0_201': {
      const v1250 = v1121[1];
      undefined /* setApiDetails */;
      ;
      const v1305 = stdlib.addressEq(v1120, v1047);
      stdlib.assert(v1305, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
        msg: 'only manager can close',
        who: 'close'
        });
      const v1307 = null;
      const v1308 = await txn1.getOutput('close', 'v1307', ctc8, v1307);
      if (v649) {
        stdlib.protect(ctc8, await interact.out(v1250, v1308), {
          at: './interface.rsh:194:11:application',
          fs: ['at ./interface.rsh:194:11:application call to [unknown function] (defined at: ./interface.rsh:194:11:function exp)', 'at ./interface.rsh:198:12:application call to "k" (defined at: ./interface.rsh:197:13:function exp)', 'at ./interface.rsh:197:13:application call to [unknown function] (defined at: ./interface.rsh:197:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      ;
      const v1329 = {
        closed: true,
        manager: v1047,
        price: v1051,
        token: v1049,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3280 = v1329.closed;
      if (v3280) {
        const v3287 = v1329.manager;
        const v3289 = v1329.token;
        const v3290 = v1329.tokenAmount;
        const v3291 = v1329.price;
        return;
        }
      else {
        const v3282 = v1329.manager;
        const v3284 = v1329.token;
        const v3285 = v1329.tokenAmount;
        const v3286 = v1329.price;
        return;
        }
      break;
      }
    case 'grant0_201': {
      const v1376 = v1121[1];
      return;
      break;
      }
    case 'update0_201': {
      const v1502 = v1121[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc5,
    close0_201: ctc6,
    grant0_201: ctc4,
    update0_201: ctc5
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v947, v978, v1047, v1048, v1049, v1050, v1051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1]);
  const v1070 = ctc.selfAddress();
  const v1072 = stdlib.protect(ctc4, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:159:26:application call to [unknown function] (defined at: ./interface.rsh:159:26:function exp)', 'at ./interface.rsh:124:29:application call to "rungrant0_201" (defined at: ./interface.rsh:159:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v1076 = stdlib.addressEq(v1070, v1047);
  stdlib.assert(v1076, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:159:26:application call to [unknown function] (defined at: ./interface.rsh:159:26:function exp)', 'at ./interface.rsh:124:29:application call to "rungrant0_201" (defined at: ./interface.rsh:159:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'only manager can grant',
    who: 'grant'
    });
  const v1083 = ['grant0_201', v1072];
  
  const txn1 = await (ctc.sendrecv({
    args: [v947, v978, v1047, v1048, v1049, v1050, v1051, v1083],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:159:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
      
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v1464 = null;
          const v1465 = await txn1.getOutput('grant', 'v1464', ctc8, v1464);
          
          const v1476 = {
            closed: v1048,
            manager: v1459,
            price: v1051,
            token: v1049,
            tokenAmount: v1050
            };
          const v3370 = v1476.closed;
          if (v3370) {
            const v3377 = v1476.manager;
            const v3379 = v1476.token;
            const v3380 = v1476.tokenAmount;
            const v3381 = v1476.price;
            sim_r.isHalt = false;
            }
          else {
            const v3372 = v1476.manager;
            const v3374 = v1476.token;
            const v3375 = v1476.tokenAmount;
            const v3376 = v1476.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
  switch (v1121[0]) {
    case 'buy0_201': {
      const v1124 = v1121[1];
      return;
      break;
      }
    case 'close0_201': {
      const v1250 = v1121[1];
      return;
      break;
      }
    case 'grant0_201': {
      const v1376 = v1121[1];
      undefined /* setApiDetails */;
      ;
      const v1459 = v1376[stdlib.checkedBigNumberify('./interface.rsh:159:10:spread', stdlib.UInt_max, '0')];
      const v1461 = stdlib.addressEq(v1120, v1047);
      stdlib.assert(v1461, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
        msg: 'only manager can grant',
        who: 'grant'
        });
      const v1464 = null;
      const v1465 = await txn1.getOutput('grant', 'v1464', ctc8, v1464);
      if (v649) {
        stdlib.protect(ctc8, await interact.out(v1376, v1465), {
          at: './interface.rsh:159:11:application',
          fs: ['at ./interface.rsh:159:11:application call to [unknown function] (defined at: ./interface.rsh:159:11:function exp)', 'at ./interface.rsh:163:12:application call to "k" (defined at: ./interface.rsh:162:13:function exp)', 'at ./interface.rsh:162:13:application call to [unknown function] (defined at: ./interface.rsh:162:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v1476 = {
        closed: v1048,
        manager: v1459,
        price: v1051,
        token: v1049,
        tokenAmount: v1050
        };
      const v3370 = v1476.closed;
      if (v3370) {
        const v3377 = v1476.manager;
        const v3379 = v1476.token;
        const v3380 = v1476.tokenAmount;
        const v3381 = v1476.price;
        return;
        }
      else {
        const v3372 = v1476.manager;
        const v3374 = v1476.token;
        const v3375 = v1476.tokenAmount;
        const v3376 = v1476.price;
        return;
        }
      break;
      }
    case 'update0_201': {
      const v1502 = v1121[1];
      return;
      break;
      }
    }
  
  
  };
export async function _update6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _update6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _update6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    buy0_201: ctc4,
    close0_201: ctc5,
    grant0_201: ctc6,
    update0_201: ctc4
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v947, v978, v1047, v1048, v1049, v1050, v1051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1]);
  const v1053 = ctc.selfAddress();
  const v1055 = stdlib.protect(ctc4, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:142:27:application call to [unknown function] (defined at: ./interface.rsh:142:27:function exp)', 'at ./interface.rsh:124:29:application call to "runupdate0_201" (defined at: ./interface.rsh:142:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v1056 = v1055[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1059 = stdlib.addressEq(v1053, v1047);
  stdlib.assert(v1059, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:142:27:application call to [unknown function] (defined at: ./interface.rsh:142:27:function exp)', 'at ./interface.rsh:124:29:application call to "runupdate0_201" (defined at: ./interface.rsh:142:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'only manager can update',
    who: 'update'
    });
  const v1061 = stdlib.gt(v1056, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1061, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:142:27:application call to [unknown function] (defined at: ./interface.rsh:142:27:function exp)', 'at ./interface.rsh:124:29:application call to "runupdate0_201" (defined at: ./interface.rsh:142:10:function exp)', 'at ./interface.rsh:124:29:application call to [unknown function] (defined at: ./interface.rsh:124:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'update'
    });
  const v1068 = ['update0_201', v1055];
  
  const txn1 = await (ctc.sendrecv({
    args: [v947, v978, v1047, v1048, v1049, v1050, v1051, v1068],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:142:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
      
      switch (v1121[0]) {
        case 'buy0_201': {
          const v1124 = v1121[1];
          
          break;
          }
        case 'close0_201': {
          const v1250 = v1121[1];
          
          break;
          }
        case 'grant0_201': {
          const v1376 = v1121[1];
          
          break;
          }
        case 'update0_201': {
          const v1502 = v1121[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
          const v1613 = null;
          const v1614 = await txn1.getOutput('update', 'v1613', ctc8, v1613);
          
          const v1625 = {
            closed: v1048,
            manager: v1047,
            price: v1606,
            token: v1049,
            tokenAmount: v1050
            };
          const v3460 = v1625.closed;
          if (v3460) {
            const v3467 = v1625.manager;
            const v3469 = v1625.token;
            const v3470 = v1625.tokenAmount;
            const v3471 = v1625.price;
            sim_r.isHalt = false;
            }
          else {
            const v3462 = v1625.manager;
            const v3464 = v1625.token;
            const v3465 = v1625.tokenAmount;
            const v3466 = v1625.price;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc0, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1121], secs: v1123, time: v1122, didSend: v649, from: v1120 } = txn1;
  switch (v1121[0]) {
    case 'buy0_201': {
      const v1124 = v1121[1];
      return;
      break;
      }
    case 'close0_201': {
      const v1250 = v1121[1];
      return;
      break;
      }
    case 'grant0_201': {
      const v1376 = v1121[1];
      return;
      break;
      }
    case 'update0_201': {
      const v1502 = v1121[1];
      undefined /* setApiDetails */;
      ;
      const v1606 = v1502[stdlib.checkedBigNumberify('./interface.rsh:142:10:spread', stdlib.UInt_max, '0')];
      const v1608 = stdlib.addressEq(v1120, v1047);
      stdlib.assert(v1608, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
        msg: 'only manager can update',
        who: 'update'
        });
      const v1610 = stdlib.gt(v1606, stdlib.checkedBigNumberify('./interface.rsh:144:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1610, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
        msg: 'price must be greater than 0',
        who: 'update'
        });
      const v1613 = null;
      const v1614 = await txn1.getOutput('update', 'v1613', ctc8, v1613);
      if (v649) {
        stdlib.protect(ctc8, await interact.out(v1502, v1614), {
          at: './interface.rsh:142:11:application',
          fs: ['at ./interface.rsh:142:11:application call to [unknown function] (defined at: ./interface.rsh:142:11:function exp)', 'at ./interface.rsh:147:12:application call to "k" (defined at: ./interface.rsh:146:13:function exp)', 'at ./interface.rsh:146:13:application call to [unknown function] (defined at: ./interface.rsh:146:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      const v1625 = {
        closed: v1048,
        manager: v1047,
        price: v1606,
        token: v1049,
        tokenAmount: v1050
        };
      const v3460 = v1625.closed;
      if (v3460) {
        const v3467 = v1625.manager;
        const v3469 = v1625.token;
        const v3470 = v1625.tokenAmount;
        const v3471 = v1625.price;
        return;
        }
      else {
        const v3462 = v1625.manager;
        const v3464 = v1625.token;
        const v3465 = v1625.tokenAmount;
        const v3466 = v1625.price;
        return;
        }
      break;
      }
    }
  
  
  };
export async function buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _buy6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _close6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _grant6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function update(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for update expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for update expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _update6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`buy(uint64)byte[0]`, `close()byte[0]`, `grant(address)byte[0]`, `update(uint64)byte[0]`],
    pure: [`state()(address,byte,uint64,uint64,uint64)`],
    sigs: [`buy(uint64)byte[0]`, `close()byte[0]`, `grant(address)byte[0]`, `state()(address,byte,uint64,uint64,uint64)`, `update(uint64)byte[0]`]
    },
  appApproval: `BiAUAAEECAYCBTEwKLXcwZkM1Y6erg2i1IrcDhiI9//RCgMgoI0GKSEmAwEAAAEBIjUAMRhBBSApZEkiWzUBJVs1AjYaABdJQQDQIjUEIzUGSSEKDEAAkkkhCwxAAHlJIQwMQABeIQwSRDQBSSEEDEAAKSEEEkQoZEk1A1cQIDQDVzABUDQDVzEIUDQDVzkIUDQDV0EIUDUHQgS0JBJEKGRJNQNXCCA0A1coAVA0A1cpCFA0A1cxCFA0A1c5CFA1B0IEjCELEkQ2GgE1/yg0/1AhDa9QQgBoIQoSRDYaATX/gAECNP9QQgBWSSEODEAAFiEOEkQ2GgE1/4ABAzT/UCENr1BCADmB9biIMBJEKTX/KjT/UDIDUEIAJTYaAhc1BDYaAzYaARdJIQUMQAIkSSQMQAHZSSEGDEABmiEGEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSSJbNf8lWzX+VxAgNf1XMAEXNfwhB1s1+4E5WzX6gUFbNflJNQU1+IAE8/IFIDT4ULA0+CJVSSEFDEAAiEkhDwxAAEchDxJENPhXAQg19zT3FzX2MQA0/RJENPYiDUSACAAAAAAAAAZNsCk1BzT/NP40/BZRBwg0/VA09hZQNPsWUDT6FlAyBkICikg0+FcBIDX3MQA0/RJEgAgAAAAAAAAFuLApNQc0/zT+NPwWUQcINPdQNPkWUDT7FlA0+hZQMgZCAlBJIwxAAEFIMQA0/RJEgAgAAAAAAAAFG7ApNQexIrIBNPqyEiSyEDT9shQ0/7IRszT/NP4qNP1QNPkWUDT7FlAlr1AyBkICCUg0+FcBCDX3NPcXSTX2NPoORDT2NP4LNfU09YgC84AIAAAAAAAABHmwKTUHsSKyATT1sggjshA0/bIHs7EisgE09rISJLIQMQCyFDT/shGzNP80/jT8FlEHCDT9UDT5FlA0+xZQNPo09gkWUDIGQgGYSCQ0ARJENARJIhJMNAISEUQoZDUDgASRJzTzsLEisgEishIkshAyCbIVMgqyFDQDIluyEbNCAfohBRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEIWw9EsSKyASKyEiSyEDIJshUyCrIUNAMhCVuyEbNCAbVJIwxAAJFIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQlbNf9JNQVJIls1/iVbNf2ABMe2CtU0/hZQNP0WULAyBjQDIQhbDEQ0/iINRDT9Ig1ENAMhEFsjCDX8NPyIAcY0/jT/iAHXsSKyATT8sggjshA0A1cAILIHs4AEVlCYBLA0/zT9KDEAUDT9FlA0/xZQNP4WUDIGQgCESCERiAGGIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf8hEFs1/iEJWzX9IQhbNfyABOjBUMg0/1A0/hZQNP0WUDT8FlCwIRGIAUKxIrIBIrISJLIQMgqyFDT8shGzMgY0/Qg1+zT/NP4WUDT8FlA0+xZQKEsBVwA4Z0gjNQEyBjUCQgC2Nf81/jX9Nfw0/lcAARdBAEI0/lcBIDX7NP4hEls1+jT+IQdbNfk0/iETWzX4NPwWNPtQKlA0+hZQNPkWUDT4FlAoSwFXAEFnSCQ1ATIGNQJCAGM0/lcBIDX7NP4hEls1+jT+IQdbNfk0/iETWzX4NPwWNP0WUDT7UChQNPoWUDT5FlA0+BZQKEsBVwBJZ0ghBDUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 73,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v944",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v945",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v946",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v947",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v944",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v945",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v946",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v947",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v977",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v978",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_buy0_201",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_201",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_grant0_201",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_update0_201",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1121",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1145",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1307",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1464",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1613",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "appLaunch",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v977",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v978",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_buy0_201",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_201",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_grant0_201",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_update0_201",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1121",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "close",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "grant",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "state",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "manager",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "closed",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "update",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200257c3803806200257c8339810160408190526200002691620002fe565b600080805543600355604080516020808201835292815281513381528451818501528484015180516001600160a01b039081168386015294810151606080840191909152938101516080830152929092015190921660a08201527ff3f7b40e3e3b9f4100b9e92d74f44191fabe2129aaf0490c6d70d95395a3def79060c00160405180910390a1620000bb3415600862000182565b620000d543836020015160400151620001ad60201b60201c565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a85018051516001600160a01b03908116808b52825188015187529151840151811685528b51835260019788905543909755895195860152925197840197909752519092169481019490945251908301529060a001604051602081830303815290604052600290805190602001906200017892919062000204565b5050505062000413565b81620001a95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082620001bc8382620003af565b9150811015620001fe5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401620001a0565b92915050565b8280546200021290620003d6565b90600052602060002090601f01602090048101928262000236576000855562000281565b82601f106200025157805160ff191683800117855562000281565b8280016001018555821562000281579182015b828111156200028157825182559160200191906001019062000264565b506200028f92915062000293565b5090565b5b808211156200028f576000815560010162000294565b604051608081016001600160401b0381118282101715620002db57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002f957600080fd5b919050565b600081830360a08112156200031257600080fd5b604080519081016001600160401b03811182821017156200034357634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200035d57600080fd5b62000367620002aa565b91506200037760208501620002e1565b825260408401516020830152606084015160408301526200039b60808501620002e1565b606083015260208101919091529392505050565b60008219821115620003d157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003eb57607f821691505b602082108114156200040d57634e487b7160e01b600052602260045260246000fd5b50919050565b61215980620004236000396000f3fe6080604052600436106100a55760003560e01c806382ab890a1161006157806382ab890a146101365780638323075714610149578063a7661d541461015e578063ab53f2c614610171578063c19d93fb14610194578063d96a094a146101f357005b80630d80b056146100ae5780631e93b0f1146100c157806342ae229d146100e557806343d726d6146100f857806370284d19146101105780637eea518c1461012357005b366100ac57005b005b6100ac6100bc366004611a48565b610206565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100f3366004611a60565b61022a565b61010061024a565b60405190151581526020016100dc565b61010061011e366004611a87565b61027a565b6100ac610131366004611aa4565b6102be565b610100610144366004611ab6565b6102de565b34801561015557600080fd5b506001546100d2565b6100ac61016c366004611aa4565b610319565b34801561017d57600080fd5b50610186610339565b6040516100dc929190611afb565b3480156101a057600080fd5b506101a96103d6565b6040805182516001600160a01b039081168252602080850151151590830152838301511691810191909152606080830151908201526080918201519181019190915260a0016100dc565b610100610201366004611ab6565b6103ef565b61020e6117a7565b61022661022036849003840184611c2c565b82610426565b5050565b6102326117a7565b61022661024436849003840184611cfa565b82610a6c565b60006102546117ce565b602081015151600190526102666117a7565b6102708282610426565b6020015192915050565b60006102846117ce565b60208101805151600290525151606001516001600160a01b03841690526102a96117a7565b6102b38282610426565b604001519392505050565b6102c66117a7565b6102266102d836849003840184611d6a565b82610d02565b60006102e86117ce565b60208101805151600390525151608001518390526103046117a7565b61030e8282610426565b606001519392505050565b6103216117a7565b61022661033336849003840184611d6a565b82610e52565b60006060600054600280805461034e90611dce565b80601f016020809104026020016040519081016040528092919081815260200182805461037a90611dce565b80156103c75780601f1061039c576101008083540402835291602001916103c7565b820191906000526020600020905b8154815290600101906020018083116103aa57829003601f168201915b50505050509050915091509091565b6103de6117ed565b60006103e981610f77565b91505090565b60006103f96117ce565b602081810180515160009052515101518390526104146117a7565b61041e8282610426565b519392505050565b6104366006600054146020611268565b815161045190158061044a57508251600154145b6021611268565b60008080556002805461046390611dce565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90611dce565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f49190611e03565b90506104fe61181b565b7f80c0c256042afd2ccaea2ec02408c259fca626984e8827d32bc6a7da07fe4263338560405161052f929190611eb6565b60405180910390a1600060208501515151600381111561055157610551611d54565b14156106cc5760208085015151015180825260a083015190516105779110156017611268565b8051516020830151610589919061128e565b6020820181905261059d9034146018611268565b604051600081527fcc00c8db8d1739ce8ac5a5e1f44857df5101bcd70c69d2e0ca9da2cc8a9498029060200160405180910390a16000808452604080840151602084015191516001600160a01b039091169282156108fc02929190818181858888f19350505050158015610615573d6000803e3d6000fd5b508151815151610627919033906112f3565b606080830151604080840180519215159092528085015182516001600160a01b0391821660209091015260c086015183519092019190915260808501519151911691015260a082015181515161067d9190611307565b60408201516080015261068e611894565b825181516001600160a01b0390911690526020808401518251820152604083015181830180519190915251439101526106c681611356565b50610a66565b60016020850151515160038111156106e6576106e6611d54565b14156107f4576106f834156019611268565b61071b82604001516001600160a01b0316336001600160a01b031614601a611268565b604051600081527f2b5e229f25e1ec089dba1fa01c19adeb46c77297c22c0ae22e2ad03b10b1cc8b9060200160405180910390a1600060208401528151604083015160a084015161076d9291906112f3565b606080820180516001905260408085015182516001600160a01b0391821660209091015260c08601518351909201919091526080808601518351921691909301525160009101526107bc611894565b825181516001600160a01b0390911690526020808401518251820152606083015181830180519190915251439101526106c681611356565b600260208501515151600381111561080e5761080e611d54565b14156109245760208401515160600151608082015261082f3415601b611268565b61085282604001516001600160a01b0316336001600160a01b031614601c611268565b604051600081527f01736a56598b2a4b25e84ca1a9ae2ea48465b6ba43dc81b871a7d19ac91ad3569060200160405180910390a1600060408085019190915260608084015160a080850180519215159092526080808601515183516001600160a01b0391821660209091015260c08801518451909601959095528087015183519516949093019390935291840151915101526108ec611894565b825181516001600160a01b039091169052602080840151825182015260a083015181830180519190915251439101526106c681611356565b600360208501515151600381111561093e5761093e611d54565b1415610a66576020840151516080015160c082015261095f3415601d611268565b61098282604001516001600160a01b0316336001600160a01b031614601e611268565b60c081015151610995901515601f611268565b604051600081527f5e9d0232a8407e8c67ecb36093a8d95adefc7593e1d457a1c753a62bdbf9941c9060200160405180910390a160006060808501919091528281015160e08301805191151590915260408085015182516001600160a01b0391821660209091015260c08501515183519092019190915260808086015183519216919093015260a0840151905190910152610a2e611894565b825181516001600160a01b039091169052602080840151825182015260e083015181830180519190915251439101526106c681611356565b50505050565b610a7c600160005414600d611268565b8151610a97901580610a9057508251600154145b600e611268565b600080805560028054610aa990611dce565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad590611dce565b8015610b225780601f10610af757610100808354040283529160200191610b22565b820191906000526020600020905b815481529060010190602001808311610b0557829003601f168201915b5050505050806020019051810190610b3a9190611f38565b9050610b446118bd565b610b5582606001514310600f611268565b604080513381528551602080830191909152808701518051838501520151606082015290517f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939181900360800190a1602084015151610bb79015156009611268565b610bcd600085602001516020015111600a611268565b610bdc8260200151600161155c565b808252610bec903414600b611268565b610c0d610c063384604001518760200151600001516115a9565b600c611268565b815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c47573d6000803e3d6000fd5b506040517fe3186c9b3140de057ac0af103f783a8c4cf8db1215158bfd3a04a74b4a6c582f90600090a1602081810180516000905280513390830152858201805190920151815160409081019190915284015181516001600160a01b03909116606090910152905151905160800152610cbe611894565b604083015181516001600160a01b0390911690526020808601518101518251820152828101518183018051919091525143910152610cfb81611356565b5050505050565b610d126001600054146011611268565b8151610d2d901580610d2657508251600154145b6012611268565b600080805560028054610d3f90611dce565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6b90611dce565b8015610db85780601f10610d8d57610100808354040283529160200191610db8565b820191906000526020600020905b815481529060010190602001808311610d9b57829003601f168201915b5050505050806020019051810190610dd09190611f38565b9050610de481606001514310156013611268565b60408051338152845160208083019190915285015115158183015290517f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9509181900360600190a1610e3734156010611268565b60008080556001819055610e4d906002906118d7565b505050565b610e626004600054146015611268565b8151610e7d901580610e7657508251600154145b6016611268565b600080805560028054610e8f90611dce565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebb90611dce565b8015610f085780601f10610edd57610100808354040283529160200191610f08565b820191906000526020600020905b815481529060010190602001808311610eeb57829003601f168201915b5050505050806020019051810190610f209190611fbb565b60408051338152855160208083019190915286015115158183015290519192507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722919081900360600190a1610e3734156014611268565b610f7f6117ed565b6001600054141561103a57600060028054610f9990611dce565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc590611dce565b80156110125780601f10610fe757610100808354040283529160200191611012565b820191906000526020600020905b815481529060010190602001808311610ff557829003601f168201915b505050505080602001905181019061102a9190611f38565b905061103860006007611268565b505b600460005414156111495760006002805461105490611dce565b80601f016020809104026020016040519081016040528092919081815260200182805461108090611dce565b80156110cd5780601f106110a2576101008083540402835291602001916110cd565b820191906000526020600020905b8154815290600101906020018083116110b057829003601f168201915b50505050508060200190518101906110e59190611fbb565b90506110ef611911565b60208083015182516001600160a01b039182169052604080850151845190151593019290925260608085015184519216919092015260808084015183519092019190915260a0909201518151909201919091525192915050565b600660005414156112575760006002805461116390611dce565b80601f016020809104026020016040519081016040528092919081815260200182805461118f90611dce565b80156111dc5780601f106111b1576101008083540402835291602001916111dc565b820191906000526020600020905b8154815290600101906020018083116111bf57829003601f168201915b50505050508060200190518101906111f49190611e03565b90506111fe611911565b60408083015182516001600160a01b039182169052606080850151845190151560209091015260808086015185519316929093019190915260a084015183519091015260c0909201518151909201919091525192915050565b61126360006007611268565b919050565b816102265760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008115806112b2575082826112a4818361207a565b92506112b09083612099565b145b6112ed5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611285565b92915050565b6112fe8383836115c1565b610e4d57600080fd5b60008261131483826120bb565b91508111156112ed5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611285565b6020810151515115611453576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528151516001600160a01b0390811680835260208085018051518201518416828601908152600160408088018281528451516060908101518916818b01908152865151608090810151818d0190815297515185015160a0808e019182526004600055439097558551998a019a909a5295518a16938801939093529051151590860152519095169083015251928101929092525160c082015260e0015b60405160208183030381529060405260029080519060200190610e4d929190611924565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811682528251602090810151818401528084018051518201518316604080860191909152600060608087018290528351510151909416608080870191909152825151015160a086015290515181015160c0850152600690925543600155905161142f9183910181516001600160a01b039081168252602080840151908301526040808401518216908301526060808401511515908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b50565b60008261156983826120d2565b91508110156112ed5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611285565b60006115b783853085611692565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611620916120ea565b60006040518083038185875af1925050503d806000811461165d576040519150601f19603f3d011682016040523d82523d6000602084013e611662565b606091505b50915091506116738282600261176c565b50808060200190518101906116889190612106565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916116f9916120ea565b60006040518083038185875af1925050503d8060008114611736576040519150601f19603f3d011682016040523d82523d6000602084013e61173b565b606091505b509150915061174c8282600161176c565b50808060200190518101906117619190612106565b979650505050505050565b6060831561177b5750816115ba565b82511561178b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611285565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6040518060400160405280600081526020016117e86119a8565b905290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080516101208101825260006101008201818152825260208201529081016118426117ed565b815260200161184f6117ed565b81526040805160208082018352600082528301520161186c6117ed565b81526020016118876040518060200160405280600081525090565b81526020016117e86117ed565b6040805160808101825260009181018281526060820192909252908152602081016117e86119bb565b6040518060400160405280600081526020016117e86117ed565b5080546118e390611dce565b6000825580601f106118f3575050565b601f01602090049060005260206000209081019061155991906119db565b60405180602001604052806117e86117ed565b82805461193090611dce565b90600052602060002090601f0160209004810192826119525760008555611998565b82601f1061196b57805160ff1916838001178555611998565b82800160010185558215611998579182015b8281111561199857825182559160200191906001019061197d565b506119a49291506119db565b5090565b60405180602001604052806117e86119f0565b60405180604001604052806119ce6117ed565b8152602001600081525090565b5b808211156119a457600081556001016119dc565b6040805160a081019091528060008152602001611a196040518060200160405280600081525090565b815260006020808301829052604080518083018252838152818501528051918201905290815260609091015290565b600060c08284031215611a5a57600080fd5b50919050565b600060608284031215611a5a57600080fd5b6001600160a01b038116811461155957600080fd5b600060208284031215611a9957600080fd5b81356115ba81611a72565b600060408284031215611a5a57600080fd5b600060208284031215611ac857600080fd5b5035919050565b60005b83811015611aea578181015183820152602001611ad2565b83811115610a665750506000910152565b8281526040602082015260008251806040840152611b20816060850160208701611acf565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715611b6657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611b6657634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715611b6657634e487b7160e01b600052604160045260246000fd5b600060208284031215611be057600080fd5b6040516020810181811067ffffffffffffffff82111715611c1157634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b801515811461155957600080fd5b600081830360c0811215611c3f57600080fd5b611c47611b35565b8335815260a0601f1983011215611c5d57600080fd5b611c65611b6c565b611c6d611b9d565b602086013560048110611c7f57600080fd5b8152611c8e8760408801611bce565b60208201526060860135611ca181611c1e565b60408201526020607f1985011215611cb857600080fd5b611cc0611b6c565b93506080860135611cd081611a72565b845260608101849052611ce68760a08801611bce565b608082015281526020820152949350505050565b60008183036060811215611d0d57600080fd5b611d15611b35565b833581526040601f1983011215611d2b57600080fd5b611d33611b35565b60208581013582526040909501358582015293810193909352509092915050565b634e487b7160e01b600052602160045260246000fd5b600060408284031215611d7c57600080fd5b6040516040810181811067ffffffffffffffff82111715611dad57634e487b7160e01b600052604160045260246000fd5b604052823581526020830135611dc281611c1e565b60208201529392505050565b600181811c90821680611de257607f821691505b60208210811415611a5a57634e487b7160e01b600052602260045260246000fd5b600060e08284031215611e1557600080fd5b60405160e0810181811067ffffffffffffffff82111715611e4657634e487b7160e01b600052604160045260246000fd5b6040528251611e5481611a72565b8152602083810151908201526040830151611e6e81611a72565b60408201526060830151611e8181611c1e565b60608201526080830151611e9481611a72565b608082015260a0838101519082015260c0928301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805160e0840192919060048110611ef957634e487b7160e01b600052602160045260246000fd5b806040860152506020810151516060850152604081015115156080850152816060820151511660a085015260808101515160c085015250509392505050565b600060808284031215611f4a57600080fd5b6040516080810181811067ffffffffffffffff82111715611f7b57634e487b7160e01b600052604160045260246000fd5b6040528251611f8981611a72565b8152602083810151908201526040830151611fa381611a72565b60408201526060928301519281019290925250919050565b600060c08284031215611fcd57600080fd5b60405160c0810181811067ffffffffffffffff82111715611ffe57634e487b7160e01b600052604160045260246000fd5b604052825161200c81611a72565b8152602083015161201c81611a72565b6020820152604083015161202f81611c1e565b6040820152606083015161204281611a72565b60608201526080838101519082015260a0928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561209457612094612064565b500290565b6000826120b657634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156120cd576120cd612064565b500390565b600082198211156120e5576120e5612064565b500190565b600082516120fc818460208701611acf565b9190910192915050565b60006020828403121561211857600080fd5b81516115ba81611c1e56fea26469706673582212209f87dc828a3d17de6c18b48f8995e67179428b31fa84455321659a6f60f73e2264736f6c634300080c0033`,
  BytecodeLen: 9596,
  Which: `oD`,
  version: 7,
  views: {
    state: `state`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:35:11:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './interface.rsh:110:15:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './interface.rsh:211:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:213:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './interface.rsh:124:29:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:89:26:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Constructor": Constructor,
  "Manager": Manager,
  "Relay": Relay,
  "Verifier": Verifier,
  "buy": buy,
  "close": close,
  "grant": grant,
  "update": update
  };
export const _APIs = {
  buy: buy,
  close: close,
  grant: grant,
  update: update
  };
