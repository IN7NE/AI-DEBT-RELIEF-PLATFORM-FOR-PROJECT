export default function Finance() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Finance Planner</h1>

      <form style={{ width: "400px" }}>
        <input
          type="number"
          placeholder="Monthly Income"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="number"
          placeholder="Monthly Expenses"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button>Calculate</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h3>Monthly Surplus : ₹0</h3>
        <h3>EMI Ratio : 0%</h3>
      </div>
    </div>
  );
}