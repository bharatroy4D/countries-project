import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    function handleVisitedCountries(country) {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <h3>Visited Countries:{visitedCountries.length}</h3>
            <div>
                <h1>Countries list</h1>
                <ul>
                    {
                        visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;