"use client";

interface Props {
  result: any;
}

export default function ResultCard({ result }: Props) {
  if (!result) return null;

  return (
    <div className="mt-10 p-6 border rounded-xl bg-slate-50 text-black">
      <h2 className="text-xl font-bold mb-3">Prediction Summary</h2>

      <p className="text-lg">
        <strong>Status: </strong>
        {result.churn ? (
          <span className="text-red-600">Customer Will Churn ❌</span>
        ) : (
          <span className="text-green-600">Customer Will Stay ✔</span>
        )}
      </p>

      <p className="text-lg mt-2">
        <strong>Probability: </strong>
        {result.churn_probability.toFixed(3)}
      </p>
    </div>
  );
}
