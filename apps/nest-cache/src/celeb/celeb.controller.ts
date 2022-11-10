import { Controller } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/common/cache';
import { Get, Param, Query, UseInterceptors } from '@nestjs/common/decorators';
import { LoggingInterceptor } from 'apps/nest-cache/logging.interceptor';
import { CelebService } from './celeb.service';

@UseInterceptors(LoggingInterceptor)
@Controller('celeb')
export class CelebController {
  constructor(private celebService: CelebService) {}

  @Get('/limit/:limit')
  async getAll(@Param('limit') limit: number) {
    return await this.celebService.getLimit(+limit);
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
