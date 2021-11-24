import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

const hasCauseProperty = <T>(obj: T): obj is T & { cause: string } => {
  return Object.prototype.hasOwnProperty.call(obj, 'cause');
};

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.code;
    const meta = exception.meta;

    /**
     * @see https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
     */
    if (status === 'P2025') {
      const defaultError =
        'An operation failed because it depends on one or more records that were required but not found.';
      const error = hasCauseProperty(meta) ? meta.cause : defaultError;
      return response.status(400).json({
        statusCode: 400,
        error,
      });
    }
    return response.status(500).json({
      statusCode: status,
      error: exception.message,
    });
  }
}
