// Initital entry point of application.
//App() requires the employee component which is the overarching component.

import React from "react";
import Employees from "./components/Employees/employees";
import "./App.css";

function App() {
  return (
    <>
      <Employees />
    </>
  );
}

export default App;
