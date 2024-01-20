import { useState } from "react";
import "./App.css";
import FirstChart from "./components/FirstChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstChart />
    </>
  );
}

export default App;
