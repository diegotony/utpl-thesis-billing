import { BillingService } from './billing.service';
import { CreateBillingDto } from '../../shared/dto/create-billing.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    createBilling(dto: CreateBillingDto): Promise<import("../../shared/dto/billing.dto").Billing>;
}
