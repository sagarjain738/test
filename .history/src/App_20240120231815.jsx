import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTotalData, getTotal } from "../Data";
import SecondChart from "./components/SecondData";
import TotalPieChart from "./components/PieChart";
import BasicTable from "./components/Table";

function App() {
  const firstRecord = getTotalData(totalData);
  const total = getTotal(totalData);

  return (
    <>
      <FirstChart records={firstRecord} />
      <SecondChart records={firstRecord} />
      {/* <BasicTable records={firstRecord} /> */}
      {/* <TotalPieChart records={total} /> */}
    </>
  );
}

export default App;
