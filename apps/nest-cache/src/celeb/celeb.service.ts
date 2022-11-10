import { Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/common/cache';
import { Inject } from '@nestjs/common/decorators';
import { Cache } from 'cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Celeb } from './celeb.model';

@Injectable()
export class CelebService {
  constructor(
    @InjectModel(Celeb.name) private celebModel: Model<Celeb>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  async getLimit(limit: number) {
    return await this.celebModel.find({ _: true }).limit(limit).exec();
  }

  async searchNameLimit(name: string, limit: number) {
    const cachedData = await this.cacheService.get('search');
    if (cachedData) {
      return cachedData;
    }
    const data = await this.celebModel
      .find({ name: { $regex: name } })
      .limit(limit)
      .exec();
    await this.cacheService.set('search', data);
    return data;
  }
}
