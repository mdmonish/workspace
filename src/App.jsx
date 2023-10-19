import Form from "./Form";
import DashboardComponent from "./DashboardComponent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
    </div>
  );
};

export default App;
