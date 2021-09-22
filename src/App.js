import React from "react";
import "./App.css";
import CountryBarGraph from "./components/CountryBarGraph";
import { PhaseResponseCurve } from "./components/PhaseResponseCurve";
// import { PhaseShift } from './components/PhaseShift';

function App() {
  // const losAngeles = [
  //   {time: "6PM", shift: 0},
  //   {time: "9PM", shift: -1.2},
  //   {time: "12AM", shift: -3.1},
  //   {time: "3AM", shift: -3.5},
  //   {time: "6AM", shift: 0},
  //   {time: "9AM", shift: 3.5},
  //   {time: "12PM", shift: 4},
  //   {time: "3PM", shift: 2},
  //   {time: "6PM", shift: 0},
  //   ];
  return (
    <div className="App">
      <CountryBarGraph />
      <PhaseResponseCurve />
      {/* <PhaseShift data={losAngeles} /> */}
      <header className="App-header">JETLAG</header>
    </div>
  );
}

export default App;
