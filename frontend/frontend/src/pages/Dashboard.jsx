export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Financial Recovery Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">💰 Total Loan</h2>
          <p className="text-3xl font-bold text-blue-900 mt-2">
            ₹5,00,000
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">💳 Monthly EMI</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            ₹12,500
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">📉 Risk Level</h2>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            Medium
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-500">🤝 Settlement Offer</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            65%
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl shadow-lg mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">
          Loan Repayment Progress
        </h2>

        <div className="w-full bg-gray-300 rounded-full h-5">
          <div
            className="bg-blue-900 h-5 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>

        <p className="mt-3 font-semibold">60% Completed</p>
      </div>

      {/* Income & AI Recommendation */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Income Summary
          </h2>

          <p className="mb-3">
            Monthly Income:
            <span className="font-bold text-green-600">
              {" "}₹60,000
            </span>
          </p>

          <p className="mb-3">
            Monthly Expenses:
            <span className="font-bold text-red-500">
              {" "}₹35,000
            </span>
          </p>

          <p>
            Savings:
            <span className="font-bold text-blue-900">
              {" "}₹25,000
            </span>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            🤖 AI Recommendation
          </h2>

          <ul className="space-y-3 list-disc ml-5">
            <li>Continue paying EMI regularly.</li>
            <li>Eligible for approximately 65% settlement.</li>
            <li>Financial risk is Medium.</li>
            <li>Negotiate with the bank within 30 days.</li>
          </ul>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg mt-8 p-6">

        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li>✅ Loan Details Submitted</li>
          <li>✅ Settlement Recommendation Generated</li>
          <li>✅ Negotiation Letter Created</li>
          <li>⏳ Waiting for Bank Response</li>
        </ul>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">

        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          View Settlement
        </button>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500">
          Generate Letter
        </button>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-400">
          Edit Loan Details
        </button>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500">
          Download Report
        </button>

      </div>

    </div>
  );
}
