const express = require("express");
const axios = require("axios");
require("dotenv").config();
const path = require("path");

const app = express();
const port = 3000;

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const { main, weather, name } = response.data;
    return {
      city: name,
      temperature: main.temp,
      feelsLike: main.feels_like,
      humidity: main.humidity,
      description: weather[0].description,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(
        "City not found. Please check the city name and try again."
      );
    } else {
      throw new Error(
        "An error occurred while fetching weather data: " + error.message
      );
    }
  }
}

// Middleware to serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle weather data retrieval
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send("Please provide a city name");
  }

  try {
    const weatherData = await getWeather(city);
    res.send({
      city: weatherData.city,
      temperature: weatherData.temperature,
      feelsLike: weatherData.feelsLike,
      humidity: weatherData.humidity,
      description: weatherData.description
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});
