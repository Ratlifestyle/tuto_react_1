import axios from 'axios';
import React, { useEffect } from 'react';
import ICountry, { TCountryList } from '../interfaces/ICountry';
import Card from './Card';

const Countries = () => {

    const [countries, setCountries] = React.useState<TCountryList>([]);
    const [rangeValue, setRangeValue] = React.useState<number>(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [radioValue, setRadioValue] = React.useState<string>("");

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(response => response.json()).then((data : TCountryList) => {
            setCountries(data);
        });
}, [])

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul className='radio-container'>
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e : any) => setRangeValue(e.target.value)}/>
                {radios.map((radio, index) => {
                    return (
                        <li key={index} onChange={(e: any) => setRadioValue(e.target.id)}>
                            <input type="radio" name="radio" id={radio} value={index} checked={radio===radioValue}/>
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    )
                })}
            </ul>
            {radioValue && <button onClick={()=>setRadioValue("")}>Annuler la recherche</button>}
            <ul>
                {countries
                .filter((country: ICountry) => country.continents[0].includes(radioValue))
                .sort((a: ICountry, b: ICountry) => b.population - a.population)
                .slice(0, rangeValue)
                .map((country : ICountry, index) => 
                (<Card key={index} country={country}/>))
                }
            </ul>
        </div>
    );
};

export default Countries;