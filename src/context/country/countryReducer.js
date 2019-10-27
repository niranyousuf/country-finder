import {
    SHOW_ALL_COUNTRIES,
    SEARCH_COUNTRY,
    COUNTRY_DETAILS,
    SET_LOADING,
    FIND_REGION
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SHOW_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case FIND_REGION:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}