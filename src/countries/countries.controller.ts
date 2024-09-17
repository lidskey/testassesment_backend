import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiRequest, PopulationData, YearPopulation } from './countries.interface';
import { Observable } from 'rxjs';

@Controller('/countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get('/all')
    async getAvailableCountries() {
        return this.countriesService.getAvailableCountries();
    }

    @Get('/:countryCode')
    async getBorderCountries(@Param('countryCode') countryCode: string) {

        return this.countriesService.getBorderCountries(countryCode);
    }

    @Post('/population')
    async getHistoricalPopulationData(@Body() country: ApiRequest) {
        return this.countriesService.getHistoricalPopulationData(country);
    }

    @Post('/flag/images')
    async getCountryFlag(@Body() iso2: string) {
        return this.countriesService.getFlagUrl(iso2);
    }


}


