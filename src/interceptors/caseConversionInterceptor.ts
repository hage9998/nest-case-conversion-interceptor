import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

export enum CaseConversion {
  SnakeCase = 'SnakeCase',
  CamelCase = 'CamelCase',
}

@Injectable()
export class CaseConversionInterceptor implements NestInterceptor {
  constructor(private readonly caseConversion: CaseConversion) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next
      .handle()
      .pipe(map((data) => this.recursiveConvertObjectToCase(data)));
  }

  private recursiveConvertObjectToCase(data: unknown): unknown {
    if (_.isArray(data)) {
      return data.map((item) => this.recursiveConvertObjectToCase(item));
    } else if (_.isObject(data)) {
      const caseObject = {} as any;

      for (const key in data) {
        const caseKey = this.convertToCase(key);

        caseObject[caseKey] = this.recursiveConvertObjectToCase(
          data[key as keyof typeof data],
        );
      }
      return caseObject;
    } else {
      return data;
    }
  }

  private convertToCase(key: string): string {
    switch (this.caseConversion) {
      case 'CamelCase':
        return _.camelCase(key);
      case 'SnakeCase':
        return _.snakeCase(key);
      default:
        return key;
    }
  }
}
