import { Module } from '@nestjs/common';
import { BillingModule } from './billing/billing.module';
import { MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [BillingModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [],
  providers: [],
})
export class AppModule {}
