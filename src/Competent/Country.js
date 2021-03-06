import React from 'react';

const Country = (props) => {
    const {name,capital,population} =props.country;
    const countryStyle ={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div>
            <h1>Country Name :{name}</h1>
            <h2> Capital:{capital}</h2>
            <p>Population:{population}</p>
            
        </div>
    );
};

export default Country;