import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import RenderCountry from './Components/RenderCountry';

const App = () => {
  // Definición de estado usando el Hook useState
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchCountrie, setSearchCountrie] = useState([]);
  const [shownDetails, setShownDetails] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  // Clave API almacenada en la variable de entorno para obtener datos del clim
  const weatherApiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;

  // Hook useEffect para obtener datos de los países al montar el componente
  const hookCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hookCountries, []);

  // Manejador de evento para buscar países
  const handleSearchCountries = event => {
    const searchValue = event.target.value.toLowerCase(); // Valor de búsqueda en minúsculas

    setQuery(searchValue); // Guardando el valor de búsqueda en el estado

    // Filtrando los países por el valor de búsqueda
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchValue)
    );

    // Limpiando los detalles de los países que se deben mostrar
    setShownDetails({});
    // Guardando los países filtrados en el estado
    setSearchCountrie(filteredCountries);
  }

  // Manejador de evento para mostrar detalles de un país
  const handleShowDetails = cca3 => {
    // Encontrando el país por su código
    const country = countries.find(country => country.cca3 === cca3);
    // Nombre del país, si existe
    const countryName = country ? country.name.common : '';

    // Actualizando los detalles de los países que se deben mostrar
    setShownDetails(prevShownDetails => ({
      ...prevShownDetails,
      [cca3]: !prevShownDetails[cca3],
    }));

    // Solicitando datos del clima para el país
    axios
      .get(`http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${countryName}`)
      .then(response => {
        setWeatherData(response.data)
      });
  }

  // Renderizando el componente
  return (
    <div className='card'>

      <div>
        find countries: <input value={query} onChange={handleSearchCountries} />
      </div>

      <div>
        <RenderCountry
          countries={searchCountrie}  // Lista de países a renderizar
          onShowDetails={handleShowDetails}  // Función para mostrar detalles de un país
          shownDetails={shownDetails}  // Detalles de países a mostrar
          weatherData={weatherData}  // Datos del clima a mostrar
        />
      </div>
    </div>
  )
}

export default App
