import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Dropdown, PageWrapper, StatsBox, Loading } from '../../components';
import * as S from './Home.style';
import { CovidDataType } from '../../helpers/SharedTypes';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getOptions } from './ChartOptions';
import { History } from 'history';
import { stats } from '../../utils/stats';

type GetCovidDataFn = (
    selectedCountry: string,
    setCovidData: React.Dispatch<React.SetStateAction<CovidDataType>>,
    history: History,
) => void;

interface RouteParams {
    country: string;
}

// joins backend calculated stats and front-end info as icons, title
const joinStats = (data: CovidDataType) =>
    stats.map((item, index) => {
        return { ...item, stats: data.stats[index].stats, change: data.stats[index].change };
    });

const getCovidData: GetCovidDataFn = (selectedCountry, setCovidData, history) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/countries/${selectedCountry}`)
        .then((res) => res.json())
        .then((data) => {
            setCovidData({ ...data, stats: joinStats(data) });
            history.replace({ pathname: `/${selectedCountry}` }); // change URL in case user wants to share
        });
};

const Home: React.FC = () => {
    const [covidData, setCovidData] = useState<CovidDataType>({ deaths: [], cases: [], categories: [], stats: [] });
    const [allCountries, setAllCountries] = useState<string[]>([]);
    const { country } = useParams<RouteParams>();
    const history = useHistory();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/countries`)
            .then((res) => res.json())
            .then((data) => setAllCountries(data));

        getCovidData(country, setCovidData, history);
    }, []);

    return (
        <PageWrapper>
            {covidData.deaths.length !== 0 ? (
                <div>
                    <Dropdown
                        options={allCountries}
                        value={country}
                        handleChange={(e) => getCovidData(e.target.value, setCovidData, history)}
                    />

                    <StatsBox statsData={covidData.stats} />

                    <S.ChartsDiv>
                        <HighchartsReact highcharts={Highcharts} options={getOptions(covidData)} />
                    </S.ChartsDiv>
                </div>
            ) : (
                <Loading />
            )}
        </PageWrapper>
    );
};
export default Home;
