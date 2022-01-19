import { PrismaClient } from '@prisma/client';
import {
  INestApplication,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      rejectOnNotFound: {
        findUnique: (err) => new NotFoundException(err.message),
        findFirst: (err) => new NotFoundException(err.message),
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
