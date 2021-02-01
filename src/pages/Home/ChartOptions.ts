import { CovidDataType } from '../../helpers/SharedTypes';
import theme from '../../theme';

type GetOptionsFn = (covidData: CovidDataType) => Record<string, unknown>;

export const getOptions: GetOptionsFn = (covidData) => {
    return {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Total cases and deaths',
        },
        xAxis: {
            title: {
                text: 'Week no.',
            },
            categories: covidData.categories,
        },
        yAxis: {
            title: {
                text: 'People',
            },
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                },
                enableMouseTracking: true,
            },
        },
        series: [
            {
                name: `Total deaths`,
                data: covidData.deaths,
                color: theme.secondary.color,
            },
            {
                name: `Total cases`,
                data: covidData.cases,
                color: theme.primary.color,
            },
        ],
    };
};
