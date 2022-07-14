import React from "react";
import ReactDOM from "react-dom";

import init, { App, WasmReact } from "./src/lib.rs";

init().then(() => {
  WasmReact.useReact(React);

  ReactDOM.render(
    <App width={10} height={25} />,
    document.getElementById("root")
  );
});
