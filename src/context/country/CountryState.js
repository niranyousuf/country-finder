import React, { useReducer } from 'react';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import axios from 'axios';
import {
    SEARCH_COUNTRY,
    SHOW_ALL_COUNTRIES,
    COUNTRY_DETAILS,
    SET_LOADING,
    FIND_REGION
} from '../types';

const CountryState = (props) => {

    const initialState = {
        countries: [],
        country: {},
        loading: false
    }

    const [state, dispatch] = useReducer(CountryReducer, initialState);

    // Show all country
    const showAllCountries = async () => {
        setLoading();
        const res = await axios.get(`https://restcountries.com/v2/all`);
        dispatch({
            type: SHOW_ALL_COUNTRIES,
            payload: res.data
        });
        
    }
    // Search country
    const searchCountry = async (text) => {
        setLoading();
        const res = await axios.get(`https://restcountries.com/v2/name/${text}`);
        dispatch({
            type: SEARCH_COUNTRY,
            payload: res.data
        });
    }
    // Region
    const findRegion = async (region) => {
        setLoading();
        const res = await axios.get(`https://restcountries.com/v2/region/${region}`);
        dispatch({
            type: FIND_REGION,
            payload: res.data
        });
        
        console.log(res.data);
        
    };

    // Country Details
    const countryDetails = async (name) => {
        setLoading();
        const res = await axios.get(`https://restcountries.com/v2/name/${name}`);
        dispatch({
            type: COUNTRY_DETAILS,
            payload: res.data[0]
        });
        // console.log(res.data[0]);
        
    }

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <CountryContext.Provider
            value={{
                countries: state.countries,
                country: state.country,
                loading: state.loading,
                showAllCountries,
                searchCountry,
                countryDetails,
                findRegion
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState;
