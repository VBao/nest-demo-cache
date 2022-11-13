import { Schema } from '@nestjs/mongoose';
import { MongooseModule, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type CelebDocument = HydratedDocument<Celeb>;

@Schema({ collection: 'celebs' })
export class Celeb {
  imdb_name_id: string;
  name: string;
  birth_name: string;
  height: number;
  bio: string;
  birth_details: string;
  date_of_birth: Date;
  place_of_birth: string;
  death_details: string;
  date_of_death: Date;
  place_of_death: string;
  reason_of_death: string;
  spouses_string: string;
  spouses: number;
  divorces: number;
  spouses_with_children: number;
  children: number;
}

const CelebSchema = SchemaFactory.createForClass(Celeb);

CelebSchema.index({ height: 'desc' });

export { CelebSchema };
