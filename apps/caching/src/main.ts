import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { TcpOptions } from '@nestjs/microservices/interfaces';
import { CachingModule } from './caching.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CachingModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    } as TcpOptions,
  );
  await app.listen();
}
bootstrap();
