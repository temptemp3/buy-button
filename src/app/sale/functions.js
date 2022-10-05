export const somethingFromSome = (f, d) => some => some[1] ? f(some[1]) : d;

export const getView = async (reach, ctc) => {
    const {
      manager,
      closed,
      token,
      tokenAmount,
      price,
    } = somethingFromSome(
      (a) => ({
        manager: reach.formatAddress(a.manager),
        closed: a.closed,
        token: reach.bigNumberToNumber(a.token),
        tokenAmount: reach.bigNumberToNumber(a.tokenAmount),
        price: reach.bigNumberToNumber(a.price),
      }),
      {
        manager: "0x0000000000000000000000000000000000000000",
        closed: false,
        token: 0,
        tokenAmount: 0,
        price: 0,
        decimals: 0,
      }
    )(await ctc.v.state());
    const view = {
      manager,
      closed,
      token,
      tokenAmount,
      price,
    };
    return view;
  };
