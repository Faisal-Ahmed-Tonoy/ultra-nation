import React from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const{countryAlpha2Code}= useParams();
    return (
        <div>
            <h2>This is country detail </h2>
            
        </div>
    );
};

export default CountryDetail;