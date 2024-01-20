import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTotalData, getTotal } from "../Data";
import SecondChart from "./components/SecondData";
import TotalPieChart from "./components/PieChart";

function App() {
  const firstRecord = getTotalData(totalData);
  const total = getTotal(totalData);

  return (
    <>
      <FirstChart records={firstRecord} />
      <SecondChart records={firstRecord} />
      <TotalPieChart records={total} />
    </>
  );
}

export default App;
