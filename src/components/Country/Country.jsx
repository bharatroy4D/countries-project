import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags} = country;

    const [visited, setVisited] = useState(false);

    function countriesVisited(){
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>country: {name.common}</h2>
            <img src={flags.png} alt="" />
            <button onClick={countriesVisited}>{visited ? 'visited':'going'}</button>
            {visited ? 'this site visited':'i want to visited this country'}
            <br />
            <button onClick={() =>handleVisitedCountries(country)}>visitedCountries</button>
        </div>
    );
};

export default Country;