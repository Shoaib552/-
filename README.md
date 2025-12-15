# तापमान विश्लेषक (Weather Dashboard)


## Overview

**तापमान विश्लेषक** is a modern, responsive weather dashboard that provides detailed weather information for any city in the world. Built with **React** and **Vite**, it leverages the **OpenWeatherMap API** to display current weather conditions, forecasts, and other meteorological data in a clean, user-friendly interface.

This project is developed and maintained by **Mohd Shoaib**.

## Features

* **Real-time Weather Data**: Get current weather information for any city worldwide
* **Location Detection**: Automatically fetch weather for your current location
* **5-Day Forecast**: View detailed weather forecasts for the next five days
* **Time-of-Day Indicator**: Visual representation of the current time at the selected location
* **Weather Animations**: Visual effects based on current weather conditions (rain, snow, etc.)
* **Search History**: Quickly access previously searched locations
* **Dark Mode**: Toggle between light and dark themes
* **Responsive Design**: Optimized for mobile, tablet, and desktop

## Technologies Used

* **Frontend**: React 18, Tailwind CSS, Lucide Icons
* **Build Tool**: Vite
* **State Management**: React Context API
* **API**: OpenWeatherMap API
* **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

* Node.js (v14.0.0 or higher)
* npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/YOUR-USERNAME/tapmaan-vishleshak.git
   cd tapmaan-vishleshak
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## API Integration

This application uses the **OpenWeatherMap API**:

* Current Weather API
* 5-Day Forecast API
* Geocoding API

### API Rate Limits (Free Tier)

* 60 requests per minute
* 1,000,000 requests per month

### API Key Security

* API keys are stored in a `.env` file and are not committed to the repository
* In production, environment variables should be configured on the hosting platform

## Deployment

Build the project using:

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Author

**Mohd Shoaib**
GitHub: [https://github.com/YOUR-USERNAME](https://github.com/Shoaib552)

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
