import React, { useContext, useState } from 'react';
import CountryContext from '../../context/country/countryContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const [text, setText] = useState('');

    const countryContext = useContext(CountryContext);
    const alertContext = useContext(AlertContext);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert("Please Enter Somthing", "danger");
        } else {
            countryContext.searchCountry(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div className="search__form">
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Country ..."
                    onChange={onChange}
                />
                <input type="submit" value="Serch" />
            </form>
        </div>
    );
}

export default Search;
