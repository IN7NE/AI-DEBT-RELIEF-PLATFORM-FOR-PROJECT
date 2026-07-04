export default function Finance() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "30px",
          }}
        >
          Financial Recovery Planner
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={cell}>Category</th>
              <th style={cell}>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={cell}>Monthly Income</td>
              <td style={cell}>₹45,000</td>
            </tr>

            <tr>
              <td style={cell}>Monthly EMI</td>
              <td style={cell}>₹18,000</td>
            </tr>

            <tr>
              <td style={cell}>Suggested Savings</td>
              <td style={cell}>₹7,000</td>
            </tr>

            <tr>
              <td style={cell}>Monthly Surplus</td>
              <td style={cell}>₹20,000</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            marginTop: "30px",
            padding: "18px",
            background: "#eef4ff",
            borderRadius: "10px",
          }}
        >
          <h3>AI Recommendation</h3>

          <p style={{ lineHeight: "1.8" }}>
            Maintain EMI payments while allocating ₹7,000 towards emergency
            savings. Based on your current financial profile, partial settlement
            negotiations may increase approval probability.
          </p>
        </div>
      </div>
    </div>
  );
}

const cell = {
  border: "1px solid #ddd",
  padding: "15px",
};