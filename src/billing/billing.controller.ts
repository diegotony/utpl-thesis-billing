import { Get,Post,Put,Delete,Body,HttpCode,Controller } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from '../../shared/dto/create-billing.dto';

@Controller('billing')
export class BillingController {
    constructor(private readonly billingService: BillingService){}

    @Post()
    @HttpCode(201)
    async createBilling(@Body() dto: CreateBillingDto){
        return (await this.billingService.create(dto))
    }

    // @Get()
    // @HttpCode(200)
    // async getBillings()
}
