export default function AIAnalysis() {
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
          width: "800px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          🤖 AI Debt Analysis Report
        </h1>

        <div
          style={{
            background: "#eef4ff",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>📊 Financial Health</h3>
          <p><b>Debt Stress Level:</b> Medium</p>
          <p><b>Monthly Income:</b> ₹45,000</p>
          <p><b>Monthly EMI:</b> ₹18,000</p>
          <p><b>Debt-to-Income Ratio:</b> 40%</p>
        </div>

        <div
          style={{
            background: "#f8fff5",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>💡 AI Settlement Recommendation</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Recommended Settlement : <b>60% - 70%</b></li>
            <li>Suggested EMI : <b>₹18,000/month</b></li>
            <li>Risk Category : <b>Medium</b></li>
            <li>Probability of Approval : <b>82%</b></li>
          </ul>
        </div>

        <div
          style={{
            background: "#fff8e7",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>✉ AI Negotiation Strategy</h3>

          <p style={{ lineHeight: "1.8" }}>
            Based on your current financial condition, AI recommends requesting
            an extended repayment tenure with a partial settlement offer.
            Mention temporary financial hardship and maintain a positive payment
            history to improve lender approval chances.
          </p>
        </div>
      </div>
    </div>
  );
}