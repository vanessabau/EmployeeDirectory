import React from "react";
import Employees from "./components/Employees/employees";
import Jumbo from "./components/Jumbo/jumbo";
import SearchForm from "./components/Search/searchform";
import Counter from "./components/Counter/counter";
import "./App.css";

function App() {
  return (
    <>
      <Jumbo></Jumbo>
      <main className="container">
        <SearchForm />
        <Counter />
        <Employees />
      </main>
    </>
  );
}

export default App;
