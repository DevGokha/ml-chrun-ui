"use client";

import jsPDF from "jspdf";

interface Props {
  formData: any;
  result: any;
  chartImage: string | null;
}

export default function PdfButton({ formData, result, chartImage }: Props) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Customer Churn Prediction Report", 10, 20);

    doc.setFontSize(12);
    doc.text(`Churn Status: ${result.churn ? "Will Churn" : "Will Stay"}`, 10, 40);
    doc.text(`Churn Probability: ${(result.churn_probability * 100).toFixed(2)}%`, 10, 50);

    doc.text("Input Features:", 10, 70);

    let y = 80;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, y);
      y += 8;
    });

    // Add chart if available
    if (chartImage) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text("Churn Probability Chart", 10, 20);
      doc.addImage(chartImage, "PNG", 10, 40, 180, 120);
    }

    doc.save("churn_report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    >
      Download PDF
    </button>
  );
}
