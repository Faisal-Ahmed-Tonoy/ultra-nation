import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,population,alpha2Code} =props.country;
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
            <p>Code:<Link to={`/country/${alpha2Code}`}>Show Details {alpha2Code}</Link></p>
           
            
        </div>
    );
};

export default Country;