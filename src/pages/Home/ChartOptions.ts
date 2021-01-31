import { CovidDataType } from '../../helpers/SharedTypes';

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
            min: 0,
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
            },
            {
                name: `Total cases`,
                data: covidData.cases,
            },
        ],
    };
};
