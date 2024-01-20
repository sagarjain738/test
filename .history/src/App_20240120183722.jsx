import { useState } from "react";
import "./App.css";
import totalData, { getTodalData } from "../Data";
import SalesBarChart from "./components/FirstChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SalesBarChart data={totalData} />
    </>
  );
}

export default App;
