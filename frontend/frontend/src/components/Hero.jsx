import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl font-bold text-blue-900 leading-tight">
              Take Control of Your
              <span className="text-green-600"> Financial Future</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our Financial Recovery Platform helps borrowers analyse
              their loans, receive AI-powered settlement recommendations,
              generate negotiation letters, and track financial recovery.
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => navigate("/loan-form")}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Get Started
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition"
              >
                Learn More
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Platform Highlights
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>Loan Analysis</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>AI Settlement Recommendation</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>Negotiation Letter Generator</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>Interactive Dashboard</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-bold text-xl mb-2">
              Loan Form
            </h3>
            <p className="text-gray-600">
              Enter all loan details securely.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-xl mb-2">
              Settlement
            </h3>
            <p className="text-gray-600">
              Smart settlement recommendations.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">✉</div>
            <h3 className="font-bold text-xl mb-2">
              Negotiation
            </h3>
            <p className="text-gray-600">
              Generate professional letters.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-bold text-xl mb-2">
              Dashboard
            </h3>
            <p className="text-gray-600">
              Monitor your financial recovery.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}