import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Celeb } from './celeb.model';

@Injectable()
export class CelebService {
  constructor(@InjectModel(Celeb.name) private celebModel: Model<Celeb>) {}
  async getLimit(limit: number) {
    return await this.celebModel.find({ _: true }).limit(limit).exec();
  }

  async searchNameLimit(name: string, limit: number) {
    return await this.celebModel
      .find({ name: { $regex: name } })
      .limit(limit)
      .exec();
  }
}
