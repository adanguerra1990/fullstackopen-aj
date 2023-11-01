
// Componente para mostrar los detalles de un país
const CountryDetails = ({ country }) => (
    <div>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Lenguaje</h2>
        <ul>
            { /* Object.entries() convierte el objeto de idiomas en un array de pares [clave, valor] */}
            {Object.entries(country.languages).map(([index, languageName]) => (
                    // Crea un elemento de lista para cada idioma, con la clave como key y el nombre del idioma como valor
                    <li key={index}>{languageName}</li>
                )
            )}
        </ul>
        <img src={country.flags.png} alt={country.name.common} />
    </div>
);

export default CountryDetails;
