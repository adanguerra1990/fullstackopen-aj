// Componente para renderizar cada país individual

const Country = ({ country, onShowDetails, shownDetails }) => (
    <div key={country.cca3}>
        <h2>{country.name.common}</h2>
        <button onClick={() => onShowDetails(country.cca3)}>
            {shownDetails[country.cca3] ? 'Hide' : 'Show'}
        </button>

    </div>
);

export default Country;

