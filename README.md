# Weather App

A simple web application to fetch and display weather data for a given city using the OpenWeatherMap API.

## Features
- Fetches current weather data for a specified city.
- Displays temperature, feels-like temperature, humidity, and weather description.
- Responsive design with a user-friendly interface.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- OpenWeatherMap API Key

## Getting Started

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    OPENWEATHERMAP_API_KEY=your_api_key_here
    ```

### Directory Structure
Ensure your directory structure looks like this:


### Running the Application
1. Start the application:
    ```bash
    node script.js
    ```

2. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## Usage
1. Enter the name of the city you want to fetch the weather for in the input field.
2. Click the "Get Weather" button.
3. The current weather data for the specified city will be displayed.

## Technologies Used
- Node.js
- Express.js
- Axios
- HTML
- CSS
- JavaScript

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api) for providing the weather data.
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
