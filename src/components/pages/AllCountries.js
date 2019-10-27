import React, { Fragment } from 'react';
import Search from '../layout/Search';
import CountryList from '../country/CountryList';

const AllCountries = () => {
    return (
        <Fragment>
            <Search />
            <CountryList />
        </Fragment>
    )
}

export default AllCountries;
