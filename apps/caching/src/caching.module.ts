import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { redisStore } from 'cache-manager-redis-store';
import { CachingController } from './caching.controller';
import { CachingService } from './caching.service';
import { CelebController } from './celeb/celeb.controller';
import { Celeb, CelebSchema } from './celeb/celeb.model';
import { CelebService } from './celeb/celeb.service';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store: async () =>
        await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        }),
      host: 'localhost',
      port: 6379,
    }),
    MongooseModule.forRoot('mongodb://localhost:27700/movie'),
    MongooseModule.forFeature([{ name: Celeb.name, schema: CelebSchema }]),
  ],
  controllers: [CachingController, CelebController],
  providers: [CachingService, CelebService, Celeb],
  exports: [Celeb],
})
export class CachingModule {}
