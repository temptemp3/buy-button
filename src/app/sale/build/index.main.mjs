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
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Struct([['manager', ctc0], ['closed', ctc3], ['token', ctc2], ['tokenAmount', ctc1], ['tokenSupply', ctc1], ['price', ctc1]]);
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2316, v2317, v2319, v2324, v2334] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2319, v4645, v4646, v4647, v4648, v4649, v4650] = svs;
      return (await ((async () => {
        
        const v4651 = {
          closed: v4646,
          manager: v4645,
          price: v4650,
          token: v4647,
          tokenAmount: v4648,
          tokenSupply: v4649
          };
        
        return v4651;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = svs;
      return (await ((async () => {
        
        const v2426 = {
          closed: v2421,
          manager: v2420,
          price: v2425,
          token: v2422,
          tokenAmount: v2423,
          tokenSupply: v2424
          };
        
        return v2426;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        ty: ctc6
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5, ctc1],
      4: [ctc2, ctc0, ctc3, ctc2, ctc1, ctc1, ctc1],
      6: [ctc2, ctc1, ctc5, ctc1, ctc0, ctc3, ctc2, ctc1, ctc1, ctc1]
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
    buy0_206: ctc4,
    close0_206: ctc5,
    deposit0_206: ctc4,
    grant0_206: ctc6,
    touch0_206: ctc5,
    update0_206: ctc4,
    withdraw0_206: ctc4
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2299 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2300 = [v2299];
  const v2306 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:30:67:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v2307 = v2306.addr;
  const v2308 = v2306.amt;
  const v2309 = v2306.tok0;
  const v2310 = v2306.ttl;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2307, v2308, v2310, v2309],
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
      
      
      const {data: [v2316, v2317, v2318, v2319], secs: v2321, time: v2320, didSend: v46, from: v2315 } = txn1;
      
      const v2322 = v2300[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
      const v2323 = stdlib.Array_set(v2322, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
      const v2324 = stdlib.Array_set(v2300, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2323);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2319
        });
      ;
      const v2334 = stdlib.safeAdd(v2320, v2318);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v2316, v2317, v2318, v2319], secs: v2321, time: v2320, didSend: v46, from: v2315 } = txn1;
  const v2322 = v2300[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2323 = stdlib.Array_set(v2322, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2324 = stdlib.Array_set(v2300, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2323);
  ;
  ;
  const v2334 = stdlib.safeAdd(v2320, v2318);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v2334],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2316, v2317, v2319, v2324, v2334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:116:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2319
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
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2348, v2349], secs: v2351, time: v2350, didSend: v130, from: v2347 } = txn2;
    const v2352 = stdlib.gt(v2348, stdlib.checkedBigNumberify('./interface.rsh:112:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2352, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Constructor'
      });
    const v2354 = stdlib.gt(v2349, stdlib.checkedBigNumberify('./interface.rsh:113:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2354, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Constructor'
      });
    ;
    const v2358 = v2324[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2359 = v2358[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2360 = stdlib.safeAdd(v2359, v2348);
    const v2362 = stdlib.Array_set(v2358, '0', v2360);
    const v2363 = stdlib.Array_set(v2324, stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0'), v2362);
    ;
    const v2367 = stdlib.safeSub(v2317, v2317);
    ;
    null;
    const v2368 = {
      closed: false,
      manager: v2347,
      price: v2349,
      token: v2319,
      tokenAmount: v2348,
      tokenSupply: v2348
      };
    let v2369 = v2368;
    let v2370 = v2350;
    let v2376 = v2363;
    let v2377 = v2367;
    
    while (await (async () => {
      const v2413 = v2369.closed;
      const v2419 = v2413 ? false : true;
      
      return v2419;})()) {
      const v2420 = v2369.manager;
      const v2421 = v2369.closed;
      const v2422 = v2369.token;
      const v2423 = v2369.tokenAmount;
      const v2424 = v2369.tokenSupply;
      const v2425 = v2369.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn3;
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          undefined /* setApiDetails */;
          const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2615 = stdlib.le(v2613, v2423);
          stdlib.assert(v2615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Constructor'
            });
          const v2617 = stdlib.safeMul(v2613, v2349);
          const v2670 = stdlib.safeAdd(v2377, v2617);
          ;
          const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2675 = stdlib.Array_set(v2671, '0', v2672);
          const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
          ;
          const v2683 = null;
          await txn3.getOutput('buy', 'v2683', ctc8, v2683);
          const v2695 = stdlib.safeSub(v2670, v2617);
          ;
          const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2701 = stdlib.safeSub(v2697, v2613);
          const v2703 = stdlib.Array_set(v2696, '0', v2701);
          const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
          ;
          const v2712 = stdlib.safeSub(v2423, v2613);
          const v2713 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v2712,
            tokenSupply: v2424
            };
          const cv2369 = v2713;
          const cv2370 = v2606;
          const cv2376 = v2704;
          const cv2377 = v2695;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2966 = stdlib.Array_set(v2962, '0', v2963);
          const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
          ;
          const v3009 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3009, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can close',
            who: 'Constructor'
            });
          const v3011 = null;
          await txn3.getOutput('close', 'v3011', ctc8, v3011);
          const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3024 = stdlib.safeSub(v3020, v2423);
          const v3026 = stdlib.Array_set(v3019, '0', v3024);
          const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
          ;
          const v3034 = {
            closed: true,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv2369 = v3034;
          const cv2370 = v2606;
          const cv2376 = v3027;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          undefined /* setApiDetails */;
          const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
          const v3214 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3214, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Constructor'
            });
          const v3216 = stdlib.gt(v3212, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3216, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Constructor'
            });
          ;
          const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3255 = stdlib.safeAdd(v3254, v3212);
          const v3257 = stdlib.Array_set(v3253, '0', v3255);
          const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
          ;
          const v3336 = null;
          await txn3.getOutput('deposit', 'v3336', ctc8, v3336);
          const v3350 = stdlib.safeAdd(v2423, v3212);
          const v3352 = stdlib.safeAdd(v2424, v3212);
          const v3353 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3350,
            tokenSupply: v3352
            };
          const cv2369 = v3353;
          const cv2370 = v2606;
          const cv2376 = v3258;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3548 = stdlib.Array_set(v3544, '0', v3545);
          const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
          ;
          const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
          const v3650 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3650, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Constructor'
            });
          const v3653 = null;
          await txn3.getOutput('grant', 'v3653', ctc8, v3653);
          const v3666 = {
            closed: v2421,
            manager: v3648,
            price: v2425,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v3666;
          const cv2370 = v2606;
          const cv2376 = v3549;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3839 = stdlib.Array_set(v3835, '0', v3836);
          const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
          ;
          const v3962 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3962, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Constructor'
            });
          const v3964 = null;
          await txn3.getOutput('touch', 'v3964', ctc8, v3964);
          const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
          const v3972 = stdlib.safeAdd(v3971, v2377);
          const v3977 = stdlib.safeSub(v3972, v3971);
          ;
          const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3980 = (stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
          const v3981 = stdlib.safeAdd(v3980, v3979);
          const v3983 = stdlib.Array_set(v3978, '0', v3981);
          const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
          const v3992 = stdlib.safeAdd(v2423, v3980);
          const v3994 = stdlib.safeAdd(v2424, v3980);
          const v3995 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3992,
            tokenSupply: v3994
            };
          const cv2369 = v3995;
          const cv2370 = v2606;
          const cv2376 = v3984;
          const cv2377 = v3977;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4130 = stdlib.Array_set(v4126, '0', v4127);
          const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
          ;
          const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
          const v4292 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4292, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can update',
            who: 'Constructor'
            });
          const v4294 = stdlib.gt(v4290, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4294, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Constructor'
            });
          const v4297 = null;
          await txn3.getOutput('update', 'v4297', ctc8, v4297);
          const v4310 = {
            closed: v2421,
            manager: v2420,
            price: v4290,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v4310;
          const cv2370 = v2606;
          const cv2376 = v4131;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4421 = stdlib.Array_set(v4417, '0', v4418);
          const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
          ;
          const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v4607 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Constructor'
            });
          const v4609 = stdlib.gt(v4605, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4609, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Constructor'
            });
          const v4612 = stdlib.le(v4605, v2423);
          stdlib.assert(v4612, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Constructor'
            });
          const v4615 = null;
          await txn3.getOutput('withdraw', 'v4615', ctc8, v4615);
          const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4628 = stdlib.safeSub(v4624, v4605);
          const v4630 = stdlib.Array_set(v4623, '0', v4628);
          const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
          ;
          const v4639 = stdlib.safeSub(v2423, v4605);
          const v4641 = stdlib.safeSub(v2424, v4605);
          const v4642 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v4639,
            tokenSupply: v4641
            };
          const cv2369 = v4642;
          const cv2370 = v2606;
          const cv2376 = v4631;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        }
      
      }
    const v4645 = v2369.manager;
    const v4646 = v2369.closed;
    const v4647 = v2369.token;
    const v4648 = v2369.tokenAmount;
    const v4649 = v2369.tokenSupply;
    const v4650 = v2369.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4654, time: v4653, didSend: v2089, from: v4652 } = txn3;
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
    buy0_206: ctc4,
    close0_206: ctc5,
    deposit0_206: ctc4,
    grant0_206: ctc6,
    touch0_206: ctc5,
    update0_206: ctc4,
    withdraw0_206: ctc4
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2299 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2300 = [v2299];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2316, v2317, v2318, v2319], secs: v2321, time: v2320, didSend: v46, from: v2315 } = txn1;
  const v2322 = v2300[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2323 = stdlib.Array_set(v2322, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2324 = stdlib.Array_set(v2300, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2323);
  ;
  ;
  const v2334 = stdlib.safeAdd(v2320, v2318);
  const v2338 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './interface.rsh:107:65:application',
    fs: ['at ./interface.rsh:106:15:application call to [unknown function] (defined at: ./interface.rsh:106:19:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'getParams',
    who: 'Manager'
    });
  const v2339 = v2338.price;
  const v2340 = v2338.tokenAmount;
  
  const v2343 = stdlib.gt(v2340, stdlib.checkedBigNumberify('./interface.rsh:112:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2343, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'tokenAmount must be greater than 0',
    who: 'Manager'
    });
  const v2345 = stdlib.gt(v2339, stdlib.checkedBigNumberify('./interface.rsh:113:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2345, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'Manager'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v2316, v2317, v2319, v2324, v2334, v2340, v2339],
    evt_cnt: 2,
    funcNum: 1,
    lct: v2320,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v2317, [[v2340, v2319]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2348, v2349], secs: v2351, time: v2350, didSend: v130, from: v2347 } = txn2;
      
      sim_r.txns.push({
        amt: v2317,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2358 = v2324[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
      const v2359 = v2358[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
      const v2360 = stdlib.safeAdd(v2359, v2348);
      const v2362 = stdlib.Array_set(v2358, '0', v2360);
      const v2363 = stdlib.Array_set(v2324, stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0'), v2362);
      sim_r.txns.push({
        amt: v2348,
        kind: 'to',
        tok: v2319
        });
      const v2367 = stdlib.safeSub(v2317, v2317);
      sim_r.txns.push({
        kind: 'from',
        to: v2316,
        tok: undefined /* Nothing */
        });
      null;
      const v2368 = {
        closed: false,
        manager: v2347,
        price: v2349,
        token: v2319,
        tokenAmount: v2348,
        tokenSupply: v2348
        };
      const v2369 = v2368;
      const v2370 = v2350;
      const v2376 = v2363;
      const v2377 = v2367;
      
      if (await (async () => {
        const v2413 = v2369.closed;
        const v2419 = v2413 ? false : true;
        
        return v2419;})()) {
        const v2420 = v2369.manager;
        const v2421 = v2369.closed;
        const v2422 = v2369.token;
        const v2423 = v2369.tokenAmount;
        const v2424 = v2369.tokenSupply;
        const v2425 = v2369.price;
        sim_r.isHalt = false;
        }
      else {
        const v4645 = v2369.manager;
        const v4646 = v2369.closed;
        const v4647 = v2369.token;
        const v4648 = v2369.tokenAmount;
        const v4649 = v2369.tokenSupply;
        const v4650 = v2369.price;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v2334],
    tys: [ctc0, ctc1, ctc2, ctc11, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2316, v2317, v2319, v2324, v2334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:116:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2319
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
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2348, v2349], secs: v2351, time: v2350, didSend: v130, from: v2347 } = txn2;
    const v2352 = stdlib.gt(v2348, stdlib.checkedBigNumberify('./interface.rsh:112:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2352, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Manager'
      });
    const v2354 = stdlib.gt(v2349, stdlib.checkedBigNumberify('./interface.rsh:113:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2354, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Manager'
      });
    ;
    const v2358 = v2324[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2359 = v2358[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2360 = stdlib.safeAdd(v2359, v2348);
    const v2362 = stdlib.Array_set(v2358, '0', v2360);
    const v2363 = stdlib.Array_set(v2324, stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0'), v2362);
    ;
    const v2367 = stdlib.safeSub(v2317, v2317);
    ;
    null;
    const v2368 = {
      closed: false,
      manager: v2347,
      price: v2349,
      token: v2319,
      tokenAmount: v2348,
      tokenSupply: v2348
      };
    let v2369 = v2368;
    let v2370 = v2350;
    let v2376 = v2363;
    let v2377 = v2367;
    
    while (await (async () => {
      const v2413 = v2369.closed;
      const v2419 = v2413 ? false : true;
      
      return v2419;})()) {
      const v2420 = v2369.manager;
      const v2421 = v2369.closed;
      const v2422 = v2369.token;
      const v2423 = v2369.tokenAmount;
      const v2424 = v2369.tokenSupply;
      const v2425 = v2369.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn3;
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          undefined /* setApiDetails */;
          const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2615 = stdlib.le(v2613, v2423);
          stdlib.assert(v2615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Manager'
            });
          const v2617 = stdlib.safeMul(v2613, v2349);
          const v2670 = stdlib.safeAdd(v2377, v2617);
          ;
          const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2675 = stdlib.Array_set(v2671, '0', v2672);
          const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
          ;
          const v2683 = null;
          await txn3.getOutput('buy', 'v2683', ctc8, v2683);
          const v2695 = stdlib.safeSub(v2670, v2617);
          ;
          const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2701 = stdlib.safeSub(v2697, v2613);
          const v2703 = stdlib.Array_set(v2696, '0', v2701);
          const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
          ;
          const v2712 = stdlib.safeSub(v2423, v2613);
          const v2713 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v2712,
            tokenSupply: v2424
            };
          const cv2369 = v2713;
          const cv2370 = v2606;
          const cv2376 = v2704;
          const cv2377 = v2695;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2966 = stdlib.Array_set(v2962, '0', v2963);
          const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
          ;
          const v3009 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3009, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can close',
            who: 'Manager'
            });
          const v3011 = null;
          await txn3.getOutput('close', 'v3011', ctc8, v3011);
          const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3024 = stdlib.safeSub(v3020, v2423);
          const v3026 = stdlib.Array_set(v3019, '0', v3024);
          const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
          ;
          const v3034 = {
            closed: true,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv2369 = v3034;
          const cv2370 = v2606;
          const cv2376 = v3027;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          undefined /* setApiDetails */;
          const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
          const v3214 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3214, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Manager'
            });
          const v3216 = stdlib.gt(v3212, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3216, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Manager'
            });
          ;
          const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3255 = stdlib.safeAdd(v3254, v3212);
          const v3257 = stdlib.Array_set(v3253, '0', v3255);
          const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
          ;
          const v3336 = null;
          await txn3.getOutput('deposit', 'v3336', ctc8, v3336);
          const v3350 = stdlib.safeAdd(v2423, v3212);
          const v3352 = stdlib.safeAdd(v2424, v3212);
          const v3353 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3350,
            tokenSupply: v3352
            };
          const cv2369 = v3353;
          const cv2370 = v2606;
          const cv2376 = v3258;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3548 = stdlib.Array_set(v3544, '0', v3545);
          const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
          ;
          const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
          const v3650 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3650, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Manager'
            });
          const v3653 = null;
          await txn3.getOutput('grant', 'v3653', ctc8, v3653);
          const v3666 = {
            closed: v2421,
            manager: v3648,
            price: v2425,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v3666;
          const cv2370 = v2606;
          const cv2376 = v3549;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3839 = stdlib.Array_set(v3835, '0', v3836);
          const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
          ;
          const v3962 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3962, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Manager'
            });
          const v3964 = null;
          await txn3.getOutput('touch', 'v3964', ctc8, v3964);
          const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
          const v3972 = stdlib.safeAdd(v3971, v2377);
          const v3977 = stdlib.safeSub(v3972, v3971);
          ;
          const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3980 = (stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
          const v3981 = stdlib.safeAdd(v3980, v3979);
          const v3983 = stdlib.Array_set(v3978, '0', v3981);
          const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
          const v3992 = stdlib.safeAdd(v2423, v3980);
          const v3994 = stdlib.safeAdd(v2424, v3980);
          const v3995 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3992,
            tokenSupply: v3994
            };
          const cv2369 = v3995;
          const cv2370 = v2606;
          const cv2376 = v3984;
          const cv2377 = v3977;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4130 = stdlib.Array_set(v4126, '0', v4127);
          const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
          ;
          const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
          const v4292 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4292, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can update',
            who: 'Manager'
            });
          const v4294 = stdlib.gt(v4290, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4294, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Manager'
            });
          const v4297 = null;
          await txn3.getOutput('update', 'v4297', ctc8, v4297);
          const v4310 = {
            closed: v2421,
            manager: v2420,
            price: v4290,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v4310;
          const cv2370 = v2606;
          const cv2376 = v4131;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4421 = stdlib.Array_set(v4417, '0', v4418);
          const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
          ;
          const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v4607 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Manager'
            });
          const v4609 = stdlib.gt(v4605, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4609, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Manager'
            });
          const v4612 = stdlib.le(v4605, v2423);
          stdlib.assert(v4612, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Manager'
            });
          const v4615 = null;
          await txn3.getOutput('withdraw', 'v4615', ctc8, v4615);
          const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4628 = stdlib.safeSub(v4624, v4605);
          const v4630 = stdlib.Array_set(v4623, '0', v4628);
          const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
          ;
          const v4639 = stdlib.safeSub(v2423, v4605);
          const v4641 = stdlib.safeSub(v2424, v4605);
          const v4642 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v4639,
            tokenSupply: v4641
            };
          const cv2369 = v4642;
          const cv2370 = v2606;
          const cv2376 = v4631;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        }
      
      }
    const v4645 = v2369.manager;
    const v4646 = v2369.closed;
    const v4647 = v2369.token;
    const v4648 = v2369.tokenAmount;
    const v4649 = v2369.tokenSupply;
    const v4650 = v2369.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4654, time: v4653, didSend: v2089, from: v4652 } = txn3;
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
    buy0_206: ctc3,
    close0_206: ctc4,
    deposit0_206: ctc3,
    grant0_206: ctc5,
    touch0_206: ctc4,
    update0_206: ctc3,
    withdraw0_206: ctc3
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2299 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2300 = [v2299];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2316, v2317, v2318, v2319], secs: v2321, time: v2320, didSend: v46, from: v2315 } = txn1;
  const v2322 = v2300[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2323 = stdlib.Array_set(v2322, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2324 = stdlib.Array_set(v2300, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2323);
  ;
  ;
  const v2334 = stdlib.safeAdd(v2320, v2318);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v2334],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2316, v2317, v2319, v2324, v2334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:116:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2319
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
      tys: [ctc0, ctc1, ctc2, ctc10, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2348, v2349], secs: v2351, time: v2350, didSend: v130, from: v2347 } = txn2;
    const v2352 = stdlib.gt(v2348, stdlib.checkedBigNumberify('./interface.rsh:112:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2352, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Relay'
      });
    const v2354 = stdlib.gt(v2349, stdlib.checkedBigNumberify('./interface.rsh:113:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2354, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Relay'
      });
    ;
    const v2358 = v2324[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2359 = v2358[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2360 = stdlib.safeAdd(v2359, v2348);
    const v2362 = stdlib.Array_set(v2358, '0', v2360);
    const v2363 = stdlib.Array_set(v2324, stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0'), v2362);
    ;
    const v2367 = stdlib.safeSub(v2317, v2317);
    ;
    null;
    const v2368 = {
      closed: false,
      manager: v2347,
      price: v2349,
      token: v2319,
      tokenAmount: v2348,
      tokenSupply: v2348
      };
    let v2369 = v2368;
    let v2370 = v2350;
    let v2376 = v2363;
    let v2377 = v2367;
    
    while (await (async () => {
      const v2413 = v2369.closed;
      const v2419 = v2413 ? false : true;
      
      return v2419;})()) {
      const v2420 = v2369.manager;
      const v2421 = v2369.closed;
      const v2422 = v2369.token;
      const v2423 = v2369.tokenAmount;
      const v2424 = v2369.tokenSupply;
      const v2425 = v2369.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn3;
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          undefined /* setApiDetails */;
          const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2615 = stdlib.le(v2613, v2423);
          stdlib.assert(v2615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Relay'
            });
          const v2617 = stdlib.safeMul(v2613, v2349);
          const v2670 = stdlib.safeAdd(v2377, v2617);
          ;
          const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2675 = stdlib.Array_set(v2671, '0', v2672);
          const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
          ;
          const v2683 = null;
          await txn3.getOutput('buy', 'v2683', ctc7, v2683);
          const v2695 = stdlib.safeSub(v2670, v2617);
          ;
          const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2701 = stdlib.safeSub(v2697, v2613);
          const v2703 = stdlib.Array_set(v2696, '0', v2701);
          const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
          ;
          const v2712 = stdlib.safeSub(v2423, v2613);
          const v2713 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v2712,
            tokenSupply: v2424
            };
          const cv2369 = v2713;
          const cv2370 = v2606;
          const cv2376 = v2704;
          const cv2377 = v2695;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2966 = stdlib.Array_set(v2962, '0', v2963);
          const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
          ;
          const v3009 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3009, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can close',
            who: 'Relay'
            });
          const v3011 = null;
          await txn3.getOutput('close', 'v3011', ctc7, v3011);
          const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3024 = stdlib.safeSub(v3020, v2423);
          const v3026 = stdlib.Array_set(v3019, '0', v3024);
          const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
          ;
          const v3034 = {
            closed: true,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv2369 = v3034;
          const cv2370 = v2606;
          const cv2376 = v3027;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          undefined /* setApiDetails */;
          const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
          const v3214 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3214, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Relay'
            });
          const v3216 = stdlib.gt(v3212, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3216, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Relay'
            });
          ;
          const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3255 = stdlib.safeAdd(v3254, v3212);
          const v3257 = stdlib.Array_set(v3253, '0', v3255);
          const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
          ;
          const v3336 = null;
          await txn3.getOutput('deposit', 'v3336', ctc7, v3336);
          const v3350 = stdlib.safeAdd(v2423, v3212);
          const v3352 = stdlib.safeAdd(v2424, v3212);
          const v3353 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3350,
            tokenSupply: v3352
            };
          const cv2369 = v3353;
          const cv2370 = v2606;
          const cv2376 = v3258;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3548 = stdlib.Array_set(v3544, '0', v3545);
          const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
          ;
          const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
          const v3650 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3650, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Relay'
            });
          const v3653 = null;
          await txn3.getOutput('grant', 'v3653', ctc7, v3653);
          const v3666 = {
            closed: v2421,
            manager: v3648,
            price: v2425,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v3666;
          const cv2370 = v2606;
          const cv2376 = v3549;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3839 = stdlib.Array_set(v3835, '0', v3836);
          const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
          ;
          const v3962 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3962, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Relay'
            });
          const v3964 = null;
          await txn3.getOutput('touch', 'v3964', ctc7, v3964);
          const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
          const v3972 = stdlib.safeAdd(v3971, v2377);
          const v3977 = stdlib.safeSub(v3972, v3971);
          ;
          const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3980 = (stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
          const v3981 = stdlib.safeAdd(v3980, v3979);
          const v3983 = stdlib.Array_set(v3978, '0', v3981);
          const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
          const v3992 = stdlib.safeAdd(v2423, v3980);
          const v3994 = stdlib.safeAdd(v2424, v3980);
          const v3995 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3992,
            tokenSupply: v3994
            };
          const cv2369 = v3995;
          const cv2370 = v2606;
          const cv2376 = v3984;
          const cv2377 = v3977;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4130 = stdlib.Array_set(v4126, '0', v4127);
          const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
          ;
          const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
          const v4292 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4292, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can update',
            who: 'Relay'
            });
          const v4294 = stdlib.gt(v4290, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4294, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Relay'
            });
          const v4297 = null;
          await txn3.getOutput('update', 'v4297', ctc7, v4297);
          const v4310 = {
            closed: v2421,
            manager: v2420,
            price: v4290,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v4310;
          const cv2370 = v2606;
          const cv2376 = v4131;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4421 = stdlib.Array_set(v4417, '0', v4418);
          const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
          ;
          const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v4607 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Relay'
            });
          const v4609 = stdlib.gt(v4605, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4609, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Relay'
            });
          const v4612 = stdlib.le(v4605, v2423);
          stdlib.assert(v4612, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Relay'
            });
          const v4615 = null;
          await txn3.getOutput('withdraw', 'v4615', ctc7, v4615);
          const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4628 = stdlib.safeSub(v4624, v4605);
          const v4630 = stdlib.Array_set(v4623, '0', v4628);
          const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
          ;
          const v4639 = stdlib.safeSub(v2423, v4605);
          const v4641 = stdlib.safeSub(v2424, v4605);
          const v4642 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v4639,
            tokenSupply: v4641
            };
          const cv2369 = v4642;
          const cv2370 = v2606;
          const cv2376 = v4631;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        }
      
      }
    const v4645 = v2369.manager;
    const v4646 = v2369.closed;
    const v4647 = v2369.token;
    const v4648 = v2369.tokenAmount;
    const v4649 = v2369.tokenSupply;
    const v4650 = v2369.price;
    const txn3 = await (ctc.sendrecv({
      args: [v2319, v4645, v4646, v4647, v4648, v4649, v4650],
      evt_cnt: 0,
      funcNum: 4,
      lct: v2370,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:282:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v4654, time: v4653, didSend: v2089, from: v4652 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2319
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
      tys: [ctc2, ctc0, ctc8, ctc2, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4654, time: v4653, didSend: v2089, from: v4652 } = txn3;
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
    buy0_206: ctc3,
    close0_206: ctc4,
    deposit0_206: ctc3,
    grant0_206: ctc5,
    touch0_206: ctc4,
    update0_206: ctc3,
    withdraw0_206: ctc3
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2299 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2300 = [v2299];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2316, v2317, v2318, v2319], secs: v2321, time: v2320, didSend: v46, from: v2315 } = txn1;
  const v2322 = v2300[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2323 = stdlib.Array_set(v2322, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2324 = stdlib.Array_set(v2300, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2323);
  ;
  ;
  const v2334 = stdlib.safeAdd(v2320, v2318);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: ['time', v2334],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2316, v2317, v2319, v2324, v2334],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:116:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2319
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
      tys: [ctc0, ctc1, ctc2, ctc10, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4662, time: v4661, didSend: v2109, from: v4660 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2348, v2349], secs: v2351, time: v2350, didSend: v130, from: v2347 } = txn2;
    const v2352 = stdlib.gt(v2348, stdlib.checkedBigNumberify('./interface.rsh:112:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2352, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Verifier'
      });
    const v2354 = stdlib.gt(v2349, stdlib.checkedBigNumberify('./interface.rsh:113:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2354, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Verifier'
      });
    ;
    const v2358 = v2324[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2359 = v2358[stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0')];
    const v2360 = stdlib.safeAdd(v2359, v2348);
    const v2362 = stdlib.Array_set(v2358, '0', v2360);
    const v2363 = stdlib.Array_set(v2324, stdlib.checkedBigNumberify('./interface.rsh:109:11:dot', stdlib.UInt_max, '0'), v2362);
    ;
    const v2367 = stdlib.safeSub(v2317, v2317);
    ;
    null;
    const v2368 = {
      closed: false,
      manager: v2347,
      price: v2349,
      token: v2319,
      tokenAmount: v2348,
      tokenSupply: v2348
      };
    let v2369 = v2368;
    let v2370 = v2350;
    let v2376 = v2363;
    let v2377 = v2367;
    
    while (await (async () => {
      const v2413 = v2369.closed;
      const v2419 = v2413 ? false : true;
      
      return v2419;})()) {
      const v2420 = v2369.manager;
      const v2421 = v2369.closed;
      const v2422 = v2369.token;
      const v2423 = v2369.tokenAmount;
      const v2424 = v2369.tokenSupply;
      const v2425 = v2369.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn3;
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          undefined /* setApiDetails */;
          const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2615 = stdlib.le(v2613, v2423);
          stdlib.assert(v2615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Verifier'
            });
          const v2617 = stdlib.safeMul(v2613, v2349);
          const v2670 = stdlib.safeAdd(v2377, v2617);
          ;
          const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2675 = stdlib.Array_set(v2671, '0', v2672);
          const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
          ;
          const v2683 = null;
          await txn3.getOutput('buy', 'v2683', ctc7, v2683);
          const v2695 = stdlib.safeSub(v2670, v2617);
          ;
          const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2701 = stdlib.safeSub(v2697, v2613);
          const v2703 = stdlib.Array_set(v2696, '0', v2701);
          const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
          ;
          const v2712 = stdlib.safeSub(v2423, v2613);
          const v2713 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v2712,
            tokenSupply: v2424
            };
          const cv2369 = v2713;
          const cv2370 = v2606;
          const cv2376 = v2704;
          const cv2377 = v2695;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2966 = stdlib.Array_set(v2962, '0', v2963);
          const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
          ;
          const v3009 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3009, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can close',
            who: 'Verifier'
            });
          const v3011 = null;
          await txn3.getOutput('close', 'v3011', ctc7, v3011);
          const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3024 = stdlib.safeSub(v3020, v2423);
          const v3026 = stdlib.Array_set(v3019, '0', v3024);
          const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
          ;
          const v3034 = {
            closed: true,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const cv2369 = v3034;
          const cv2370 = v2606;
          const cv2376 = v3027;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          undefined /* setApiDetails */;
          const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
          const v3214 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3214, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Verifier'
            });
          const v3216 = stdlib.gt(v3212, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3216, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Verifier'
            });
          ;
          const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3255 = stdlib.safeAdd(v3254, v3212);
          const v3257 = stdlib.Array_set(v3253, '0', v3255);
          const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
          ;
          const v3336 = null;
          await txn3.getOutput('deposit', 'v3336', ctc7, v3336);
          const v3350 = stdlib.safeAdd(v2423, v3212);
          const v3352 = stdlib.safeAdd(v2424, v3212);
          const v3353 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3350,
            tokenSupply: v3352
            };
          const cv2369 = v3353;
          const cv2370 = v2606;
          const cv2376 = v3258;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3548 = stdlib.Array_set(v3544, '0', v3545);
          const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
          ;
          const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
          const v3650 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3650, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Verifier'
            });
          const v3653 = null;
          await txn3.getOutput('grant', 'v3653', ctc7, v3653);
          const v3666 = {
            closed: v2421,
            manager: v3648,
            price: v2425,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v3666;
          const cv2370 = v2606;
          const cv2376 = v3549;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3839 = stdlib.Array_set(v3835, '0', v3836);
          const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
          ;
          const v3962 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v3962, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Verifier'
            });
          const v3964 = null;
          await txn3.getOutput('touch', 'v3964', ctc7, v3964);
          const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
          const v3972 = stdlib.safeAdd(v3971, v2377);
          const v3977 = stdlib.safeSub(v3972, v3971);
          ;
          const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3980 = (stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
          const v3981 = stdlib.safeAdd(v3980, v3979);
          const v3983 = stdlib.Array_set(v3978, '0', v3981);
          const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
          const v3992 = stdlib.safeAdd(v2423, v3980);
          const v3994 = stdlib.safeAdd(v2424, v3980);
          const v3995 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3992,
            tokenSupply: v3994
            };
          const cv2369 = v3995;
          const cv2370 = v2606;
          const cv2376 = v3984;
          const cv2377 = v3977;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4130 = stdlib.Array_set(v4126, '0', v4127);
          const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
          ;
          const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
          const v4292 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4292, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can update',
            who: 'Verifier'
            });
          const v4294 = stdlib.gt(v4290, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4294, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Verifier'
            });
          const v4297 = null;
          await txn3.getOutput('update', 'v4297', ctc7, v4297);
          const v4310 = {
            closed: v2421,
            manager: v2420,
            price: v4290,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const cv2369 = v4310;
          const cv2370 = v2606;
          const cv2376 = v4131;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          undefined /* setApiDetails */;
          ;
          const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4421 = stdlib.Array_set(v4417, '0', v4418);
          const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
          ;
          const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v4607 = stdlib.addressEq(v2604, v2420);
          stdlib.assert(v4607, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Verifier'
            });
          const v4609 = stdlib.gt(v4605, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4609, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Verifier'
            });
          const v4612 = stdlib.le(v4605, v2423);
          stdlib.assert(v4612, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Verifier'
            });
          const v4615 = null;
          await txn3.getOutput('withdraw', 'v4615', ctc7, v4615);
          const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4628 = stdlib.safeSub(v4624, v4605);
          const v4630 = stdlib.Array_set(v4623, '0', v4628);
          const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
          ;
          const v4639 = stdlib.safeSub(v2423, v4605);
          const v4641 = stdlib.safeSub(v2424, v4605);
          const v4642 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v4639,
            tokenSupply: v4641
            };
          const cv2369 = v4642;
          const cv2370 = v2606;
          const cv2376 = v4631;
          const cv2377 = v2377;
          
          v2369 = cv2369;
          v2370 = cv2370;
          v2376 = cv2376;
          v2377 = cv2377;
          
          continue;
          break;
          }
        }
      
      }
    const v4645 = v2369.manager;
    const v4646 = v2369.closed;
    const v4647 = v2369.token;
    const v4648 = v2369.tokenAmount;
    const v4649 = v2369.tokenSupply;
    const v4650 = v2369.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v4654, time: v4653, didSend: v2089, from: v4652 } = txn3;
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc6,
    close0_206: ctc7,
    deposit0_206: ctc6,
    grant0_206: ctc8,
    touch0_206: ctc7,
    update0_206: ctc6,
    withdraw0_206: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2509 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to "runbuy0_206" (defined at: ./interface.rsh:244:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'buy'
    });
  const v2510 = v2509[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2513 = stdlib.le(v2510, v2423);
  stdlib.assert(v2513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to "runbuy0_206" (defined at: ./interface.rsh:244:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'not enough tokens',
    who: 'buy'
    });
  const v2520 = ['buy0_206', v2509];
  
  const v2538 = stdlib.safeMul(v2510, v2349);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2520],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v2538, [[stdlib.checkedBigNumberify('./interface.rsh:247:24:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buy"
            });
          const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2617 = stdlib.safeMul(v2613, v2349);
          const v2670 = stdlib.safeAdd(v2377, v2617);
          sim_r.txns.push({
            amt: v2617,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2675 = stdlib.Array_set(v2671, '0', v2672);
          const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
          ;
          const v2683 = null;
          const v2684 = await txn1.getOutput('buy', 'v2683', ctc10, v2683);
          
          const v2695 = stdlib.safeSub(v2670, v2617);
          sim_r.txns.push({
            kind: 'from',
            to: v2420,
            tok: undefined /* Nothing */
            });
          const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
          const v2701 = stdlib.safeSub(v2697, v2613);
          const v2703 = stdlib.Array_set(v2696, '0', v2701);
          const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
          sim_r.txns.push({
            kind: 'from',
            to: v2604,
            tok: v2319
            });
          const v2712 = stdlib.safeSub(v2423, v2613);
          const v2713 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v2712,
            tokenSupply: v2424
            };
          const v8950 = v2704;
          const v8951 = v2695;
          const v8952 = v2713.closed;
          if (v8952) {
            const v8960 = v2713.manager;
            const v8962 = v2713.token;
            const v8963 = v2713.tokenAmount;
            const v8964 = v2713.tokenSupply;
            const v8965 = v2713.price;
            sim_r.isHalt = false;
            }
          else {
            const v8954 = v2713.manager;
            const v8956 = v2713.token;
            const v8957 = v2713.tokenAmount;
            const v8958 = v2713.tokenSupply;
            const v8959 = v2713.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      undefined /* setApiDetails */;
      const v2613 = v2608[stdlib.checkedBigNumberify('./interface.rsh:244:10:spread', stdlib.UInt_max, '0')];
      const v2615 = stdlib.le(v2613, v2423);
      stdlib.assert(v2615, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:244:24:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:244:24:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'not enough tokens',
        who: 'buy'
        });
      const v2617 = stdlib.safeMul(v2613, v2349);
      const v2670 = stdlib.safeAdd(v2377, v2617);
      ;
      const v2671 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v2672 = v2671[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v2675 = stdlib.Array_set(v2671, '0', v2672);
      const v2676 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2675);
      ;
      const v2683 = null;
      const v2684 = await txn1.getOutput('buy', 'v2683', ctc10, v2683);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v2608, v2684), {
          at: './interface.rsh:244:11:application',
          fs: ['at ./interface.rsh:244:11:application call to [unknown function] (defined at: ./interface.rsh:244:11:function exp)', 'at ./interface.rsh:249:12:application call to "k" (defined at: ./interface.rsh:248:13:function exp)', 'at ./interface.rsh:248:13:application call to [unknown function] (defined at: ./interface.rsh:248:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'buy'
          });
        }
      else {
        }
      
      const v2695 = stdlib.safeSub(v2670, v2617);
      ;
      const v2696 = v2676[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
      const v2697 = v2696[stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0')];
      const v2701 = stdlib.safeSub(v2697, v2613);
      const v2703 = stdlib.Array_set(v2696, '0', v2701);
      const v2704 = stdlib.Array_set(v2676, stdlib.checkedBigNumberify('./interface.rsh:251:34:application', stdlib.UInt_max, '0'), v2703);
      ;
      const v2712 = stdlib.safeSub(v2423, v2613);
      const v2713 = {
        closed: v2421,
        manager: v2420,
        price: v2425,
        token: v2422,
        tokenAmount: v2712,
        tokenSupply: v2424
        };
      const v8950 = v2704;
      const v8951 = v2695;
      const v8952 = v2713.closed;
      if (v8952) {
        const v8960 = v2713.manager;
        const v8962 = v2713.token;
        const v8963 = v2713.tokenAmount;
        const v8964 = v2713.tokenSupply;
        const v8965 = v2713.price;
        return;
        }
      else {
        const v8954 = v2713.manager;
        const v8956 = v2713.token;
        const v8957 = v2713.tokenAmount;
        const v8958 = v2713.tokenSupply;
        const v8959 = v2713.price;
        return;
        }
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc7,
    close0_206: ctc6,
    deposit0_206: ctc7,
    grant0_206: ctc8,
    touch0_206: ctc6,
    update0_206: ctc7,
    withdraw0_206: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2522 = ctc.selfAddress();
  const v2524 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:263:23:application call to [unknown function] (defined at: ./interface.rsh:263:23:function exp)', 'at ./interface.rsh:132:29:application call to "runclose0_206" (defined at: ./interface.rsh:263:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v2526 = stdlib.addressEq(v2522, v2420);
  stdlib.assert(v2526, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:263:23:application call to [unknown function] (defined at: ./interface.rsh:263:23:function exp)', 'at ./interface.rsh:132:29:application call to "runclose0_206" (defined at: ./interface.rsh:263:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can close',
    who: 'close'
    });
  const v2531 = ['close0_206', v2524];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2531],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:263:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:148:14:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v2966 = stdlib.Array_set(v2962, '0', v2963);
          const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
          ;
          const v3011 = null;
          const v3012 = await txn1.getOutput('close', 'v3011', ctc10, v3011);
          
          const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
          const v3024 = stdlib.safeSub(v3020, v2423);
          const v3026 = stdlib.Array_set(v3019, '0', v3024);
          const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
          sim_r.txns.push({
            kind: 'from',
            to: v2420,
            tok: v2319
            });
          const v3034 = {
            closed: true,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v9126 = v3027;
          const v9127 = v2377;
          const v9128 = v3034.closed;
          if (v9128) {
            const v9136 = v3034.manager;
            const v9138 = v3034.token;
            const v9139 = v3034.tokenAmount;
            const v9140 = v3034.tokenSupply;
            const v9141 = v3034.price;
            sim_r.isHalt = false;
            }
          else {
            const v9130 = v3034.manager;
            const v9132 = v3034.token;
            const v9133 = v3034.tokenAmount;
            const v9134 = v3034.tokenSupply;
            const v9135 = v3034.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      undefined /* setApiDetails */;
      ;
      const v2962 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v2963 = v2962[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v2966 = stdlib.Array_set(v2962, '0', v2963);
      const v2967 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v2966);
      ;
      const v3009 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v3009, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can close',
        who: 'close'
        });
      const v3011 = null;
      const v3012 = await txn1.getOutput('close', 'v3011', ctc10, v3011);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v2899, v3012), {
          at: './interface.rsh:263:11:application',
          fs: ['at ./interface.rsh:263:11:application call to [unknown function] (defined at: ./interface.rsh:263:11:function exp)', 'at ./interface.rsh:267:12:application call to "k" (defined at: ./interface.rsh:266:13:function exp)', 'at ./interface.rsh:266:13:application call to [unknown function] (defined at: ./interface.rsh:266:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v3019 = v2967[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
      const v3020 = v3019[stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0')];
      const v3024 = stdlib.safeSub(v3020, v2423);
      const v3026 = stdlib.Array_set(v3019, '0', v3024);
      const v3027 = stdlib.Array_set(v2967, stdlib.checkedBigNumberify('./interface.rsh:268:48:application', stdlib.UInt_max, '0'), v3026);
      ;
      const v3034 = {
        closed: true,
        manager: v2420,
        price: v2425,
        token: v2422,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v9126 = v3027;
      const v9127 = v2377;
      const v9128 = v3034.closed;
      if (v9128) {
        const v9136 = v3034.manager;
        const v9138 = v3034.token;
        const v9139 = v3034.tokenAmount;
        const v9140 = v3034.tokenSupply;
        const v9141 = v3034.price;
        return;
        }
      else {
        const v9130 = v3034.manager;
        const v9132 = v3034.token;
        const v9133 = v3034.tokenAmount;
        const v9134 = v3034.tokenSupply;
        const v9135 = v3034.price;
        return;
        }
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deposit6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc6,
    close0_206: ctc7,
    deposit0_206: ctc6,
    grant0_206: ctc8,
    touch0_206: ctc7,
    update0_206: ctc6,
    withdraw0_206: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2438 = ctc.selfAddress();
  const v2440 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to "rundeposit0_206" (defined at: ./interface.rsh:169:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v2441 = v2440[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2444 = stdlib.addressEq(v2438, v2420);
  stdlib.assert(v2444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to "rundeposit0_206" (defined at: ./interface.rsh:169:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can deposit',
    who: 'deposit'
    });
  const v2446 = stdlib.gt(v2441, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2446, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to "rundeposit0_206" (defined at: ./interface.rsh:169:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'deposit must be greater than 0',
    who: 'deposit'
    });
  const v2453 = ['deposit0_206', v2440];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2453],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:173:10:decimal', stdlib.UInt_max, '0'), [[v2441, v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
          ;
          const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3255 = stdlib.safeAdd(v3254, v3212);
          const v3257 = stdlib.Array_set(v3253, '0', v3255);
          const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
          sim_r.txns.push({
            amt: v3212,
            kind: 'to',
            tok: v2319
            });
          const v3336 = null;
          const v3337 = await txn1.getOutput('deposit', 'v3336', ctc10, v3336);
          
          const v3350 = stdlib.safeAdd(v2423, v3212);
          const v3352 = stdlib.safeAdd(v2424, v3212);
          const v3353 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3350,
            tokenSupply: v3352
            };
          const v9302 = v3258;
          const v9303 = v2377;
          const v9304 = v3353.closed;
          if (v9304) {
            const v9312 = v3353.manager;
            const v9314 = v3353.token;
            const v9315 = v3353.tokenAmount;
            const v9316 = v3353.tokenSupply;
            const v9317 = v3353.price;
            sim_r.isHalt = false;
            }
          else {
            const v9306 = v3353.manager;
            const v9308 = v3353.token;
            const v9309 = v3353.tokenAmount;
            const v9310 = v3353.tokenSupply;
            const v9311 = v3353.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      undefined /* setApiDetails */;
      const v3212 = v3190[stdlib.checkedBigNumberify('./interface.rsh:169:10:spread', stdlib.UInt_max, '0')];
      const v3214 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v3214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can deposit',
        who: 'deposit'
        });
      const v3216 = stdlib.gt(v3212, stdlib.checkedBigNumberify('./interface.rsh:171:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3216, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:169:28:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:169:28:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./interface.rsh:148:14:application call to [unknown function] (defined at: ./interface.rsh:148:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'deposit must be greater than 0',
        who: 'deposit'
        });
      ;
      const v3253 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3254 = v3253[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3255 = stdlib.safeAdd(v3254, v3212);
      const v3257 = stdlib.Array_set(v3253, '0', v3255);
      const v3258 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3257);
      ;
      const v3336 = null;
      const v3337 = await txn1.getOutput('deposit', 'v3336', ctc10, v3336);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v3190, v3337), {
          at: './interface.rsh:169:11:application',
          fs: ['at ./interface.rsh:169:11:application call to [unknown function] (defined at: ./interface.rsh:169:11:function exp)', 'at ./interface.rsh:175:12:application call to "k" (defined at: ./interface.rsh:174:13:function exp)', 'at ./interface.rsh:174:13:application call to [unknown function] (defined at: ./interface.rsh:174:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v3350 = stdlib.safeAdd(v2423, v3212);
      const v3352 = stdlib.safeAdd(v2424, v3212);
      const v3353 = {
        closed: v2421,
        manager: v2420,
        price: v2425,
        token: v2422,
        tokenAmount: v3350,
        tokenSupply: v3352
        };
      const v9302 = v3258;
      const v9303 = v2377;
      const v9304 = v3353.closed;
      if (v9304) {
        const v9312 = v3353.manager;
        const v9314 = v3353.token;
        const v9315 = v3353.tokenAmount;
        const v9316 = v3353.tokenSupply;
        const v9317 = v3353.price;
        return;
        }
      else {
        const v9306 = v3353.manager;
        const v9308 = v3353.token;
        const v9309 = v3353.tokenAmount;
        const v9310 = v3353.tokenSupply;
        const v9311 = v3353.price;
        return;
        }
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc7,
    close0_206: ctc8,
    deposit0_206: ctc7,
    grant0_206: ctc6,
    touch0_206: ctc8,
    update0_206: ctc7,
    withdraw0_206: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2492 = ctc.selfAddress();
  const v2494 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:228:26:application call to [unknown function] (defined at: ./interface.rsh:228:26:function exp)', 'at ./interface.rsh:132:29:application call to "rungrant0_206" (defined at: ./interface.rsh:228:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2498 = stdlib.addressEq(v2492, v2420);
  stdlib.assert(v2498, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:228:26:application call to [unknown function] (defined at: ./interface.rsh:228:26:function exp)', 'at ./interface.rsh:132:29:application call to "rungrant0_206" (defined at: ./interface.rsh:228:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can grant',
    who: 'grant'
    });
  const v2505 = ['grant0_206', v2494];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2505],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:228:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:148:14:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3548 = stdlib.Array_set(v3544, '0', v3545);
          const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
          ;
          const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
          const v3653 = null;
          const v3654 = await txn1.getOutput('grant', 'v3653', ctc10, v3653);
          
          const v3666 = {
            closed: v2421,
            manager: v3648,
            price: v2425,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const v9478 = v3549;
          const v9479 = v2377;
          const v9480 = v3666.closed;
          if (v9480) {
            const v9488 = v3666.manager;
            const v9490 = v3666.token;
            const v9491 = v3666.tokenAmount;
            const v9492 = v3666.tokenSupply;
            const v9493 = v3666.price;
            sim_r.isHalt = false;
            }
          else {
            const v9482 = v3666.manager;
            const v9484 = v3666.token;
            const v9485 = v3666.tokenAmount;
            const v9486 = v3666.tokenSupply;
            const v9487 = v3666.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      undefined /* setApiDetails */;
      ;
      const v3544 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3545 = v3544[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3548 = stdlib.Array_set(v3544, '0', v3545);
      const v3549 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3548);
      ;
      const v3648 = v3481[stdlib.checkedBigNumberify('./interface.rsh:228:10:spread', stdlib.UInt_max, '0')];
      const v3650 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v3650, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can grant',
        who: 'grant'
        });
      const v3653 = null;
      const v3654 = await txn1.getOutput('grant', 'v3653', ctc10, v3653);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v3481, v3654), {
          at: './interface.rsh:228:11:application',
          fs: ['at ./interface.rsh:228:11:application call to [unknown function] (defined at: ./interface.rsh:228:11:function exp)', 'at ./interface.rsh:232:12:application call to "k" (defined at: ./interface.rsh:231:13:function exp)', 'at ./interface.rsh:231:13:application call to [unknown function] (defined at: ./interface.rsh:231:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v3666 = {
        closed: v2421,
        manager: v3648,
        price: v2425,
        token: v2422,
        tokenAmount: v2423,
        tokenSupply: v2424
        };
      const v9478 = v3549;
      const v9479 = v2377;
      const v9480 = v3666.closed;
      if (v9480) {
        const v9488 = v3666.manager;
        const v9490 = v3666.token;
        const v9491 = v3666.tokenAmount;
        const v9492 = v3666.tokenSupply;
        const v9493 = v3666.price;
        return;
        }
      else {
        const v9482 = v3666.manager;
        const v9484 = v3666.token;
        const v9485 = v3666.tokenAmount;
        const v9486 = v3666.tokenSupply;
        const v9487 = v3666.price;
        return;
        }
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc7,
    close0_206: ctc6,
    deposit0_206: ctc7,
    grant0_206: ctc8,
    touch0_206: ctc6,
    update0_206: ctc7,
    withdraw0_206: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2427 = ctc.selfAddress();
  const v2429 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:150:23:application call to [unknown function] (defined at: ./interface.rsh:150:23:function exp)', 'at ./interface.rsh:132:29:application call to "runtouch0_206" (defined at: ./interface.rsh:150:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2431 = stdlib.addressEq(v2427, v2420);
  stdlib.assert(v2431, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:150:23:application call to [unknown function] (defined at: ./interface.rsh:150:23:function exp)', 'at ./interface.rsh:132:29:application call to "runtouch0_206" (defined at: ./interface.rsh:150:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can touch',
    who: 'touch'
    });
  const v2436 = ['touch0_206', v2429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2436],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:150:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:148:14:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v3839 = stdlib.Array_set(v3835, '0', v3836);
          const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
          ;
          const v3964 = null;
          const v3965 = await txn1.getOutput('touch', 'v3964', ctc10, v3964);
          
          const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
          const v3972 = stdlib.safeAdd(v3971, v2377);
          const v3977 = stdlib.safeSub(v3972, v3971);
          sim_r.txns.push({
            kind: 'from',
            to: v2420,
            tok: undefined /* Nothing */
            });
          const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
          const v3980 = (sim_r.txns.push({
            kind: 'info',
            tok: v2319
            }),stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
          const v3981 = stdlib.safeAdd(v3980, v3979);
          const v3983 = stdlib.Array_set(v3978, '0', v3981);
          const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
          const v3992 = stdlib.safeAdd(v2423, v3980);
          const v3994 = stdlib.safeAdd(v2424, v3980);
          const v3995 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v3992,
            tokenSupply: v3994
            };
          const v9654 = v3984;
          const v9655 = v3977;
          const v9656 = v3995.closed;
          if (v9656) {
            const v9664 = v3995.manager;
            const v9666 = v3995.token;
            const v9667 = v3995.tokenAmount;
            const v9668 = v3995.tokenSupply;
            const v9669 = v3995.price;
            sim_r.isHalt = false;
            }
          else {
            const v9658 = v3995.manager;
            const v9660 = v3995.token;
            const v9661 = v3995.tokenAmount;
            const v9662 = v3995.tokenSupply;
            const v9663 = v3995.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      undefined /* setApiDetails */;
      ;
      const v3835 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3836 = v3835[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v3839 = stdlib.Array_set(v3835, '0', v3836);
      const v3840 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v3839);
      ;
      const v3962 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v3962, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can touch',
        who: 'touch'
        });
      const v3964 = null;
      const v3965 = await txn1.getOutput('touch', 'v3964', ctc10, v3964);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v3772, v3965), {
          at: './interface.rsh:150:11:application',
          fs: ['at ./interface.rsh:150:11:application call to [unknown function] (defined at: ./interface.rsh:150:11:function exp)', 'at ./interface.rsh:154:12:application call to "k" (defined at: ./interface.rsh:153:13:function exp)', 'at ./interface.rsh:153:13:application call to [unknown function] (defined at: ./interface.rsh:153:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v3971 = (stdlib.le(await ctc.getBalance(), v2377) ? stdlib.checkedBigNumberify('./interface.rsh:155:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2377));
      const v3972 = stdlib.safeAdd(v3971, v2377);
      const v3977 = stdlib.safeSub(v3972, v3971);
      ;
      const v3978 = v3840[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
      const v3979 = v3978[stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0')];
      const v3980 = (stdlib.le(await ctc.getBalance(v2319), v3979) ? stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2319), v3979));
      const v3981 = stdlib.safeAdd(v3980, v3979);
      const v3983 = stdlib.Array_set(v3978, '0', v3981);
      const v3984 = stdlib.Array_set(v3840, stdlib.checkedBigNumberify('./interface.rsh:156:40:application', stdlib.UInt_max, '0'), v3983);
      const v3992 = stdlib.safeAdd(v2423, v3980);
      const v3994 = stdlib.safeAdd(v2424, v3980);
      const v3995 = {
        closed: v2421,
        manager: v2420,
        price: v2425,
        token: v2422,
        tokenAmount: v3992,
        tokenSupply: v3994
        };
      const v9654 = v3984;
      const v9655 = v3977;
      const v9656 = v3995.closed;
      if (v9656) {
        const v9664 = v3995.manager;
        const v9666 = v3995.token;
        const v9667 = v3995.tokenAmount;
        const v9668 = v3995.tokenSupply;
        const v9669 = v3995.price;
        return;
        }
      else {
        const v9658 = v3995.manager;
        const v9660 = v3995.token;
        const v9661 = v3995.tokenAmount;
        const v9662 = v3995.tokenSupply;
        const v9663 = v3995.price;
        return;
        }
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc6,
    close0_206: ctc7,
    deposit0_206: ctc6,
    grant0_206: ctc8,
    touch0_206: ctc7,
    update0_206: ctc6,
    withdraw0_206: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2475 = ctc.selfAddress();
  const v2477 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:211:27:application call to [unknown function] (defined at: ./interface.rsh:211:27:function exp)', 'at ./interface.rsh:132:29:application call to "runupdate0_206" (defined at: ./interface.rsh:211:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v2478 = v2477[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2481 = stdlib.addressEq(v2475, v2420);
  stdlib.assert(v2481, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:211:27:application call to [unknown function] (defined at: ./interface.rsh:211:27:function exp)', 'at ./interface.rsh:132:29:application call to "runupdate0_206" (defined at: ./interface.rsh:211:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can update',
    who: 'update'
    });
  const v2483 = stdlib.gt(v2478, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2483, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:211:27:application call to [unknown function] (defined at: ./interface.rsh:211:27:function exp)', 'at ./interface.rsh:132:29:application call to "runupdate0_206" (defined at: ./interface.rsh:211:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'update'
    });
  const v2490 = ['update0_206', v2477];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2490],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:211:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:148:14:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4130 = stdlib.Array_set(v4126, '0', v4127);
          const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
          ;
          const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
          const v4297 = null;
          const v4298 = await txn1.getOutput('update', 'v4297', ctc10, v4297);
          
          const v4310 = {
            closed: v2421,
            manager: v2420,
            price: v4290,
            token: v2422,
            tokenAmount: v2423,
            tokenSupply: v2424
            };
          const v9830 = v4131;
          const v9831 = v2377;
          const v9832 = v4310.closed;
          if (v9832) {
            const v9840 = v4310.manager;
            const v9842 = v4310.token;
            const v9843 = v4310.tokenAmount;
            const v9844 = v4310.tokenSupply;
            const v9845 = v4310.price;
            sim_r.isHalt = false;
            }
          else {
            const v9834 = v4310.manager;
            const v9836 = v4310.token;
            const v9837 = v4310.tokenAmount;
            const v9838 = v4310.tokenSupply;
            const v9839 = v4310.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      undefined /* setApiDetails */;
      ;
      const v4126 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v4127 = v4126[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v4130 = stdlib.Array_set(v4126, '0', v4127);
      const v4131 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4130);
      ;
      const v4290 = v4063[stdlib.checkedBigNumberify('./interface.rsh:211:10:spread', stdlib.UInt_max, '0')];
      const v4292 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v4292, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can update',
        who: 'update'
        });
      const v4294 = stdlib.gt(v4290, stdlib.checkedBigNumberify('./interface.rsh:213:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4294, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'price must be greater than 0',
        who: 'update'
        });
      const v4297 = null;
      const v4298 = await txn1.getOutput('update', 'v4297', ctc10, v4297);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v4063, v4298), {
          at: './interface.rsh:211:11:application',
          fs: ['at ./interface.rsh:211:11:application call to [unknown function] (defined at: ./interface.rsh:211:11:function exp)', 'at ./interface.rsh:216:12:application call to "k" (defined at: ./interface.rsh:215:13:function exp)', 'at ./interface.rsh:215:13:application call to [unknown function] (defined at: ./interface.rsh:215:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      const v4310 = {
        closed: v2421,
        manager: v2420,
        price: v4290,
        token: v2422,
        tokenAmount: v2423,
        tokenSupply: v2424
        };
      const v9830 = v4131;
      const v9831 = v2377;
      const v9832 = v4310.closed;
      if (v9832) {
        const v9840 = v4310.manager;
        const v9842 = v4310.token;
        const v9843 = v4310.tokenAmount;
        const v9844 = v4310.tokenSupply;
        const v9845 = v4310.price;
        return;
        }
      else {
        const v9834 = v4310.manager;
        const v9836 = v4310.token;
        const v9837 = v4310.tokenAmount;
        const v9838 = v4310.tokenSupply;
        const v9839 = v4310.price;
        return;
        }
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    buy0_206: ctc6,
    close0_206: ctc7,
    deposit0_206: ctc6,
    grant0_206: ctc8,
    touch0_206: ctc7,
    update0_206: ctc6,
    withdraw0_206: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1]);
  const v2455 = ctc.selfAddress();
  const v2457 = stdlib.protect(ctc6, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:188:29:application call to [unknown function] (defined at: ./interface.rsh:188:29:function exp)', 'at ./interface.rsh:132:29:application call to "runwithdraw0_206" (defined at: ./interface.rsh:188:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v2458 = v2457[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2461 = stdlib.addressEq(v2455, v2420);
  stdlib.assert(v2461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:188:29:application call to [unknown function] (defined at: ./interface.rsh:188:29:function exp)', 'at ./interface.rsh:132:29:application call to "runwithdraw0_206" (defined at: ./interface.rsh:188:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'only manager can withdraw',
    who: 'withdraw'
    });
  const v2463 = stdlib.gt(v2458, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2463, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:188:29:application call to [unknown function] (defined at: ./interface.rsh:188:29:function exp)', 'at ./interface.rsh:132:29:application call to "runwithdraw0_206" (defined at: ./interface.rsh:188:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'withdraw must be greater than 0',
    who: 'withdraw'
    });
  const v2466 = stdlib.le(v2458, v2423);
  stdlib.assert(v2466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:188:29:application call to [unknown function] (defined at: ./interface.rsh:188:29:function exp)', 'at ./interface.rsh:132:29:application call to "runwithdraw0_206" (defined at: ./interface.rsh:188:10:function exp)', 'at ./interface.rsh:132:29:application call to [unknown function] (defined at: ./interface.rsh:132:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: 'withdraw must be less than or equal to token amount',
    who: 'withdraw'
    });
  const v2473 = ['withdraw0_206', v2457];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2319, v2349, v2376, v2377, v2420, v2421, v2422, v2423, v2424, v2425, v2473],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:188:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:148:14:decimal', stdlib.UInt_max, '0'), v2319]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
      
      switch (v2605[0]) {
        case 'buy0_206': {
          const v2608 = v2605[1];
          
          break;
          }
        case 'close0_206': {
          const v2899 = v2605[1];
          
          break;
          }
        case 'deposit0_206': {
          const v3190 = v2605[1];
          
          break;
          }
        case 'grant0_206': {
          const v3481 = v2605[1];
          
          break;
          }
        case 'touch0_206': {
          const v3772 = v2605[1];
          
          break;
          }
        case 'update0_206': {
          const v4063 = v2605[1];
          
          break;
          }
        case 'withdraw0_206': {
          const v4354 = v2605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
          const v4421 = stdlib.Array_set(v4417, '0', v4418);
          const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
          ;
          const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v4615 = null;
          const v4616 = await txn1.getOutput('withdraw', 'v4615', ctc10, v4615);
          
          const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
          const v4628 = stdlib.safeSub(v4624, v4605);
          const v4630 = stdlib.Array_set(v4623, '0', v4628);
          const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
          sim_r.txns.push({
            kind: 'from',
            to: v2420,
            tok: v2319
            });
          const v4639 = stdlib.safeSub(v2423, v4605);
          const v4641 = stdlib.safeSub(v2424, v4605);
          const v4642 = {
            closed: v2421,
            manager: v2420,
            price: v2425,
            token: v2422,
            tokenAmount: v4639,
            tokenSupply: v4641
            };
          const v10006 = v4631;
          const v10007 = v2377;
          const v10008 = v4642.closed;
          if (v10008) {
            const v10016 = v4642.manager;
            const v10018 = v4642.token;
            const v10019 = v4642.tokenAmount;
            const v10020 = v4642.tokenSupply;
            const v10021 = v4642.price;
            sim_r.isHalt = false;
            }
          else {
            const v10010 = v4642.manager;
            const v10012 = v4642.token;
            const v10013 = v4642.tokenAmount;
            const v10014 = v4642.tokenSupply;
            const v10015 = v4642.price;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc1, ctc5, ctc2, ctc0, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2605], secs: v2607, time: v2606, didSend: v1707, from: v2604 } = txn1;
  switch (v2605[0]) {
    case 'buy0_206': {
      const v2608 = v2605[1];
      return;
      break;
      }
    case 'close0_206': {
      const v2899 = v2605[1];
      return;
      break;
      }
    case 'deposit0_206': {
      const v3190 = v2605[1];
      return;
      break;
      }
    case 'grant0_206': {
      const v3481 = v2605[1];
      return;
      break;
      }
    case 'touch0_206': {
      const v3772 = v2605[1];
      return;
      break;
      }
    case 'update0_206': {
      const v4063 = v2605[1];
      return;
      break;
      }
    case 'withdraw0_206': {
      const v4354 = v2605[1];
      undefined /* setApiDetails */;
      ;
      const v4417 = v2376[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v4418 = v4417[stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0')];
      const v4421 = stdlib.Array_set(v4417, '0', v4418);
      const v4422 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./interface.rsh:132:29:dot', stdlib.UInt_max, '0'), v4421);
      ;
      const v4605 = v4354[stdlib.checkedBigNumberify('./interface.rsh:188:10:spread', stdlib.UInt_max, '0')];
      const v4607 = stdlib.addressEq(v2604, v2420);
      stdlib.assert(v4607, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'only manager can withdraw',
        who: 'withdraw'
        });
      const v4609 = stdlib.gt(v4605, stdlib.checkedBigNumberify('./interface.rsh:190:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4609, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'withdraw must be greater than 0',
        who: 'withdraw'
        });
      const v4612 = stdlib.le(v4605, v2423);
      stdlib.assert(v4612, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
        msg: 'withdraw must be less than or equal to token amount',
        who: 'withdraw'
        });
      const v4615 = null;
      const v4616 = await txn1.getOutput('withdraw', 'v4615', ctc10, v4615);
      if (v1707) {
        stdlib.protect(ctc10, await interact.out(v4354, v4616), {
          at: './interface.rsh:188:11:application',
          fs: ['at ./interface.rsh:188:11:application call to [unknown function] (defined at: ./interface.rsh:188:11:function exp)', 'at ./interface.rsh:197:12:application call to "k" (defined at: ./interface.rsh:196:13:function exp)', 'at ./interface.rsh:196:13:application call to [unknown function] (defined at: ./interface.rsh:196:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v4623 = v4422[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
      const v4624 = v4623[stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0')];
      const v4628 = stdlib.safeSub(v4624, v4605);
      const v4630 = stdlib.Array_set(v4623, '0', v4628);
      const v4631 = stdlib.Array_set(v4422, stdlib.checkedBigNumberify('./interface.rsh:198:38:application', stdlib.UInt_max, '0'), v4630);
      ;
      const v4639 = stdlib.safeSub(v2423, v4605);
      const v4641 = stdlib.safeSub(v2424, v4605);
      const v4642 = {
        closed: v2421,
        manager: v2420,
        price: v2425,
        token: v2422,
        tokenAmount: v4639,
        tokenSupply: v4641
        };
      const v10006 = v4631;
      const v10007 = v2377;
      const v10008 = v4642.closed;
      if (v10008) {
        const v10016 = v4642.manager;
        const v10018 = v4642.token;
        const v10019 = v4642.tokenAmount;
        const v10020 = v4642.tokenSupply;
        const v10021 = v4642.price;
        return;
        }
      else {
        const v10010 = v4642.manager;
        const v10012 = v4642.token;
        const v10013 = v4642.tokenAmount;
        const v10014 = v4642.tokenSupply;
        const v10015 = v4642.price;
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
export async function deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _deposit6(ctcTop, interact);}
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
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _touch6(ctcTop, interact);}
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
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _withdraw6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`buy(uint64)byte[0]`, `close()byte[0]`, `deposit(uint64)byte[0]`, `grant(address)byte[0]`, `touch()byte[0]`, `update(uint64)byte[0]`, `withdraw(uint64)byte[0]`],
    pure: [`state()(address,byte,uint64,uint64,uint64,uint64)`],
    sigs: [`buy(uint64)byte[0]`, `close()byte[0]`, `deposit(uint64)byte[0]`, `grant(address)byte[0]`, `state()(address,byte,uint64,uint64,uint64,uint64)`, `touch()byte[0]`, `update(uint64)byte[0]`, `withdraw(uint64)byte[0]`]
    },
  appApproval: `BiAXAAEECAYYAgUhKIj3/9EK+Iz71AzVjp6uDbXcwZkM6/GPnQaFvda4Csve+4MGQSCgjQYpMTkmAwEAAAEBIjUAMRhBCGEpZEkiWzUBJVs1AjYaABdJQQEwIjUEIzUGSSEKDEAAu0khCwxAAIVJIQwMQAAUIQwSRDYaATX/KDT/UCEFr1BCASYhCxJENAFJIQQMQAAvIQQSRChkSTUDVykgNANXSQFQNANXSghQNANXUghQNANXWghQNANXYghQNQdCB9skEkQoZEk1A1cIIDQDVygBUDQDVykIUDQDVzEIUDQDVzkIUDQDV0EIUDUHQgetSSENDEAAEiENEkQ2GgE1/4ABAzT/UEIAoyEKEkQ2GgE1/4ABBTT/UCEFr1BCAI1JIQ4MQAAzSSEPDEAAFiEPEkQ2GgE1/4ABBjT/UCEFr1BCAGkhDhJENhoBNf+AAQI0/1AhBa9QQgBTSSEQDEAAEyEQEkQpNf+AAQQ0/1AyA1BCADmB9biIMBJEKTX/KjT/UDIDUEIAJTYaAhc1BDYaAzYaARdJIQYMQASnSSQMQARcSSEHDEAEHSEHEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSkoiWzX/JVs1/lcQETX9IQhbNfxXKSA1+1dJARc1+oFKWzX5gVJbNfiBWls194FiWzX2STUFNfWABPPyBSA09VCwNPUiVUmBAwxAAhNJIQcMQAEESSEEDEAAnSEEEkQ09VcBCDX0NP1XABFJNfNJVwAINfFXCAk08UxQNfI09Bc18TEANPsSRDTxIg1ENPE0+A5EgAgAAAAAAAASB7ApNQc08lcAETXwsSKyATTxshIkshA0+7IUNP+yEbM0/zT+NPoWUQcINPtQNPYWUDT5FlA0+DTxCRZQNPc08QkWUDIGNPBJIls08QkWNe9XCAk070xQNPxCBN1INPVXAQg19DT9VwARNfM09Bc18jEANPsSRDTyIg1EgAgAAAAAAAAQybApNQc0/zT+NPoWUQcINPtQNPIWUDT5FlA0+BZQNPcWUDIGNPNJVwAINfFXCAk08UxQNPxCBH1JJAxAAKxINP1XABFJNfRJVwAINfJXCAk08kxQNfMxADT7EkSACAAAAAAAAA98sCk1BzIKYDIKeAk0/Ak18rEisgE08rIII7IQNPuyB7M081cAEUk18SJbNfAyCjT/cABINPBKDEAABAlCAANISCI17zT/NP40+hZRBwg0+1A09hZQNPkWUDT4NO8IFlA09zTvCBZQMgY08TTvNPAIFjXuVwgJNO5MUDTyNPwINPIJQgPLSDT1VwEgNfQ0/VcAETXzMQA0+xJEgAgAAAAAAAAORbApNQc0/zT+NPoWUQcINPRQNPYWUDT5FlA0+BZQNPcWUDIGNPNJVwAINfJXCAk08kxQNPxCA3VJIwxAAO1JIQYMQABwSDT1VwEINfQ09Bc18zEANPsSRDTzIg1ENP1XABE18jTzNP+IBIOACAAAAAAAAA0IsCk1BzT/NP40+hZRBwg0+1A09hZQNPkWUDT4NPMIFlA09zTzCBZQMgY08kkiWzTzCBY18VcICTTxTFA0/EIC+Eg0/VcAEUk19ElXAAg18lcICTTyTFA18zEANPsSRIAIAAAAAAAAC8OwKTUHNPNXABE18rEisgE0+LISJLIQNPuyFDT/shGzNP80/io0+1A09hZQNPkWUCWvUCWvUDIGNPJJIls0+AkWNfFXCAk08UxQNPxCAoJINPVXAQg19DT0F0k18zT4DkQ08zT+CzXyNPKIA400/VcAEUk18UlXAAg171cICTTvTFA18IAIAAAAAAAACnuwKTUHsSKyATTysggjshA0+7IHszTwVwARNe+xIrIBNPOyEiSyEDEAshQ0/7IRszT/NP40+hZRBwg0+1A09hZQNPkWUDT4NPMJFlA09xZQMgY070kiWzTzCRY17lcICTTuTFA0/DTyCDTyCUIB1UgkNAESRDQESSISTDQCEhFEKGQ1A4AEkSc087CxIrIBIrISJLIQMgmyFTIKshQ0AyJbshGzQgJYIQYSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhEVsPRLEisgEishIkshAyCbIVMgqyFDQDIQlbshGzQgITSSMMQAC1SCM0ARJENARJIhJMNAISEUQoZEk1A0lJIRJbNf8hCVs1/lcwETX9STUFSSJbNfwlWzX7gATHtgrVNPwWUDT7FlCwMgY0AyERWwxENPwiDUQ0+yINRDT/iAIhNP1XABE1+jT8NP6IAiuxIrIBNP+yCCOyEDQDVwAgsgezgARWUJgEsDT+NPsoMQBQNPsWUDT+FlA0/BZQNPwWUDIGNPpJIls0/AgWNflXCAk0+UxQNP9JCUIAnUghE4gBwCI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/IRJbNf4hCVs1/YEwWzX8gATowVDINP9QNP4WUDT9FlA0/BZQsIERr0k1+1cAESWvNflXCAk0+UxQNfohE4gBZrEisgEishIkshAyCrIUNPyyEbMyBjT9CDX5NP80/hZQNPwWUDT6UDT5FlAoSwFXAElnSCM1ATIGNQJCANc1/zX+Nf01/DX7Nfo0/FcAARdBAE00/FcBIDX5NPwhFFs1+DT8IRVbNfc0/CEWWzX2NPwhCFs19TT6FjT5UCpQNPgWUDT3FlA09hZQNPUWUChLAVcASWdIJDUBMgY1AkIAdTT8VwEgNfk0/CEUWzX4NPwhFVs19zT8IRZbNfY0/CEIWzX1NPoWNPsWUDT+UDT/FlA0+VAoUDT4FlA09xZQNPYWUDT1FlAoSwFXAGpnSCEENQEyBjUCQgAcMRkhBxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 106,
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
                "name": "v2316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2318",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2319",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "name": "v2316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2318",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2319",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
                "name": "v2348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
                    "internalType": "enum _enum_T19",
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
                    "internalType": "struct T17",
                    "name": "_buy0_206",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_206",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_deposit0_206",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_grant0_206",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_206",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_update0_206",
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
                    "internalType": "struct T17",
                    "name": "_withdraw0_206",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v2605",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
    "name": "_reach_oe_v2683",
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
    "name": "_reach_oe_v3011",
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
    "name": "_reach_oe_v3336",
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
    "name": "_reach_oe_v3653",
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
    "name": "_reach_oe_v3964",
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
    "name": "_reach_oe_v4297",
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
    "name": "_reach_oe_v4615",
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
                "name": "v2348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
                    "internalType": "enum _enum_T19",
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
                    "internalType": "struct T17",
                    "name": "_buy0_206",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_206",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_deposit0_206",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_grant0_206",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_206",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_update0_206",
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
                    "internalType": "struct T17",
                    "name": "_withdraw0_206",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v2605",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "deposit",
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
            "name": "tokenSupply",
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
    "inputs": [],
    "name": "touch",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
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
  Bytecode: `0x6080604052604051620038f4380380620038f48339810160408190526200002691620004a5565b600080554360035562000038620002d3565b6040805133815283516020808301919091528085015180516001600160a01b03908116848601529181015160608085019190915281850151608085015201511660a082015290517ff3f7b40e3e3b9f4100b9e92d74f44191fabe2129aaf0490c6d70d95395a3def79181900360c00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000106929091620001ce565b6040820152620001193415600862000251565b62000133438360200151604001516200027c60201b60201c565b60608201526200014262000322565b60208084018051516001600160a01b0390811684528151830151848401529051606090810151909116604080850191909152848101518285015290840151608084015260016000819055439055516200019e918391016200056c565b60405160208183030381529060405260029080519060200190620001c49291906200035e565b505050506200067b565b620001d8620003ed565b60005b60018110156200022e57848160018110620001fa57620001fa62000556565b602002015182826001811062000214576200021462000556565b602002015280620002258162000605565b915050620001db565b508181846001811062000245576200024562000556565b60200201529392505050565b81620002785760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200028b838262000623565b9150811015620002cd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016200026f565b92915050565b6040805160e0810190915260006080820181815260a0830182905260c083019190915281526020810162000306620003ed565b815260200162000315620003ed565b8152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200162000315620003ed565b8280546200036c906200063e565b90600052602060002090601f016020900481019282620003905760008555620003db565b82601f10620003ab57805160ff1916838001178555620003db565b82800160010185558215620003db579182015b82811115620003db578251825591602001919060010190620003be565b50620003e99291506200043a565b5090565b60405180602001604052806001905b62000423604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003fc5790505090565b5b80821115620003e957600081556001016200043b565b604051608081016001600160401b03811182821017156200048257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004a057600080fd5b919050565b600081830360a0811215620004b957600080fd5b604080519081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200050457600080fd5b6200050e62000451565b91506200051e6020850162000488565b82526040840151602083015260608401516040830152620005426080850162000488565b606083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160e08501939192919083860160005b6001811015620005d95782518051835285810151868401528401511515848301529184019190850190600101620005a7565b505050505050608083015160c083015292915050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156200061c576200061c620005ef565b5060010190565b60008219821115620006395762000639620005ef565b500190565b600181811c908216806200065357607f821691505b602082108114156200067557634e487b7160e01b600052602260045260246000fd5b50919050565b613269806200068b6000396000f3fe6080604052600436106100e05760003560e01c806382ab890a11610084578063ab53f2c611610056578063ab53f2c6146101c7578063b6b55f25146101ea578063c19d93fb146101fd578063d96a094a1461026657005b806382ab890a146101845780638323075714610197578063a55526db146101ac578063a7661d54146101b457005b806343d726d6116100bd57806343d726d6146101435780636f8a127c1461014b57806370284d191461015e5780637eea518c1461017157005b80631e93b0f1146100e95780632e1a7d4d1461010d57806342ae229d1461013057005b366100e757005b005b3480156100f557600080fd5b506003545b6040519081526020015b60405180910390f35b61012061011b366004612910565b610279565b6040519015158152602001610104565b6100e761013e366004612929565b6102b4565b6101206102d8565b6100e7610159366004612941565b610308565b61012061016c366004612969565b610328565b6100e761017f366004612986565b61036c565b610120610192366004612910565b61038c565b3480156101a357600080fd5b506001546100fa565b6101206103c7565b6100e76101c2366004612986565b6103f7565b3480156101d357600080fd5b506101dc610417565b6040516101049291906129c4565b6101206101f8366004612910565b6104b4565b34801561020957600080fd5b506102126104ef565b6040805182516001600160a01b039081168252602080850151151590830152838301511691810191909152606080830151908201526080808301519082015260a0918201519181019190915260c001610104565b610120610274366004612910565b610508565b6000610283612448565b6020810180515160069052515160e0015183905261029f612467565b6102a9828261053f565b60c001519392505050565b6102bc612467565b6102d46102ce36849003840184612ae1565b8261154e565b5050565b60006102e2612448565b602081015151600190526102f4612467565b6102fe828261053f565b6020015192915050565b610310612467565b6102d461032236849003840184612ba7565b8261053f565b6000610332612448565b60208101805151600390525151608001516001600160a01b0384169052610357612467565b610361828261053f565b606001519392505050565b610374612467565b6102d461038636849003840184612c8e565b8261186e565b6000610396612448565b6020810180515160059052515160c001518390526103b2612467565b6103bc828261053f565b60a001519392505050565b60006103d1612448565b602081015151600490526103e3612467565b6103ed828261053f565b6080015192915050565b6103ff612467565b6102d461041136849003840184612c8e565b826119be565b60006060600054600280805461042c90612ce4565b80601f016020809104026020016040519081016040528092919081815260200182805461045890612ce4565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b50505050509050915091509091565b60006104be612448565b60208101805151600290525151606001518390526104da612467565b6104e4828261053f565b604001519392505050565b6104f76124a3565b600061050281611ae3565b91505090565b6000610512612448565b6020818101805151600090525151015183905261052d612467565b610537828261053f565b519392505050565b61054f6006600054146030611df3565b815161056a90158061056357508251600154145b6031611df3565b60008080556002805461057c90612ce4565b80601f01602080910402602001604051908101604052809291908181526020018280546105a890612ce4565b80156105f55780601f106105ca576101008083540402835291602001916105f5565b820191906000526020600020905b8154815290600101906020018083116105d857829003601f168201915b505050505080602001905181019061060d9190612db8565b90506106176124ed565b7f2b1ffb2eefd4382c98a7308c2556b232cbd99c4b9e72f4ca8f1ce912b5efd2253385604051610648929190612e65565b60405180910390a1600060208501515151600681111561066a5761066a6129fe565b14156109165760208085015151015180825260e083015190516106909110156017611df3565b80515160208301516106a29190611e19565b602082018190526106b69034146018611df3565b61073e82604001516000604051806060016040528086604001516000600181106106e2576106e2612f1a565b6020020151600001518152602001866040015160006001811061070757610707612f1a565b6020020151602001518152602001866040015160006001811061072c5761072c612f1a565b60200201516040015115159052611e7e565b6040820152815161075d906107569033906000611ef2565b6019611df3565b604051600081527fdbf4274ff3373bef07815594a5448f2967a0c4814f41eea103cb28fd931fe5b59060200160405180910390a16000808452608083015160208301516040516001600160a01b039092169281156108fc029290818181858888f193505050501580156107d4573d6000803e3d6000fd5b5081518151516107e691903390611f0a565b60a082015160608083018051921515909252608084015182516001600160a01b0391821660209091015261012085015183516040015260c08501519251921691015260e082015181515161083a9190611f1e565b60608201805160800191909152610100830151905160a0015261085b612605565b825181516001600160a01b039091169052602080840151825182015260608381015182840180519190915251439201919091526040808401805182519384019092525151518451516108d393600092909182916108b791611f1e565b8152602001866040015160006001811061070757610707612f1a565b8160200151604001819052506108fe6108f484606001518460200151611f6d565b8360200151611f1e565b60208201516060015261091081611fba565b50611548565b6001602085015151516006811115610930576109306129fe565b1415610b17576109423415601a611df3565b61096e82604001516000604051806060016040528086604001516000600181106106e2576106e2612f1a565b6080820152815161098d906109869033906000611ef2565b601b611df3565b6109b082608001516001600160a01b0316336001600160a01b031614601c611df3565b604051600081527fb2735ccda1fc344b85be03b6ced1086f21a0e9dd030b59af22e800fe5e7388e59060200160405180910390a1600060208401528151608083015160e0840151610a02929190611f0a565b60a080820180516001905260808085015182516001600160a01b0391821660209091015261012086015183516040015260c08601518351911660609190910152815160009101819052905190910152610a59612605565b825181516001600160a01b039091169052602080840151825182015260a0830151818301805191909152514391015260808201805160408051606081019091529151515160e0860151610af79360009290918291610ab691611f1e565b81526020018660800151600060018110610ad257610ad2612f1a565b6020020151602001518152602001866080015160006001811061072c5761072c612f1a565b602082018051604001919091526060808501519151015261091081611fba565b6002602085015151516006811115610b3157610b316129fe565b1415610d0f576020840151516060015160c08201526080820151610b61906001600160a01b03163314601d611df3565b60c081015151610b74901515601e611df3565b610b803415601f611df3565b610ba1610b9a3384600001518460c0015160000151611ef2565b6020611df3565b604051600081527f4c6e52350b46a473d16740f4189476e177cf38b9975ca7f72276fcb0e5633db49060200160405180910390a1600060408085019190915260a083015160e08084018051921515909252608085015182516001600160a01b0391821660209091015261012086015183519094019390935260c080860151925192909316606092909201919091528301519082015151610c419190611f6d565b60e08201516080015261010082015160c082015151610c609190611f6d565b60e082015160a00152610c71612605565b825181516001600160a01b039091169052602080840151825182015260e08301518183018051919091525143910152604080840180518251606081019093529051515160c085015151610af79360009290918291610cce91611f6d565b81526020018760400151600060018110610cea57610cea612f1a565b6020020151602001518152602001876040015160006001811061072c5761072c612f1a565b6003602085015151516006811115610d2957610d296129fe565b1415610e9b5760208401515160800151610100820152610d4b34156021611df3565b610d65610d5e3384600001516000611ef2565b6022611df3565b610d8882608001516001600160a01b0316336001600160a01b0316146023611df3565b604051600081527f4083796a481569eb3471c68d04c9bc23c801e6e30a0b0439e86830c56c2d7dec9060200160405180910390a1600060608085019190915260a0808401516101208085018051921515909252610100808601515183516001600160a01b039182166020909101529187015183516040015260c087015183519216919094015260e08501518151608001529184015191510152610e29612605565b825181516001600160a01b03909116905260208084015182518201526101208301518183018051919091525143910152604080840180518251606081019093529051610af7926000918190835b60200201516000015181526020018760400151600060018110610cea57610cea612f1a565b6004602085015151516006811115610eb557610eb56129fe565b141561116457610ec734156024611df3565b610ef382604001516000604051806060016040528086604001516000600181106106e2576106e2612f1a565b6101408201528151610f1390610f0c9033906000611ef2565b6025611df3565b610f3682608001516001600160a01b0316336001600160a01b0316146026611df3565b604051600081527f52acfd0f369f8bbda0ebd728d0474105135661fe067783a0c605318fa3745bc79060200160405180910390a160006080840152606082015147908110610f8a5760608301518103610f8d565b60005b610160830181905260808401516040516001600160a01b03909116925081156108fc0291906000818181858888f19350505050158015610fd1573d6000803e3d6000fd5b506000610fe2836000015130612196565b610140830151515190915081106110025761014082015151518103611005565b60005b610180830190815260a08401516101a084018051911515909152608085015181516001600160a01b0391821660209091015261012086015182516040015260c0860151915191166060919091015260e084015190516110649250611f6d565b6101a0820151608001526101008201516101808201516110849190611f6d565b6101a082015160a00152611096612605565b825181516001600160a01b03909116905260208084015182518201526101a0830151818301805191909152514391015261014082018051604080516060810190915261018085015192515151611138936000929182916110f591611f6d565b815260200186610140015160006001811061111257611112612f1a565b602002015160200151815260200186610140015160006001811061072c5761072c612f1a565b60208201516040015261016082015160608401516108fe9161115991611f6d565b836101600151611f1e565b600560208501515151600681111561117e5761117e6129fe565b14156112e75760208401515160c001516101c08201526111a034156027611df3565b6111ba6111b33384600001516000611ef2565b6028611df3565b6111dd82608001516001600160a01b0316336001600160a01b0316146029611df3565b6101c0810151516111f1901515602a611df3565b604051600081527f1e9e1106fa02f998810d919b80688f943c9e438b984363de260104ee1ace4a9c9060200160405180910390a1600060a080850191909152828101516101e08301805191151590915260808085015182516001600160a01b039182166020909101526101c08501515183516040015260c0860151835191166060919091015260e0850151825190910152610100840151905190910152611296612605565b825181516001600160a01b03909116905260208084015182518201526101e08301518183018051919091525143910152604080840180518251606081019093529051610af792600091819083610e76565b6006602085015151516006811115611301576113016129fe565b14156115485760208401515160e001516102008201526113233415602b611df3565b61134f82604001516000604051806060016040528086604001516000600181106106e2576106e2612f1a565b610220820152815161136f906113689033906000611ef2565b602c611df3565b61139282608001516001600160a01b0316336001600160a01b031614602d611df3565b610200810151516113a6901515602e611df3565b6113c18260e00151826102000151600001511115602f611df3565b604051600081527fc051e5424fe2b416a10d4851e043a65a5766565b4f5b541ca7ae421f22e606309060200160405180910390a1600060c08401528151608083015161020083015151611415929190611f0a565b60a082015161024082018051911515909152608083015181516001600160a01b0391821660209091015261012084015182516040015260c0840151915191166060919091015260e0820151610200820151516114719190611f1e565b61024082015160800152610100820151610200820151516114929190611f1e565b61024082015160a001526114a4612605565b825181516001600160a01b039091169052602080840151825182015261024083015181830180519190915251439101526102208201805160408051606081019091529151515161020085015151610af7936000929091829161150591611f1e565b815260200186610220015160006001811061152257611522612f1a565b602002015160200151815260200186610220015160006001811061072c5761072c612f1a565b50505050565b61155e600160005414600d611df3565b815161157990158061157257508251600154145b600e611df3565b60008080556002805461158b90612ce4565b80601f01602080910402602001604051908101604052809291908181526020018280546115b790612ce4565b80156116045780601f106115d957610100808354040283529160200191611604565b820191906000526020600020905b8154815290600101906020018083116115e757829003601f168201915b505050505080602001905181019061161c9190612f30565b905061162661262e565b61163782608001514310600f611df3565b604080513381528551602080830191909152808701518051838501520151606082015290517f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939181900360800190a16020840151516116999015156009611df3565b6116af600085602001516020015111600a611df3565b6116c082602001513414600b611df3565b6116e16116da338460400151876020015160000151611ef2565b600c611df3565b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561171e573d6000803e3d6000fd5b506040517fe3186c9b3140de057ac0af103f783a8c4cf8db1215158bfd3a04a74b4a6c582f90600090a1805160009052805133602091820152848101805190910151825160409081019190915283015182516001600160a01b039091166060909101528051518251608001525151815160a0015261179a612605565b60408381015182516001600160a01b0390911690526020868101805182015184518301528451828501805191909152514392019190915260608086018051845192830190945251515191515161183b93926000929182916117fa91611f6d565b8152602001876060015160006001811061181657611816612f1a565b6020020151602001518152602001876060015160006001811061072c5761072c612f1a565b602080830151604001919091528301516118559080611f1e565b60208201516060015261186781611fba565b5050505050565b61187e6001600054146011611df3565b815161189990158061189257508251600154145b6012611df3565b6000808055600280546118ab90612ce4565b80601f01602080910402602001604051908101604052809291908181526020018280546118d790612ce4565b80156119245780601f106118f957610100808354040283529160200191611924565b820191906000526020600020905b81548152906001019060200180831161190757829003601f168201915b505050505080602001905181019061193c9190612f30565b905061195081608001514310156013611df3565b60408051338152845160208083019190915285015115158183015290517f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9509181900360600190a16119a334156010611df3565b600080805560018190556119b990600290612641565b505050565b6119ce6004600054146015611df3565b81516119e99015806119e257508251600154145b6016611df3565b6000808055600280546119fb90612ce4565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2790612ce4565b8015611a745780601f10611a4957610100808354040283529160200191611a74565b820191906000526020600020905b815481529060010190602001808311611a5757829003601f168201915b5050505050806020019051810190611a8c9190612fb6565b60408051338152855160208083019190915286015115158183015290519192507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722919081900360600190a16119a334156014611df3565b611aeb6124a3565b60016000541415611ba657600060028054611b0590612ce4565b80601f0160208091040260200160405190810160405280929190818152602001828054611b3190612ce4565b8015611b7e5780601f10611b5357610100808354040283529160200191611b7e565b820191906000526020600020905b815481529060010190602001808311611b6157829003601f168201915b5050505050806020019051810190611b969190612f30565b9050611ba460006007611df3565b505b60046000541415611cc457600060028054611bc090612ce4565b80601f0160208091040260200160405190810160405280929190818152602001828054611bec90612ce4565b8015611c395780601f10611c0e57610100808354040283529160200191611c39565b820191906000526020600020905b815481529060010190602001808311611c1c57829003601f168201915b5050505050806020019051810190611c519190612fb6565b9050611c5b61267b565b60208083015182516001600160a01b039182169052604080850151845190151593019290925260608085015184519216919092015260808084015183519092019190915260a08084015183519092019190915260c0909201518151909201919091525192915050565b60066000541415611de257600060028054611cde90612ce4565b80601f0160208091040260200160405190810160405280929190818152602001828054611d0a90612ce4565b8015611d575780601f10611d2c57610100808354040283529160200191611d57565b820191906000526020600020905b815481529060010190602001808311611d3a57829003601f168201915b5050505050806020019051810190611d6f9190612db8565b9050611d7961267b565b60808083015182516001600160a01b03918216905260a080850151845190151560209091015260c08501518451921660409092019190915260e0840151835160600152610100840151835190920191909152610120909201518151909201919091525192915050565b611dee60006007611df3565b919050565b816102d45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000811580611e3d57508282611e2f8183613074565b9250611e3b9083613093565b145b611e785760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611e10565b92915050565b611e8661268e565b60005b6001811015611ed257848160018110611ea457611ea4612f1a565b6020020151828260018110611ebb57611ebb612f1a565b602002015280611eca816130b5565b915050611e89565b5081818460018110611ee657611ee6612f1a565b60200201529392505050565b6000611f0083853085612262565b90505b9392505050565b611f1583838361233c565b6119b957600080fd5b600082611f2b83826130d0565b9150811115611e785760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611e10565b600082611f7a83826130e7565b9150811015611e785760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611e10565b60208101515151156120f2576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b039081168252602080840180515182015183168285015260016040808601829052825151606090810151909516948601949094528151516080908101519086015281515160a0908101519086015290515183015160c0850152600460005543905590516120ce9183910181516001600160a01b039081168252602080840151821690830152604080840151151590830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906119b99291906126d9565b6120fa61275d565b8151516001600160a01b0390811682528251602090810151818401528084018051604090810151818601528151606090810151818701528251518401518516608080880191909152600060a08089018290528551519093015190961660c0880152835151015160e0870152825151015161010086015290515181015161012085015260069092554360015590516120ce9183910161313d565b50565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b1790529151600092839283929187169183916121f1916131e1565b60006040518083038185875af1925050503d806000811461222e576040519150601f19603f3d011682016040523d82523d6000602084013e612233565b606091505b50915091506122448282600661240d565b508080602001905181019061225991906131fd565b95945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916122c9916131e1565b60006040518083038185875af1925050503d8060008114612306576040519150601f19603f3d011682016040523d82523d6000602084013e61230b565b606091505b509150915061231c8282600161240d565b50808060200190518101906123319190613216565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161239b916131e1565b60006040518083038185875af1925050503d80600081146123d8576040519150601f19603f3d011682016040523d82523d6000602084013e6123dd565b606091505b50915091506123ee8282600261240d565b50808060200190518101906124039190613216565b9695505050505050565b6060831561241c575081611f03565b82511561242c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611e10565b6040518060400160405280600081526020016124626127c8565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040805161028081018252600061026082018181528252602082015290810161251461268e565b81526020016125216127db565b815260200161252e61268e565b815260200161253b6127db565b81526020016125566040518060200160405280600081525090565b81526020016125636127db565b8152604080516020808201835260008252830152016125806127db565b815260200161258d61268e565b815260200160008152602001600081526020016125a86127db565b81526020016125c36040518060200160405280600081525090565b81526020016125d06127db565b81526020016125eb6040518060200160405280600081525090565b81526020016125f861268e565b81526020016124626127db565b604080516080810182526000918101828152606082019290925290815260208101612462612825565b60405180602001604052806124626127db565b50805461264d90612ce4565b6000825580601f1061265d575050565b601f0160209004906000526020600020908101906121939190612859565b60405180602001604052806124626124a3565b60405180602001604052806001905b6126c3604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161269d5790505090565b8280546126e590612ce4565b90600052602060002090601f016020900481019282612707576000855561274d565b82601f1061272057805160ff191683800117855561274d565b8280016001018555821561274d579182015b8281111561274d578251825591602001919060010190612732565b50612759929150612859565b5090565b60408051610140810182526000808252602082015290810161277d61268e565b81526020016000815260200160006001600160a01b0316815260200160001515815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b604051806020016040528061246261286e565b6040518060c0016040528060001515815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180608001604052806128386127db565b81526020016000815260200161284c61268e565b8152602001600081525090565b5b80821115612759576000815560010161285a565b60408051610100810190915280600081526020016128986040518060200160405280600081525090565b81526020016000151581526020016128bc6040518060200160405280600081525090565b81526040805160208181019092526000815291019081526020016000151581526020016128f56040518060200160405280600081525090565b81526020016124626040518060200160405280600081525090565b60006020828403121561292257600080fd5b5035919050565b60006060828403121561293b57600080fd5b50919050565b6000610120828403121561293b57600080fd5b6001600160a01b038116811461219357600080fd5b60006020828403121561297b57600080fd5b8135611f0381612954565b60006040828403121561293b57600080fd5b60005b838110156129b357818101518382015260200161299b565b838111156115485750506000910152565b82815260406020820152600082518060408401526129e9816060850160208701612998565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612a4d57612a4d612a14565b60405290565b6040516020810167ffffffffffffffff81118282101715612a4d57612a4d612a14565b604051610100810167ffffffffffffffff81118282101715612a4d57612a4d612a14565b6040516060810167ffffffffffffffff81118282101715612a4d57612a4d612a14565b604051610140810167ffffffffffffffff81118282101715612a4d57612a4d612a14565b60008183036060811215612af457600080fd5b612afc612a2a565b833581526040601f1983011215612b1257600080fd5b612b1a612a2a565b60208581013582526040909501358582015293810193909352509092915050565b600060208284031215612b4d57600080fd5b612b55612a53565b9135825250919050565b801515811461219357600080fd5b8035611dee81612b5f565b600060208284031215612b8a57600080fd5b612b92612a53565b90508135612b9f81612954565b815292915050565b6000818303610120811215612bbb57600080fd5b612bc3612a2a565b8335815261010080601f1984011215612bdb57600080fd5b612be3612a53565b9250612bed612a76565b602086013560078110612bff57600080fd5b8152612c0e8760408801612b3b565b6020820152612c1f60608701612b6d565b6040820152612c318760808801612b3b565b6060820152612c438760a08801612b78565b6080820152612c5460c08701612b6d565b60a0820152612c668760e08801612b3b565b60c0820152612c7787838801612b3b565b60e082015283525060208101919091529392505050565b600060408284031215612ca057600080fd5b6040516040810181811067ffffffffffffffff82111715612cc357612cc3612a14565b604052823581526020830135612cd881612b5f565b60208201529392505050565b600181811c90821680612cf857607f821691505b6020821081141561293b57634e487b7160e01b600052602260045260246000fd5b8051611dee81612954565b8051611dee81612b5f565b600082601f830112612d4057600080fd5b612d48612a53565b80606080850186811115612d5b57600080fd5b855b81811015612dac57828189031215612d755760008081fd5b612d7d612a9a565b8151815260208083015181830152604080840151612d9a81612b5f565b90830152908652909401938201612d5d565b50919695505050505050565b60006101808284031215612dcb57600080fd5b612dd3612abd565b612ddc83612d19565b815260208301516020820152612df58460408501612d2f565b604082015260a08301516060820152612e1060c08401612d19565b6080820152612e2160e08401612d24565b60a0820152610100612e34818501612d19565b60c08301526101208085015160e0840152610140850151828401526101608501518184015250508091505092915050565b6001600160a01b038316815281516020808301919091528201515180516101408301919060078110612ea757634e487b7160e01b600052602160045260246000fd5b60408401526020810151805160608501525060408101518015156080850152506060810151805160a085015250608081015180516001600160a01b031660c08501525060a081015180151560e08501525060c081015180516101008501525060e001518051610120840152509392505050565b634e487b7160e01b600052603260045260246000fd5b600060e08284031215612f4257600080fd5b60405160a0810181811067ffffffffffffffff82111715612f6557612f65612a14565b6040528251612f7381612954565b8152602083810151908201526040830151612f8d81612954565b6040820152612f9f8460608501612d2f565b606082015260c09290920151608083015250919050565b600060e08284031215612fc857600080fd5b60405160e0810181811067ffffffffffffffff82111715612feb57612feb612a14565b6040528251612ff981612954565b8152602083015161300981612954565b6020820152604083015161301c81612b5f565b6040820152606083015161302f81612954565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561308e5761308e61305e565b500290565b6000826130b057634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156130c9576130c961305e565b5060010190565b6000828210156130e2576130e261305e565b500390565b600082198211156130fa576130fa61305e565b500190565b8060005b6001811015611548578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613103565b81516001600160a01b03168152610180810160208301516020830152604083015161316b60408401826130ff565b50606083015160a083015260808301516001600160a01b03811660c08401525060a083015180151560e08401525060c08301516101006131b5818501836001600160a01b03169052565b60e085015191506101208281860152818601516101408601528086015161016086015250505092915050565b600082516131f3818460208701612998565b9190910192915050565b60006020828403121561320f57600080fd5b5051919050565b60006020828403121561322857600080fd5b8151611f0381612b5f56fea2646970667358221220189a16dd11d44a4a5e811d74589b353eb5d403add252631f1498ca6f82c9cd4964736f6c634300080c0033`,
  BytecodeLen: 14580,
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
    at: './interface.rsh:117:15:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './interface.rsh:281:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:283:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './interface.rsh:132:29:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:96:26:function exp)'],
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
  "deposit": deposit,
  "grant": grant,
  "touch": touch,
  "update": update,
  "withdraw": withdraw
  };
export const _APIs = {
  buy: buy,
  close: close,
  deposit: deposit,
  grant: grant,
  touch: touch,
  update: update,
  withdraw: withdraw
  };
