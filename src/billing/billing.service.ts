import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Billing } from 'shared/dto/billing.dto';
import { CreateBillingDto } from 'shared/dto/create-billing.dto';

@Injectable()
export class BillingService {
    constructor(@InjectModel('Billing') private readonly billingModel: Model<Billing>){}

    async create(createBilllingDto: CreateBillingDto): Promise<Billing>{
        const createdBilling = new this.billingModel(createBilllingDto);
        return await createdBilling.save();
    }

    async findAll(): Promise<Billing>{
        const billlings = new this.billingModel.find({}).exec
        return billlings;
    }

}
