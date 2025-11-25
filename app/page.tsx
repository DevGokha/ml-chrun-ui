"use client";

import { useState } from "react";

// Components
import ThemeToggle from "./compoments/ThemeToggle";
import SampleButtons from "./compoments/SampleButtons";
import PredictButtons from "./compoments/PredictButtons";
import PredictionForm from "./compoments/PredictionForm";
import ResultCard from "./compoments/ResultCard";
import Charts from "./compoments/Charts";
import PdfButton from "./compoments/PdfButton";

export default function Home() {
  const [formData, setFormData] = useState<any>({});
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  // ❗ THE FIX — this must be inside the component
  const [chartImage, setChartImage] = useState<string | null>(null);

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
    { name: "Customer_service_calls", type: "number" },
  ];

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main
      className={`min-h-screen p-10 flex justify-center ${
        dark ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div
        className={`w-full max-w-5xl rounded-xl p-10 shadow-lg border ${
          dark ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        {/* Theme Toggle */}
        <ThemeToggle dark={dark} setDark={setDark} />

        {/* Sample Buttons */}
        <SampleButtons setFormData={setFormData} />

        {/* Predict Buttons */}
        <PredictButtons
          formData={formData}
          setFormData={setFormData}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
        />

        {/* Form */}
        <PredictionForm fields={fields} handleChange={handleChange} />

        {/* Results */}
        <ResultCard result={result} />

        {/* Charts */}
        <Charts result={result} onChartReady={setChartImage} />

        {/* PDF Button */}
        <PdfButton formData={formData} result={result} chartImage={chartImage} />
      </div>
    </main>
  );
}
