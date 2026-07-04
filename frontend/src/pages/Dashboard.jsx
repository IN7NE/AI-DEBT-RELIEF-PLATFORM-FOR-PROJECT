import { Link } from "react-router-dom";

const cardStyle = {
  background: "#fff",
  borderRadius: "15px",
  padding: "25px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
};

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "42px",
          }}
        >
          AI Debt Relief Dashboard
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "45px",
            fontSize: "18px",
          }}
        >
          Welcome to your financial recovery portal
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h2>Total Debt</h2>
            <h1>₹2,50,000</h1>
          </div>

          <div style={cardStyle}>
            <h2>Monthly EMI</h2>
            <h1>₹18,000</h1>
          </div>

          <div style={cardStyle}>
            <h2>Health Score</h2>
            <h1>72 / 100</h1>
          </div>

          <div style={cardStyle}>
            <h2>Risk Level</h2>
            <h1 style={{ color: "orange" }}>Medium</h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "55px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/debts">
            <button
              style={{
                padding: "14px 30px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Add Debt
            </button>
          </Link>

          <Link to="/finance">
            <button
              style={{
                padding: "14px 30px",
                border: "none",
                borderRadius: "8px",
                background: "#16a34a",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Finance Planner
            </button>
          </Link>

          <Link to="/analysis">
            <button
              style={{
                padding: "14px 30px",
                border: "none",
                borderRadius: "8px",
                background: "#7c3aed",
                color: "#fff",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              AI Analysis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}