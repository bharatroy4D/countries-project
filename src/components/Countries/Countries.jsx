import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
        
    }, [])
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
        </div>
    );
};

export default Countries;