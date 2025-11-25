"use client";

import React from "react";

interface Field {
  name: string;
  type: string;
}

interface Props {
  fields: Field[];
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function PredictionForm({ fields, handleChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col">
          <label className="font-medium mb-1">
            {f.name.replaceAll("_", " ")}
          </label>

          {f.type === "select" ? (
            <select
              name={f.name}
              onChange={handleChange}
              className="p-3 border rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
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
              className="p-3 border rounded-lg bg-slate-50 text-black dark:bg-gray-600 dark:text-white"
            />
          )}
        </div>
      ))}
    </div>
  );
}
