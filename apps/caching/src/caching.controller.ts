import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CachingService } from './caching.service';

@Controller()
export class CachingController {
  constructor(private readonly cachingService: CachingService) {}

  @MessagePattern('CACHE_SERVICE:get-number')
  getHello(): string {
    return this.cachingService.getHello();
  }
}
