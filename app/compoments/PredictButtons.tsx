"use client";

interface Props {
  formData: any;
  setFormData: (data: any) => void;
  setResult: (data: any) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}

export default function PredictButtons({
  formData,
  setFormData,
  setResult,
  loading,
  setLoading,
}: Props) {

  // Medium-risk autofill sample
  const autofill = () => {
    const sample = {
      State: "TX",
      Account_length: 110,
      Area_code: 415,
      International_plan: "no",
      Voice_mail_plan: "no",
      Number_vmail_messages: 0,
      Total_day_minutes: 150,
      Total_day_calls: 90,
      Total_day_charge: 25,
      Total_eve_minutes: 180,
      Total_eve_calls: 80,
      Total_eve_charge: 15,
      Total_night_minutes: 200,
      Total_night_calls: 95,
      Total_night_charge: 9,
      Total_intl_minutes: 15,
      Total_intl_calls: 2,
      Total_intl_charge: 4,
      Customer_service_calls: 4,
    };

    setFormData(sample);

    // Auto-fill input fields visually
    setTimeout(() => {
      Object.entries(sample).forEach(([key, value]) => {
        const el = document.getElementsByName(key)[0] as HTMLInputElement | HTMLSelectElement;
        if (el) el.value = String(value);
      });
    }, 50);
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
      alert("Backend not reachable.");
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-4 mb-8">

      <button
        onClick={autofill}
        className="bg-gray-300 text-black px-5 py-2 rounded-lg border hover:bg-gray-400"
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
  );
}
