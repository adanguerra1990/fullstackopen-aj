import React from 'react';
import Country from './Country'
import CountryDetails from './CountryDetails ';
import WeatherDetails from './WeatherDetails';

/**
 * Componente para renderizar todos los países y sus detalles
 */

const RenderCountry = ({ countries, onShowDetails, shownDetails, weatherData }) => {
    return (
        <div>
             { /* Iterando sobre el array de países y creando un componente Country para cada uno */ }
            {countries.map(country => (
                <div key={country.cca3}>
                    <Country country={country} onShowDetails={onShowDetails} shownDetails={shownDetails} />

                    { /* Si los detalles de un país están mostrándose, renderizar los componentes CountryDetails y WeatherDetails */ }
                    
                    {
                        shownDetails[country.cca3] && (
                            <div>
                                <CountryDetails country={country} />
                                {weatherData.current && (
                                    <WeatherDetails weatherData={weatherData} />
                                )}
                            </div>
                        )
                    }
                </div>
            ))
            }
        </div >
    );
};

export default RenderCountry;
