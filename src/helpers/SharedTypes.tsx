export interface CovidDataType {
    deaths: number[];
    cases: number[];
    categories: string[];
    stats: StatsObj[];
}

export type StatsObj = {
    id: number;
    title: string;
    icon: string;
    stats: number;
    change: number;
};
