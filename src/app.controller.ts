import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ApiImplicitParam } from '@nestjs/swagger';
import { Response } from 'express';



@Controller()
export class AppController {

  private readonly order: ClientProxy
  private readonly client: ClientProxy;
  constructor(private readonly appService: AppService) {
  }


  @Get('billing/order/:id')
  @ApiImplicitParam({ name: 'id' })
  async test(@Param() params, @Res() res: Response) {
    let data = this.appService.gatData(params.id)
    return res.json({'dd':data})


  }

}