/**
 * The App file. It should stay as simple as possible
 */

import React, { Fragment, useRef } from "react";
import { BryntumDemoHeader, BryntumGantt } from "@bryntum/gantt-react";
import { ganttConfig } from "./AppConfig";
import { Toast } from "@bryntum/gantt";
import "./App.scss";

const App = () => {
  const ganttRef = useRef();
  return (
    <Fragment>
      {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
      <BryntumDemoHeader />
      <BryntumGantt {...ganttConfig} ref={ganttRef} />
    </Fragment>
  );
};

export default App;

Toast.show({
  color: "b-orange",
  html: `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
  timeout: 10000,
});
