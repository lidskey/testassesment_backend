import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { filter, firstValueFrom, map, Observable } from 'rxjs';
import { ApiRequest, Countries, PopulationData, YearPopulation } from './countries.interface';
const axios = require('axios');

@Injectable()
export class CountriesService {
    constructor(private readonly httpService: HttpService) { }


    getAvailableCountries(): Observable<Countries> {
        return this.httpService.get(`https://date.nager.at/api/v3/AvailableCountries`).pipe(map((resp) => resp.data));

    }

    getBorderCountries(countryCode: string): Observable<Countries[]> {
        return this.httpService.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`).pipe(map((resp) => resp.data));
    }

    async getHistoricalPopulationData(country: ApiRequest): Promise<any> {
        return this.httpService.post('https://countriesnow.space/api/v0.1/countries/population', country ).pipe(map((resp) => resp.data));
    }

    async getFlagUrl(iso2: string): Promise<any> {
        return this.httpService.post(`https://countriesnow.space/api/v0.1/countries/flag/images` , iso2 ).pipe(map((resp) => resp.data));
    }



}