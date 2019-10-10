import{IsNotEmpty} from 'class-validator';
export class CreateBillingDto{
    @IsNotEmpty()
    readonly id_user: string;
    @IsNotEmpty()
    readonly id_order: string;
    @IsNotEmpty()
    readonly total: number;
}