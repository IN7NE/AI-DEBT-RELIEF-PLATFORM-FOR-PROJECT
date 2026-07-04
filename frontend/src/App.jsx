import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DebtForm from "./pages/DebtForm";
import Finance from "./pages/Finance";
import AIAnalysis from "./pages/AIAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/debts" element={<DebtForm />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/analysis" element={<AIAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;