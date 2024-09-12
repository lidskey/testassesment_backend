import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('/countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get('/all')
    async getAvailableCountries() {
        return this.countriesService.getAvailableCountries();
    }

    @Get('/:code')
    async getCountryInfo(@Param('code') code:string) {
        return this.countriesService.getBorderCountries(code);
    }

    @Get('/:population')
    async getPopulationData(@Param('population')population: number) {
        return this.countriesService.getPopulationData(population);
    }

    @Get('/:images')
    async getgetCountryFlag(@Param('flag') url: string) {
        return this.countriesService.getFlagUrl(url);
    }


}


