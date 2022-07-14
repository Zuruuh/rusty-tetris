import React from "react";
import ReactDOM from "react-dom";

import init, { App, WasmReact } from "./pkg/rust_wasm_tetris.js";

init().then(() => {
  WasmReact.useReact(React);

  ReactDOM.render(
    <App width={10} height={25} />,
    document.getElementById("root")
  );
});
