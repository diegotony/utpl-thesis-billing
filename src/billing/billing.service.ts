import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Billing } from 'shared/dto/billing.dto';
import { CreateBillingDto } from 'shared/dto/create-billing.dto';

@Injectable()
export class BillingService {
    constructor(@InjectModel('Billing') private readonly billingModel: Model<Billing>){}

    async create(createBilllingDto: CreateBillingDto): Promise<Billing>{
      try {
        const createdBilling = new this.billingModel(createBilllingDto);
        if (!createdBilling){
            throw new HttpException('Upps error ...', HttpStatus.BAD_REQUEST);
        }
        return await createdBilling.save();
      } catch (error) {
        throw new HttpException(`Callback getUser ${error.message}`, HttpStatus.BAD_REQUEST);
      }
    }

    async findAll(): Promise<Billing>{
        const billlings = new this.billingModel.find({}).exec
        return billlings;
    }

}
