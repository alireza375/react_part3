import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className= {`country ${visited ? 'visited' : 'not-visited'}` }>
            <h3 style={{color: visited ? 'green' : 'red'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button> <t />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <t />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? <p> I've Visited this Country</p> : <p> I want to Visite this Country</p>}
        </div>
    );
};

export default Country;