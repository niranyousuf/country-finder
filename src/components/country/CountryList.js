import React, { useContext, useEffect } from 'react';
import Loader from '../layout/Loader';
import Country from './Country';
import CountryContext from '../../context/country/countryContext';

const CountryList = () => {

    const countryContext = useContext(CountryContext);
    const { countries, loading, showAllCountries } = countryContext;

    useEffect(() => {
        showAllCountries();
        // eslint-disable-next-line
    }, []);


    if (loading) {
        return <Loader />;
    } else {
        return (
            <div className="country__list">
                {countries.map(country =>
                    <Country key={country.numericCode} country={country} />
                )}
            </div>
        );
    }
};


export default CountryList;
