import { Link } from "react-router-dom";

export default function Dashboard() {
  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "220px",
  };

  return (
    <div style={{ padding: "40px", background: "#f4f6f9", minHeight: "100vh" }}>
      <h1>AI Debt Relief Dashboard</h1>
      <p>Welcome to your financial recovery portal.</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Debt</h3>
          <h2>₹2,50,000</h2>
        </div>

        <div style={cardStyle}>
          <h3>Monthly EMI</h3>
          <h2>₹18,000</h2>
        </div>

        <div style={cardStyle}>
          <h3>Health Score</h3>
          <h2>72 / 100</h2>
        </div>

        <div style={cardStyle}>
          <h3>Risk Level</h3>
          <h2>Medium</h2>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Link to="/debts">
          <button>Add Debt</button>
        </Link>{" "}

        <Link to="/finance">
          <button>Finance Planner</button>
        </Link>{" "}

        <Link to="/analysis">
          <button>AI Analysis</button>
        </Link>
      </div>
    </div>
  );
}