export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h3 className="text-gray-500 text-lg">{title}</h3>

      <p className="text-3xl font-bold text-blue-900 mt-3">
        {value}
      </p>
    </div>
  );
}