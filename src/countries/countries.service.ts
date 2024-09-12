import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Countries } from './countries.interface';

@Injectable()
export class CountriesService {
    constructor(private readonly httpService: HttpService){}
    
    
    getAvailableCountries(): Observable<Countries> {
        return this.httpService.get(`https://date.nager.at/api/v3/AvailableCountries`).pipe(map((resp) => resp.data));
        
    }

    getBorderCountries(code:string): Observable<Countries[]>{ 
        return this.httpService.get(`https://date.nager.at/api/v3/CountryInfo/UA`).pipe(map((resp) => resp.data));
    }
    
    getPopulationData(population: number): Observable<Countries[]> {
        return this.httpService.get(`https://countriesnow.space/api/v0.1/countries/population`).pipe(map((resp) => resp.data));
    }

    getFlagUrl(flag: string): Observable<Countries[]> {
        return this.httpService.get(`https://countriesnow.space/api/v0.1/countries/flag/images`).pipe(map((resp) => resp.data));
    }

   

}