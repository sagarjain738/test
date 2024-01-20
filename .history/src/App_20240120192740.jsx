import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTotalData } from "../Data";
import SecondChart from "./components/SecondData";
import TotalPieChart from "./components/PieChart";

function App() {
  const firstRecord = getTotalData(totalData);
  // console.log(firstRecord);
  return (
    <>
      {/* <FirstChart records={firstRecord} /> */}
      {/* <SecondChart records={firstRecord} /> */}
      <TotalPieChart />
    </>
  );
}

export default App;
