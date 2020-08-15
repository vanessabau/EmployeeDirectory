import React from "react";
import Employees from "./components/Employees/employees";
import Jumbo from "./components/common/jumbo";

import Counter from "./components/common/counter";
import "./App.css";

function App() {
  return (
    <>
      <Jumbo></Jumbo>
      <main className="container">
        <Counter />
        <Employees />
      </main>
    </>
  );
}

export default App;
