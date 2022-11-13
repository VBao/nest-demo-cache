import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { Celeb } from 'apps/caching/src/celeb/celeb.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  async getLimit(limit: number): Promise<Celeb[]> {
    const data = await firstValueFrom(
      this.cacheService.send<Celeb[]>('CACHE_SERVICE:get-limit', limit),
    );
    return data;
  }
  constructor(@Inject('CACHE_SERVICE') private cacheService: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }
}
