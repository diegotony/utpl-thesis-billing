import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingService } from './billing/billing.service';
import { BillingController } from './billing/billing.controller';
import { BillingModule } from './billing/billing.module';
import { MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [BillingModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, BillingController],
  providers: [AppService, BillingService],
})
export class AppModule {}
