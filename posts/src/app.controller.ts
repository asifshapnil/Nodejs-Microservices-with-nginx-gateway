import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('userqueuetest')
  async listenUserService(data: string) {
    console.log(data);
  }
}
