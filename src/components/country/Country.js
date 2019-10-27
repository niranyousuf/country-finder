import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const Country = ({ country: {name, flag, capital, region} }) => {
    return (
        <div className="country">
            <h4><Link to={`/country/${name}`}>{name}</Link></h4>
            <img src={flag} alt={name}/>
            <ul className="info__list">
                <li><strong>Capital: </strong> {capital}</li>
                <li><strong>Region: </strong> {region}</li>
            </ul>
        </div>
    )
}

Country.propTypes = {
    country: PropTypes.object.isRequired,
}

export default Country;
