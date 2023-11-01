import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CaseConversion,
  CaseConversionInterceptor,
} from './interceptors/caseConversionInterceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('to-camel-from-snake')
  @UseInterceptors(new CaseConversionInterceptor(CaseConversion.CamelCase))
  getToCamelFromSnakeCase() {
    return this.appService.getToCamelFromSnakeCase();
  }

  @Get('to-snake-from-camel')
  @UseInterceptors(new CaseConversionInterceptor(CaseConversion.SnakeCase))
  getToSnakeFromCamelCase() {
    return this.appService.getToSnakeFromCamelCase();
  }
}
