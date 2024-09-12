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

export interface PopulationData {
    year: number;
    population: number;
}

export interface FlagService {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;

}
