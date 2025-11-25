🎨 Customer Churn Prediction UI — Next.js + TailwindCSS

This is the frontend interface for the Customer Churn Prediction System.
It communicates with the FastAPI backend to show churn prediction results in a modern, professional UI.

🚀 Features

✔ Beautiful, modern UI design
✔ TailwindCSS professional theme
✔ Churn prediction form
✔ Autofill button for testing
✔ Dynamic result card (Green = Stay, Red = Churn)
✔ Responsive design (mobile + desktop)
✔ Fully integrated with backend API

🖥️ Tech Stack

Next.js 14 (App Router)

React

TailwindCSS

TypeScript

Axios

🛠️ Installation & Setup
1️⃣ Install dependencies
npm install

2️⃣ Run development server
npm run dev

App available at:
http://localhost:3000

🔌 API Connection

Edit this line inside your page:

const API_URL = "http://127.0.0.1:8000/predict";


If backend is deployed to the cloud, update the URL accordingly.

🧪 Autofill Demo Sample

You can autofill a valid customer example:

{
  "State": "OH",
  "Account_length": 120,
  "Area_code": 415,
  "International_plan": "No",
  "Voice_mail_plan": "Yes",
  "Number_vmail_messages": 20,
  "Total_day_minutes": 120.5,
  "Total_day_calls": 110,
  "Total_day_charge": 20.48,
  "Total_eve_minutes": 150.2,
  "Total_eve_calls": 90,
  "Total_eve_charge": 15.50,
  "Total_night_minutes": 180.3,
  "Total_night_calls": 100,
  "Total_night_charge": 8.20,
  "Total_intl_minutes": 12.5,
  "Total_intl_calls": 3,
  "Total_intl_charge": 3.38,
  "Customer_service_calls": 2
}

🧑‍💻 Folder Structure
app/
components/
public/
styles/
package.json
next.config.js

🎯 Purpose

Designed for:

ML project portfolios

Freelance AI/ML projects

Real-world churn prediction systems

API integration demo projects

👤 Author

Dev Gokha
AI & MERN Developer | Machine Learning Engineer
