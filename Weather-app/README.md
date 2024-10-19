# Weather App (MERN Stack)

A full-stack weather application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app provides weather information for different locations, offering real-time updates and a user-friendly interface.

## Project Structure

The project is divided into two main parts:

- **Frontend**: Built with React, providing the user interface for the weather app.
- **Backend**: Powered by Node.js and Express, handling API requests and interacting with external weather APIs.

## Features

- **Real-Time Weather Data**: Fetches real-time weather information for any location.
- **Responsive Design**: Works across devices and screen sizes.
- **MERN Stack**: Full-stack implementation using MongoDB, Express, React, and Node.js.
- **API Integration**: Utilizes external weather APIs to fetch current weather data.

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (if you plan to use a local instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sreenishsharma83/Zeotap-Assignment.git
   cd Zeotap-Assignment/Weather-app
2. **Install dependencies for both backend and frontend:**
   - For backend:
     ```bash
     cd backend
     npm install
     ```
   - For frontend:
     ```bash
     cd ../frontend
     npm install
     ```

### Running the Application

1. **Backend:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create a `.env` file with the necessary environment variables (such as API keys, database credentials).
   - Start the server:
     ```bash
     npm start
     ```

2. **Frontend:**
   - In a new terminal, navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Start the React app:
     ```bash
     npm start
     ```

3. **Open in Browser:**
   - The frontend will run on `http://localhost:3000/` and the backend will run on `http://localhost:5000/`.

### API Keys

You need to obtain an API key from a weather data provider (e.g., OpenWeatherMap) and include it in your backend `.env` file.

```env
WEATHER_API_KEY=your-api-key-here
