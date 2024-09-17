export interface Countries {
    countryCode: string;
    name: string;
}

export interface CountryInfo {
    commonName: string
    officialName: string
    countryCode: string
    region: string
    borders: null
}

export interface ApiRequest{
    country: string
}

export interface YearPopulation{
    year: number
    value: number
}

export interface PopulationData {
    country: string
    code: string
    iso3: string
    populationCounts: YearPopulation[]
}

export interface FlagService {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;

}
