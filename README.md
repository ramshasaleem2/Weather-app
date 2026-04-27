## 🌦️ Weather App

A responsive Weather Application built with React.js that fetches real-time weather data using the OpenWeatherMap API. API requests were tested and verified using Thunder Client for accuracy and debugging.

---

## 🚀 Features
- 🔍 Search weather by city name
- 🌡️ Displays temperature, humidity, and weather conditions
- 🌍 Real-time data from OpenWeatherMap API
- ⚡ Fast and optimized performance with Vite
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack
- Frontend: React.js
- Styling: Tailwind CSS / CSS
- Build Tool: Vite
- API: OpenWeatherMap API
- API Testing Tool: Thunder Client
- State Management: useState, useEffect

---

## 🔗 API Integration

This project uses the OpenWeatherMap API to fetch weather data.

## Example API Request:
```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```
- q → City name
- appid → Your API key
- units=metric → Temperature in Celsius

---

## ⚙️ Thunder Client Usage
- Used Thunder Client (VS Code extension) to test API endpoints
- Verified:
- ✅ Correct API responses
- ✅ JSON structure
- ✅ Error handling (invalid city, wrong API key)

This helped ensure smooth integration before implementing in React.

---

## ⚙️ Installation & Setup

## Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
```
## Navigate to the project:
```bash
cd weather-app
```
## Install dependencies:
```bash
npm install
```
## Run the app:
```bash
npm run dev
```

---

🌐 Live Demo

👉 (https://weather-app-snowy-two-30.vercel.app/)

---

## 💡 Learning Outcomes
- Learned how to integrate external APIs using fetch
- Practiced API testing using Thunder Client
- Improved understanding of useEffect for data fetching
- Handled asynchronous data and error states
- Built a responsive UI with dynamic data

---
