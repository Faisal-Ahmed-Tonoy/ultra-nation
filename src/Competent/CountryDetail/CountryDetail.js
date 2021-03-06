import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const{countryCallingCodes}= useParams();
    
    const [country,setCountry] = useState([]);
    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/callingcode/${countryCallingCodes}`)
        .then(res => res.json())
        .then(data => setCountry(data));
    })
    return (
        <div>
            <h2>This is country detail: {countryCallingCodes} </h2>
            
            
        </div>
    );
};

export default CountryDetail;