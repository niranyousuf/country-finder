import React, { useEffect, useContext } from 'react';
import CountryContext from '../../context/country/countryContext';

const CountryDetails = ({ match }) => {

    const countryContext = useContext(CountryContext);

    const { country, countryDetails } = countryContext;

    useEffect(() => {
        countryDetails(match.params.name);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        flag,
        demonym,
        nativeName,
        region,
        subregion,
        capital,
        population,
        numericCode,
        area
    } = country;

    
    return (
        <div className="country__info">
            <h2>{name}</h2>
            <div className="country__details">
                <img src={flag} alt={name} />
                <div className="infos">
                    <h4>informations</h4>
                    <p><strong>Capital: </strong>{capital}</p>
                    <p><strong>Demonym: </strong> {demonym}</p>
                    <p><strong>Native Name:</strong> {nativeName}</p>
                    <p><strong>Region: </strong>{region}</p>
                    <p><strong>Subregion: </strong>{subregion}</p>
                    <p><strong>Population: </strong>{population}</p>
                    <p><strong>Numeric Code: </strong>{numericCode}</p>
                    <p><strong>Area: </strong>{area}-km<sup>2</sup></p>

                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
