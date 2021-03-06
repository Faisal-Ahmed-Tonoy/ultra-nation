import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,population,callingCodes} =props.country;
    const countryStyle ={
        float:'left',
        
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px',
        width:'25.25%'
    }
    return (
        <div style={countryStyle}>
            <p>Country Name :{name}</p>
            <p> Capital:{capital}</p>
            <p>Population:{population}</p>
            <p>Code:<Link to={`/country/${callingCodes}`}>Show Details {callingCodes}</Link></p>
           
            
        </div>
    );
};

export default Country;