import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiArrayResponse = <TModel extends Type>(model: TModel) =>
  applyDecorators(
    ApiOkResponse({
      schema: {
        type: 'array',
        items: { $ref: getSchemaPath(model) },
      },
    }),
  );
