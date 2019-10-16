import { Module } from '@nestjs/common';
import { BillingModule } from './billing/billing.module';
import { MongooseModule} from '@nestjs/mongoose'
import config from './config/config';

@Module({
  imports: [BillingModule, MongooseModule.forRoot(`${config.MONGO_URI}`)],
  controllers: [],
  providers: [],
})
export class AppModule {}
