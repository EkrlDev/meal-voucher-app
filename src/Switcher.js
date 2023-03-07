import React, { useContext } from "react";
import Switcher from "react-switcher-rc";
import { tempContext } from "./tempContext";

export default function App({ onChange }) {
  const tempCtx = useContext(tempContext);
  const onchangeHandler = () => {
    onChange();
  };

  return (
    <div className="tempSwitch">
      <Switcher
        name="my-switcher"
        onChange={onchangeHandler}
        checked={!tempCtx}
        checkedIcon="Day"
        unCheckedIcon="Night"
        onColor="#0f0f0f"
        borderColor={tempCtx ? "rgba(255,255,255)" : "rgba(0,0,0)"}
      />
    </div>
  );
}
