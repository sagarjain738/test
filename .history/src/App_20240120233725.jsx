import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTotalData, getTotal, getMonths } from "../Data";
import SecondChart from "./components/SecondData";
import TotalPieChart from "./components/PieChart";
import BasicTable from "./components/Table";

function App() {
  const firstRecord = getTotalData(totalData);
  const total = getTotal(totalData);
  const monthNames = getMonths();
  return (
    <>
      {/* <FirstChart records={firstRecord} monthNames={monthNames.slice(1)} />
      <SecondChart records={firstRecord} monthNames={monthNames.slice(1)} /> */}
      <BasicTable records={firstRecord} />
      {/* <TotalPieChart records={total} monthNames={monthNames} /> */}
    </>
  );
}

export default App;
