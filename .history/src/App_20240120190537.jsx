import "./App.css";
import FirstChart from "./components/FirstChart";
import totalData, { getTodalData } from "../Data";
import SecondChart from "./components/SecondData";

function App() {
  const firstRecord = getTodalData(totalData);
  console.log(firstRecord);
  return (
    <>
      {/* <FirstChart records={firstRecord} /> */}
      <SecondChart records={firstRecord} />
    </>
  );
}

export default App;
