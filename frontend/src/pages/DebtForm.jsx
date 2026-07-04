export default function DebtForm() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2563eb" }}>
          Add Loan Details
        </h1>

        <input
          placeholder="Loan Amount"
          style={inputStyle}
        />

        <input
          placeholder="Monthly EMI"
          style={inputStyle}
        />

        <input
          placeholder="Monthly Income"
          style={inputStyle}
        />

        <input
          placeholder="Overdue Months"
          style={inputStyle}
        />

        <button style={btnStyle}>
          Save Debt
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const btnStyle = {
  width: "100%",
  marginTop: "25px",
  padding: "14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "17px",
  cursor: "pointer",
};