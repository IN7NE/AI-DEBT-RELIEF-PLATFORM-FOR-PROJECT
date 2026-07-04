export default function DebtForm() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Debt Management</h1>

      <form style={{ width: "400px" }}>
        <input
          type="text"
          placeholder="Loan Name"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="number"
          placeholder="Outstanding Amount"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="number"
          placeholder="Monthly EMI"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="number"
          placeholder="Interest Rate"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button type="submit">Save Debt</button>
      </form>
    </div>
  );
}