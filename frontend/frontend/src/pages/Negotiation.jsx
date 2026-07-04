export default function Negotiation() {
  const letter = `
Date: ${new Date().toLocaleDateString()}

To,
The Loan Manager,
ABC Bank

Subject: Request for Loan Settlement

Respected Sir/Madam,

I am writing to request a settlement of my outstanding loan due to my current financial difficulties. My monthly income has reduced significantly, making it difficult for me to continue regular EMI payments.

I sincerely request you to consider a one-time settlement of my loan. I assure you that I am willing to cooperate and resolve the matter as soon as possible.

I would be grateful if you could review my request and provide a suitable settlement offer.

Thank you for your time and consideration.

Yours faithfully,

Rahul Sharma
`;

  const copyLetter = () => {
    navigator.clipboard.writeText(letter);
    alert("Letter copied successfully!");
  };

  const printLetter = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          AI Negotiation Letter
        </h1>

        <div className="bg-gray-50 border rounded-xl p-8 whitespace-pre-line leading-8 text-gray-700">
          {letter}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <button
            onClick={copyLetter}
            className="bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
          >
            📋 Copy Letter
          </button>

          <button
            onClick={printLetter}
            className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold"
          >
            🖨 Print Letter
          </button>

          <button
            className="bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold"
          >
            📄 Download PDF
          </button>

        </div>

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-700 p-5 rounded">

          <h2 className="text-xl font-bold text-blue-900 mb-3">
            AI Suggestion
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>Be polite and professional while communicating with the bank.</li>
            <li>Attach proof of your current financial condition if available.</li>
            <li>Request a written settlement agreement before making any payment.</li>
            <li>Keep a copy of all communication for future reference.</li>
          </ul>

        </div>

      </div>

    </div>
  );
}