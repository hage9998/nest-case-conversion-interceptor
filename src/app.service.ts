import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getToCamelFromSnakeCase() {
    const mockData = {
      first_field: 'first_field',
      second_field: 'second_field',
      third_field: [
        {
          fourth_field: 'fourth_field',
          fifth_field: 'fifth_field',
        },
      ],
    };

    return mockData;
  }

  getToSnakeFromCamelCase() {
    const mockData = {
      firstField: 'firstField',
      secondField: 'secondField',
      thirdField: [
        {
          fourthField: 'fourthField',
          fifthField: 'fifthField',
        },
      ],
    };

    return mockData;
  }
}
