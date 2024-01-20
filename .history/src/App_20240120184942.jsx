import { useState } from "react";
import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTodalData } from "../Data";

function App() {
  const records = getTodalData(totalData);
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstChart />
    </>
  );
}

export default App;
