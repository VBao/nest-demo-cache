import { Schema } from '@nestjs/mongoose';
import { MongooseModule, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type PrincipalDocument = HydratedDocument<Principal>;

@Schema()
export class Principal {
  imdb_title_id: string;
  ordering: number;
  imdb_name_id: string;
  category: string;
  characters: string;
}

const PrincipalSchema = SchemaFactory.createForClass(Principal);

PrincipalSchema.index({ ordering: 'asc' });

export { PrincipalSchema };
