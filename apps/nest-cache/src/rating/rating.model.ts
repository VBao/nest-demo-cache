import { Schema } from '@nestjs/mongoose';
import { MongooseModule, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type RatingDocument = HydratedDocument<Rating>;

@Schema({ collection: 'ratings' })
export class Rating {
  imdb_title_id: string;
  weighted_average_vote: number;
  total_votes: number;
  mean_vote: number;
  median_vote: number;
  votes_10: number;
  votes_9: number;
  votes_8: number;
  votes_7: number;
  votes_6: number;
  votes_5: number;
  votes_4: number;
  votes_3: number;
  votes_2: number;
  votes_1: number;
  allgenders_0age_avg_vote: number;
  allgenders_0age_votes: number;
  allgenders_18age_avg_vote: number;
  allgenders_18age_votes: number;
  allgenders_30age_avg_vote: number;
  allgenders_30age_votes: number;
  allgenders_45age_avg_vote: number;
  allgenders_45age_votes: number;
  males_allages_avg_vote: number;
  males_allages_votes: number;
  males_0age_avg_vote: number;
  males_0age_votes: number;
  males_18age_avg_vote: number;
  males_18age_votes: number;
  males_30age_avg_vote: number;
  males_30age_votes: number;
  males_45age_avg_vote: number;
  males_45age_votes: number;
  females_allages_avg_vote: number;
  females_allages_votes: number;
  females_0age_avg_vote: number;
  females_0age_votes: number;
  females_18age_avg_vote: number;
  females_18age_votes: number;
  females_30age_avg_vote: number;
  females_30age_votes: number;
  females_45age_avg_vote: number;
  females_45age_votes: number;
  top1000_voters_rating: number;
  top1000_voters_votes: number;
  us_voters_rating: number;
  us_voters_votes: number;
  non_us_voters_rating: number;
  non_us_voters_votes: number;
}

const RatingSchema = SchemaFactory.createForClass(Rating);

RatingSchema.index({ total_votes: 'desc', weighted_average_vote: 'desc' });

export { RatingSchema };
