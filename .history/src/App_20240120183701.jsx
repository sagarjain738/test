import { useState } from "react";
import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTodalData } from "../Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SalesBarChart data={totalData} />
    </>
  );
}

export default App;
