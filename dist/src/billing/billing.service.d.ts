import { Model } from 'mongoose';
import { Billing } from 'shared/dto/billing.dto';
import { CreateBillingDto } from 'shared/dto/create-billing.dto';
export declare class BillingService {
    private readonly billingModel;
    constructor(billingModel: Model<Billing>);
    create(createBilllingDto: CreateBillingDto): Promise<Billing>;
    findAll(): Promise<Billing>;
}
