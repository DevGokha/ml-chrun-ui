# Customer Churn Prediction UI

A clean, responsive frontend for a Customer Churn Prediction system built with Next.js, TypeScript and Tailwind CSS. This application integrates with a FastAPI backend to collect customer data, submit it to a prediction API, and display the prediction in a clear, professional UI.

Key use cases:
- Demonstrating ML model integration in a frontend
- Portfolio projects for ML / Full‑Stack developers
- Backend + frontend API integration demos

## Features
- Modern, responsive UI built with Next.js (App Router) and Tailwind CSS
- TypeScript for type safety
- Churn prediction form with validation
- Autofill demo for quick testing
- Dynamic result card with clear visual indicators (green = stay, red = churn)
- Easy API integration via Axios

## Tech Stack
- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Axios

## Demo
Run the app locally and open http://localhost:3000 to view the UI. The form allows manual entry or autofill for demo data and returns a prediction from the backend API.

## Prerequisites
- Node.js >= 18
- npm or yarn
- A running backend API endpoint that exposes a /predict route (FastAPI or equivalent)

## Installation
1. Clone the repository:
   git clone https://github.com/DevGokha/ml-chrun-ui.git
2. Install dependencies:
   npm install
   or
   yarn install
3. Start the development server:
   npm run dev
   or
   yarn dev
4. Open http://localhost:3000

## Configuration
The frontend posts form data to a backend prediction endpoint. By default the API URL is defined in the page source:

const API_URL = "http://127.0.0.1:8000/predict";

For a more robust setup, configure an environment variable in .env.local:

NEXT_PUBLIC_API_URL=https://your-backend.example.com/predict

Then reference process.env.NEXT_PUBLIC_API_URL in your code so the URL can be changed without editing source files.

## Autofill Demo Sample
Use this JSON as a demo payload (or via the UI's autofill feature):

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

## Folder Structure
- app/ — Next.js app routes and pages
- components/ — UI components
- public/ — static assets
- styles/ — global styles and Tailwind configuration
- package.json
- next.config.js

## Author
Dev Gokha — AI & MERN Developer | Machine Learning Engineer

