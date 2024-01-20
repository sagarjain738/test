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
      <div className="container">
        <FirstChart records={firstRecord} monthNames={monthNames.slice(1)} />
        <SecondChart records={firstRecord} monthNames={monthNames.slice(1)} />
        <BasicTable records={firstRecord} monthNames={monthNames} />
        <TotalPieChart records={total} monthNames={monthNames} />
      </div>
    </>
  );
}

export default App;
