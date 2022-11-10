import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CelebService } from './celeb/celeb.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly celebService: CelebService,
  ) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
