import React from 'react';
import ICountry from '../interfaces/ICountry';

const Card = (props: {country : ICountry}) => {
    return (
        <div>
            <li className='card'>
                <img src={props.country.flags.svg} alt={"drapeau " + props.country.name} />
                <div className='infos'>
                    <h2>{props.country.name.common}</h2>
                    <h4>{props.country.capital}</h4>
                    <p>Pop. {props.country.population.toLocaleString()}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;