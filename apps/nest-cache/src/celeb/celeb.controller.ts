import { Controller } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/common/cache';
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

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(5)
  @Get('/search')
  async searchNameLimit(
    @Query('name') name: string,
    @Query('limit') limit: number,
  ) {
    console.log(`Here ${limit}`);
    const startTime = performance.now();

    const data = await this.celebService.searchNameLimit(name, +limit);

    const endTime = performance.now();

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
    return data;
  }
}
