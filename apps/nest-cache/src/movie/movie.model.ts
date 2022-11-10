import { Schema } from '@nestjs/mongoose';
import { MongooseModule, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({ collection: 'movies' })
export class Movie {
  imdb_title_id: string;
  title: string;
  original_title: string;
  year: number;
  date_published: Date;
  genre: string;
  duration: number;
  country: string;
  language: string;
  director: string;
  writer: string;
  production_company: string;
  actors: string;
  description: string;
  avg_vote: number;
  votes: number;
  reviews_from_users: number;
  reviews_from_critics: number;
}

const MovieSchema = SchemaFactory.createForClass(Movie);

MovieSchema.index({ avg_vote: 'desc', votes: 'desc' });

export { MovieSchema };
