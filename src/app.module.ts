import { Module } from '@nestjs/common';
import { BillingModule } from './billing/billing.module';
import { MongooseModule} from '@nestjs/mongoose'
import config from './config/config';

@Module({
  imports: [BillingModule, MongooseModule.forRoot("mongodb://"+config.MONGO_HOST+"/"+config.MONGO_DB, {useNewUrlParser: true },)],
  controllers: [],
  providers: [],
})
export class AppModule {}
