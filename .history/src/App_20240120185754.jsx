import { useState } from "react";
import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTodalData } from "../Data";
import SecondChart from "./components/SecondData";

function App() {
  const firstRecord = getTodalData(totalData);
  const secondRecord = getTodalData(totalData);
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstChart records={firstRecord} />
      <SecondChart records={secondRecord} />
    </>
  );
}

export default App;
