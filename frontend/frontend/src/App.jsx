import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoanForm from "./pages/Loanform";
import Settlement from "./pages/Settlement";
import Negotiation from "./pages/Negotiation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/settlement" element={<Settlement />} />
        <Route path="/negotiation" element={<Negotiation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;