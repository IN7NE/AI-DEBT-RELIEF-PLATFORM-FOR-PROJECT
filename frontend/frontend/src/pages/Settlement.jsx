export default function Settlement() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Settlement Recommendation
        </h1>

        {/* Top Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500">Total Loan</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">
              ₹5,00,000
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500">Recommended Settlement</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              65%
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500">Settlement Amount</p>
            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              ₹3,25,000
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500">Risk Level</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              Medium
            </h2>
          </div>

        </div>

        {/* Recommendation */}
        <div className="bg-white rounded-xl shadow-lg mt-8 p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            AI Recommendation
          </h2>

          <ul className="space-y-4 list-disc ml-6">

            <li>Your financial profile indicates a medium repayment capacity.</li>

            <li>Negotiating a settlement around <strong>65%</strong> of the outstanding amount is recommended.</li>

            <li>Continue paying EMIs until the settlement process is finalized.</li>

            <li>Avoid taking additional loans during the negotiation period.</li>

            <li>Maintain a positive payment history to improve credibility.</li>

          </ul>

        </div>

        {/* Financial Summary */}
        <div className="bg-white rounded-xl shadow-lg mt-8 p-8">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Financial Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="mb-3">
                Monthly Income:
                <span className="font-bold text-green-600">
                  ₹60,000
                </span>
              </p>

              <p className="mb-3">
                Monthly Expenses:
                <span className="font-bold text-red-500">
                  ₹35,000
                </span>
              </p>

              <p>
                Monthly Savings:
                <span className="font-bold text-blue-900">
                  ₹25,000
                </span>
              </p>
            </div>

            <div>

              <div className="mb-5">

                <div className="flex justify-between mb-2">
                  <span>Debt Recovery Progress</span>
                  <span>65%</span>
                </div>

                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Generate Negotiation Letter
          </button>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500">
            Download Report
          </button>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-400">
            Back to Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}