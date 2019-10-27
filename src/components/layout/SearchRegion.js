import React, { useContext, useState } from 'react';
import CountryContext from '../../context/country/countryContext';

const SearchRegion = () => {

    const [region, setRegion] = useState('');
    const [heading, setHeading] = useState('asia');

    const countryContext = useContext(CountryContext);

    const onSubmit = e => {
        e.preventDefault();
        countryContext.findRegion(region);
        setRegion("");
    };

    const onClick = e => {
        setRegion(e.target.value);
        setHeading(e.target.value);
    };

    return (
        // Africa, Americas, Asia, Europe, Oceania
        <div className="region__list">
            <form className='regions' onSubmit={onSubmit}>
                <input type="submit" value="Africa" onClick={onClick} />
                <input type="submit" value="Americas" onClick={onClick} />
                <input type="submit" value="Asia" onClick={onClick} />
                <input type="submit" value="Europe" onClick={onClick} />
                <input type="submit" value="Oceania" onClick={onClick} />
            </form>
            <h2>All countries from <em>{heading}</em> region</h2>
        </div>
    );
}

export default SearchRegion;
