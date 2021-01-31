export interface CovidDataType {
    country: string;
    cntry_code?: string;
    continent: string;
    population: number;
    weekly_count: number;
    year_week: string;
    rate_14_day?: string;
    cumulative_count: number;
    source: string;
}
