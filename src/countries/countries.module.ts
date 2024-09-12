import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { HttpModule } from '@nestjs/axios';
import { CountriesController } from './countries.controller';


@Module({
  imports: [HttpModule],
  providers: [CountriesService],
  controllers: [CountriesController],
  exports: [HttpModule],
})
export class CountriesModule {}
