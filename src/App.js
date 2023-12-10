import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeProfiles from "./pages/EmployeeProfiles";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";
import Applications from "./pages/Applications";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div style={{ backgroundColor: "#4FC0C1", height: "100vh" }}>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-profiles" element={<EmployeeProfiles />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
