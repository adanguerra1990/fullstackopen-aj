/**
 * Componente para mostrar detalles del clima en el país
 */
const WeatherDetails = ({ weatherData }) => {
    // Verifica si existe información de clima actual, si no, retorna null
    if (!weatherData.current) return null;

    return (
        <div>
            <p>Temperature: {weatherData.current.temperature}°C</p>
            <img src={weatherData.current.weather_icons[0]} alt={weatherData.current.weather_descriptions[0]} />
            <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
        </div>
    );
}

export default WeatherDetails;
