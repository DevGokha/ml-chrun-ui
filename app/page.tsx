"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const fields = [
    { name: "State", type: "text" },
    { name: "Account_length", type: "number" },
    { name: "Area_code", type: "number" },
    { name: "International_plan", type: "select" },
    { name: "Voice_mail_plan", type: "select" },
    { name: "Number_vmail_messages", type: "number" },
    { name: "Total_day_minutes", type: "number" },
    { name: "Total_day_calls", type: "number" },
    { name: "Total_day_charge", type: "number" },
    { name: "Total_eve_minutes", type: "number" },
    { name: "Total_eve_calls", type: "number" },
    { name: "Total_eve_charge", type: "number" },
    { name: "Total_night_minutes", type: "number" },
    { name: "Total_night_calls", type: "number" },
    { name: "Total_night_charge", type: "number" },
    { name: "Total_intl_minutes", type: "number" },
    { name: "Total_intl_calls", type: "number" },
    { name: "Total_intl_charge", type: "number" },
    { name: "Customer_service_calls", type: "number" }
  ];

  // ⭐ AUTO-FILL SAMPLE VALUES
  const autofill = () => {
    const sample = {
      State: "OH",
      Account_length: 120,
      Area_code: 408,
      International_plan: "no",
      Voice_mail_plan: "yes",
      Number_vmail_messages: 20,
      Total_day_minutes: 300.5,
      Total_day_calls: 120,
      Total_day_charge: 45.0,
      Total_eve_minutes: 200.4,
      Total_eve_calls: 99,
      Total_eve_charge: 30.06,
      Total_night_minutes: 180,
      Total_night_calls: 90,
      Total_night_charge: 8.1,
      Total_intl_minutes: 12.5,
      Total_intl_calls: 3,
      Total_intl_charge: 3.75,
      Customer_service_calls: 2
    };

    setFormData(sample);

    // auto place values inside inputs
    setTimeout(() => {
      Object.entries(sample).forEach(([key, value]) => {
        const el = document.getElementsByName(key)[0] as HTMLInputElement | HTMLSelectElement;
        if (el) el.value = String(value);
      });
    }, 50);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value: any = e.target.value;

    if (e.target.type === "number") value = Number(value);

    setFormData({ ...formData, [name]: value });
  };

  const predict = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://ml-chrun-api.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch {
      alert("Backend not reachable");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center p-10">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-10 border">

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Customer Churn Prediction
        </h1>

        {/* 🔹 BUTTONS ROW */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={autofill}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg border hover:bg-gray-300"
          >
            Autofill Sample Data
          </button>

          <button
            onClick={predict}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        {/* 🔹 FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((f) => (
            <div key={f.name} className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                {f.name.replaceAll("_", " ")}
              </label>

              {f.type === "select" ? (
                <select
                  name={f.name}
                  onChange={handleChange}
                  className="p-3 border rounded-lg bg-white"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  onChange={handleChange}
                  className="p-3 border rounded-lg bg-slate-50"
                />
              )}
            </div>
          ))}
        </div>

        {/* 🔹 RESULT */}
        {result && (
          <div className="mt-10 p-6 border rounded-xl bg-slate-50">
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
              {result.churn_probability !== undefined
                ? result.churn_probability.toFixed(3)
                : "N/A"}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
