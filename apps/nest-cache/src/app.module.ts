import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { CelebService } from './celeb/celeb.service';
import { CelebController } from './celeb/celeb.controller';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { RatingService } from './rating/rating.service';
import { RatingController } from './rating/rating.controller';
import { PrincipalsService } from './principals/principals.service';
import { PrincipalsController } from './principals/principals.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Rating, RatingSchema } from './rating/rating.model';
import { Celeb, CelebSchema } from './celeb/celeb.model';
import { Movie, MovieSchema } from './movie/movie.model';
import { Principal, PrincipalSchema } from './principals/principals.model';
import { redisStore } from 'cache-manager-redis-store';

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
    MongooseModule.forFeature([
      { name: Rating.name, schema: RatingSchema },
      { name: Celeb.name, schema: CelebSchema },
      { name: Movie.name, schema: MovieSchema },
      { name: Principal.name, schema: PrincipalSchema },
    ]),
  ],
  controllers: [
    AppController,
    StudentController,
    CelebController,
    MovieController,
    RatingController,
    PrincipalsController,
  ],
  providers: [
    AppService,
    StudentService,
    CelebService,
    MovieService,
    RatingService,
    PrincipalsService,
  ],
})
export class AppModule {}
