import { CallHandler, ExecutionContext } from '@nestjs/common';
import {
  CaseConversion,
  CaseConversionInterceptor,
} from './interceptors/caseConversionInterceptor';
import { of } from 'rxjs';

const mockSnakeData = {
  first_field: 'first',
  second_field: 'second',
  third_field: [
    {
      fourth_field: 'fourth',
      fifth_field: 'fifth',
    },
  ],
};

const mockCamelData = {
  firstField: 'first',
  secondField: 'second',
  thirdField: [
    {
      fourthField: 'fourth',
      fifthField: 'fifth',
    },
  ],
};

describe('CaseInterceptor', () => {
  it('should convert snake_case to camelCase', () => {
    const caseConversionInterceptor = new CaseConversionInterceptor(
      CaseConversion.CamelCase,
    );

    const mockHandler: CallHandler = {
      handle: () => of(mockSnakeData),
    };

    const mockExecutionContext = {} as unknown as ExecutionContext;

    const result = caseConversionInterceptor.intercept(
      mockExecutionContext,
      mockHandler,
    );

    result.subscribe({
      next: (val) => {
        expect(val).toEqual(mockCamelData);
      },
      complete: () => null,
    });
  });

  it('should convert camelCase to snake_case', () => {
    const caseConversionInterceptor = new CaseConversionInterceptor(
      CaseConversion.SnakeCase,
    );

    const mockHandler: CallHandler = {
      handle: () => of(mockCamelData),
    };

    const mockExecutionContext = {} as unknown as ExecutionContext;

    const result = caseConversionInterceptor.intercept(
      mockExecutionContext,
      mockHandler,
    );

    result.subscribe({
      next: (val) => {
        expect(val).toEqual(mockSnakeData);
      },
      complete: () => null,
    });
  });
});
