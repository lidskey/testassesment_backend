import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { AppController } from './app.controller';



@Module({
  imports: [CountriesModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
