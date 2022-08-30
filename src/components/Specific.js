import React from "react";

const Specific = ({country}) => {
    
    return (
        <>
            <h1>{country.name.common}</h1>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <h2>Spoken Languages: </h2>
            <ul>
                {Object.values(country.languages).map(lang => 
                <li key={lang}>{lang}</li>)}
                
            </ul>
            <h2>Flag: </h2>
            <img src={country.flags.png} alt='flag'/>
            </>
    )
}

export default Specific