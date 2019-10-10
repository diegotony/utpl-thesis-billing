import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingSchema } from '../schemas/billing.schema';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
    imports:[MongooseModule.forFeature([{name:'Billing', schema: BillingSchema}])],
    controllers:[BillingController],
    providers:[BillingService]
})
export class BillingModule {}
