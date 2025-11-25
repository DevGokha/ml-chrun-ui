"use client";

interface Props {
  setFormData: (data: any) => void;
}

export default function SampleButtons({ setFormData }: Props) {
  const samples = {
    low: {
      State: "CA",
      Account_length: 145,
      Area_code: 408,
      International_plan: "no",
      Voice_mail_plan: "yes",
      Number_vmail_messages: 25,
      Total_day_minutes: 200,
      Total_day_calls: 110,
      Total_day_charge: 35,
      Total_eve_minutes: 250,
      Total_eve_calls: 120,
      Total_eve_charge: 21,
      Total_night_minutes: 180,
      Total_night_calls: 100,
      Total_night_charge: 8.1,
      Total_intl_minutes: 10,
      Total_intl_calls: 1,
      Total_intl_charge: 2.7,
      Customer_service_calls: 1,
    },

    medium: {
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
    },

    high: {
      State: "NY",
      Account_length: 90,
      Area_code: 510,
      International_plan: "yes",
      Voice_mail_plan: "no",
      Number_vmail_messages: 0,
      Total_day_minutes: 70,
      Total_day_calls: 60,
      Total_day_charge: 12,
      Total_eve_minutes: 120,
      Total_eve_calls: 60,
      Total_eve_charge: 10,
      Total_night_minutes: 100,
      Total_night_calls: 50,
      Total_night_charge: 4.5,
      Total_intl_minutes: 25,
      Total_intl_calls: 7,
      Total_intl_charge: 7.5,
      Customer_service_calls: 9,
    },
  };

  const fillSample = (sample: any) => {
    // Update React state
    setFormData(sample);

    // Sync values directly into input fields (UI update)
    setTimeout(() => {
      Object.entries(sample).forEach(([key, value]) => {
        const el = document.getElementsByName(key)[0] as HTMLInputElement | HTMLSelectElement;
        if (el) el.value = String(value);
      });
    }, 50);
  };

  return (
    <div className="flex gap-3 mb-6">
      <button
        className="px-4 py-2 rounded bg-green-200 text-black hover:bg-green-300"
        onClick={() => fillSample(samples.low)}
      >
        Low Risk Sample
      </button>

      <button
        className="px-4 py-2 rounded bg-yellow-200 text-black hover:bg-yellow-300"
        onClick={() => fillSample(samples.medium)}
      >
        Medium Risk Sample
      </button>

      <button
        className="px-4 py-2 rounded bg-red-300 text-black hover:bg-red-400"
        onClick={() => fillSample(samples.high)}
      >
        High Risk Sample
      </button>
    </div>
  );
}
