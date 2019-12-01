import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import config from './config/config';


@Controller()
export class AppController {
  private readonly client: ClientProxy;

  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create(
      {
        transport: Transport.REDIS,
        options:{
          url:'redis://'+config.REDIS_HOST+':6379',
        }
      }
    );
  }

  // @Get('all')
  // getMovies() {
  //   return this.client.send<string[]>({cmd: 'getIdUser'}, []);
  // }

  @Get('hello')
  listMovies() {
    console.log("oka")
    const pattern = { cmd: 'LIST_MOVIES' };

    return this.client.send<string[]>(pattern, []);
  }
}
