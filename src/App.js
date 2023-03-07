import React from "react";
import { useReducer, useState } from "react";
import { initialState, voucherReducer } from "./voucherReducer";
import "./styles.css";
import { tempContext } from "./tempContext";
import Voucher from "./Voucher";

const VoucherApp = () => {
  const [state, dispatch] = useReducer(voucherReducer, initialState);
  const [switcherState, setSwitcherState] = useState(false);

  const onHandleChange = () => setSwitcherState(!switcherState);

  return (
    <tempContext.Provider value={switcherState}>
      <Voucher dispatch={dispatch} state={state} onHandle={onHandleChange} />
    </tempContext.Provider>
  );
};

export default VoucherApp;
