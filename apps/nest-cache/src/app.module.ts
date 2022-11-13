import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { RatingService } from './rating/rating.service';
import { RatingController } from './rating/rating.controller';
import { PrincipalsService } from './principals/principals.service';
import { PrincipalsController } from './principals/principals.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Rating, RatingSchema } from './rating/rating.model';
import { Movie, MovieSchema } from './movie/movie.model';
import { Principal, PrincipalSchema } from './principals/principals.model';
import { ClientsModule } from '@nestjs/microservices/module';
import { Transport } from '@nestjs/microservices/enums';
import { Celeb } from 'apps/caching/src/celeb/celeb.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27700/movie'),
    MongooseModule.forFeature([
      { name: Rating.name, schema: RatingSchema },
      { name: Movie.name, schema: MovieSchema },
      { name: Principal.name, schema: PrincipalSchema },
    ]),
    ClientsModule.register([
      {
        name: 'CACHE_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
    Celeb,
  ],
  controllers: [
    AppController,
    StudentController,
    MovieController,
    RatingController,
    PrincipalsController,
  ],
  providers: [
    AppService,
    StudentService,
    MovieService,
    RatingService,
    PrincipalsService,
  ],
})
export class AppModule {}
