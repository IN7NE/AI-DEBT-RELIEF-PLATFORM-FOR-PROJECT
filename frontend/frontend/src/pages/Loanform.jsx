import { useState } from "react";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    income: "",
    expenses: "",
    loanAmount: "",
    emi: "",
    interestRate: "",
    loanType: "Personal Loan",
    duration: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.income || Number(formData.income) <= 0)
      newErrors.income = "Enter valid monthly income";

    if (!formData.expenses || Number(formData.expenses) < 0)
      newErrors.expenses = "Enter valid expenses";

    if (!formData.loanAmount || Number(formData.loanAmount) <= 0)
      newErrors.loanAmount = "Loan amount is required";

    if (!formData.emi || Number(formData.emi) <= 0)
      newErrors.emi = "Monthly EMI is required";

    if (!formData.interestRate || Number(formData.interestRate) <= 0)
      newErrors.interestRate = "Interest rate is required";

    if (!formData.duration || Number(formData.duration) <= 0)
      newErrors.duration = "Loan duration is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    alert("Loan Details Submitted Successfully!");

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center items-center py-10 px-4">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-6xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}

        <div className="bg-blue-900 text-white p-10 flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-5">
            Financial Recovery
          </h1>

          <p className="text-blue-100 leading-7">
            Enter your loan information and our intelligent recovery
            system will analyse your financial condition and suggest
            the best settlement strategy.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex gap-3">
              <span>✔</span>
              <p>Quick Loan Analysis</p>
            </div>

            <div className="flex gap-3">
              <span>✔</span>
              <p>AI Settlement Recommendation</p>
            </div>

            <div className="flex gap-3">
              <span>✔</span>
              <p>Professional Negotiation Letter</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Loan Details Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.email}</p>
            </div>

            <div>
              <input
                type="number"
                name="income"
                placeholder="Monthly Income"
                value={formData.income}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.income}</p>
            </div>

            <div>
              <input
                type="number"
                name="expenses"
                placeholder="Monthly Expenses"
                value={formData.expenses}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.expenses}</p>
            </div>

            <div>
              <input
                type="number"
                name="loanAmount"
                placeholder="Loan Amount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.loanAmount}</p>
            </div>

            <div>
              <input
                type="number"
                name="emi"
                placeholder="Monthly EMI"
                value={formData.emi}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.emi}</p>
            </div>

            <div>
              <input
                type="number"
                name="interestRate"
                placeholder="Interest Rate (%)"
                value={formData.interestRate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.interestRate}</p>
            </div>

            <div>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Education Loan</option>
                <option>Business Loan</option>
                <option>Car Loan</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <input
                type="number"
                name="duration"
                placeholder="Loan Duration (Months)"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <p className="text-red-500 text-sm">{errors.duration}</p>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg font-bold text-lg transition"
            >
              Submit Loan Details
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}