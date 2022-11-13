import { Controller } from '@nestjs/common';
import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  CACHE_MANAGER,
} from '@nestjs/common/cache';
import {
  Get,
  Inject,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoggingInterceptor } from 'apps/nest-cache/logging.interceptor';
import { Cache } from 'cache-manager';
import { Celeb } from './celeb.model';
import { CelebService } from './celeb.service';

@UseInterceptors(LoggingInterceptor)
@Controller('celeb')
export class CelebController {
  constructor(
    private celebService: CelebService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  @MessagePattern('CACHE_SERVICE:get-limit')
  async getAll(@Payload() limit: number) {
    let cachedData = await this.cacheService.get<Celeb[]>(`get-${limit}`);
    console.log(`get-${limit}`);
    if (cachedData) {
      console.log('CACHED');
      return cachedData;
    }
    console.log('NOT CACHED');
    cachedData = await this.celebService.getLimit(+limit);
    await this.cacheService.set(`get-${limit}`, cachedData);
    return cachedData;
  }

  @Get('/search')
  async searchNameLimit(
    @Query('name') name: string,
    @Query('limit') limit: number,
  ) {
    const data = await this.celebService.searchNameLimit(name, +limit);

    return data;
  }
}
