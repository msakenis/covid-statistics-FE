import React, { useState, useEffect } from 'react';
import { Dropdown } from '../../components';
import { CovidDataType } from '../../helpers/SharedTypes';

type GetCovidDataFn = (
    selectedCountry: string,
    setCovidData: React.Dispatch<React.SetStateAction<CovidDataType[]>>,
) => void;

const getCovidData: GetCovidDataFn = (selectedCountry, setCovidData) => {
    fetch(`http://localhost:3000/countries/${selectedCountry}`)
        .then((res) => res.json())
        .then((data) => setCovidData(data));
};

const Home: React.FC = () => {
    const [covidData, setCovidData] = useState<CovidDataType[]>([]);
    const [allCountries, setAllCountries] = useState<string[]>([]);

    covidData && console.log(covidData);
    useEffect(() => {
        fetch(`http://localhost:3000/countries`)
            .then((res) => res.json())
            .then((data) => setAllCountries(data));
    }, []);

    return (
        <div>
            <Dropdown options={allCountries} handleChange={(e) => getCovidData(e.target.value, setCovidData)} />
            <div>
                <ul>{covidData && covidData.map((item, index) => <li key={index}>{item.cumulative_count}</li>)}</ul>
            </div>
        </div>
    );
};
export default Home;
