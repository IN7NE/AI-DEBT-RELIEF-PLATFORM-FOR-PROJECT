import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartLine,
  FaHandshake,
  FaFileSignature,
} from "react-icons/fa";

export default function Navbar() {
  const navStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-white text-blue-900 shadow-md font-semibold"
        : "text-white hover:bg-blue-700 hover:scale-105"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
            💰
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              Financial Recovery
            </h1>

            <p className="text-blue-200 text-sm">
              Smart Debt Settlement Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3">

          <NavLink to="/" className={navStyle}>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/loan-form" className={navStyle}>
            <FaFileAlt />
            Loan Form
          </NavLink>

          <NavLink to="/dashboard" className={navStyle}>
            <FaChartLine />
            Dashboard
          </NavLink>

          <NavLink to="/settlement" className={navStyle}>
            <FaHandshake />
            Settlement
          </NavLink>

          <NavLink to="/negotiation" className={navStyle}>
            <FaFileSignature />
            Negotiation
          </NavLink>

        </div>
      </div>
    </nav>
  );
}