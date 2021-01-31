import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Dropdown, PageWrapper } from '../../components';
import { CovidDataType } from '../../helpers/SharedTypes';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getOptions } from './ChartOptions';
import { History } from 'history';

type GetCovidDataFn = (
    selectedCountry: string,
    setCovidData: React.Dispatch<React.SetStateAction<CovidDataType>>,
    history: History,
) => void;

interface RouteParams {
    country: string;
}

const getCovidData: GetCovidDataFn = (selectedCountry, setCovidData, history) => {
    fetch(`http://localhost:4000/countries/${selectedCountry}`)
        .then((res) => res.json())
        .then((data) => {
            setCovidData(data);
            history.replace({ pathname: `/${selectedCountry}` }); // change URL in case user wants to share
        });
};

const Home: React.FC = () => {
    const [covidData, setCovidData] = useState<CovidDataType>({ deaths: [], cases: [], categories: [] });
    const [allCountries, setAllCountries] = useState<string[]>([]);
    const { country } = useParams<RouteParams>();
    const history = useHistory();
    covidData && console.log(covidData);

    useEffect(() => {
        fetch(`http://localhost:4000/countries`)
            .then((res) => res.json())
            .then((data) => setAllCountries(data));

        getCovidData(country, setCovidData, history);
    }, []);

    return (
        <PageWrapper>
            <div>
                <Dropdown
                    options={allCountries}
                    value={country}
                    handleChange={(e) => getCovidData(e.target.value, setCovidData, history)}
                />
                <div>
                    <HighchartsReact highcharts={Highcharts} options={getOptions(covidData)} />
                </div>
            </div>
        </PageWrapper>
    );
};
export default Home;
