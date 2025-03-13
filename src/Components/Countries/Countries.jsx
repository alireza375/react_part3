import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, ([]))

    const handleVisitedCountry = country => {
        console.log('add this to your visited countries');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log('Flag adding');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited Countries */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
               <ul>
                   {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
               </ul>
            </div>
            <div className='visited-flags'>
                <h4>Visited Flags: {visitedFlags.length}</h4>
                {
                    visitedFlags.map(flag => <img key={flag} src={flag} alt="" />)
                }
            </div>
            {/* display countries */}
            <div className='country-container'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;