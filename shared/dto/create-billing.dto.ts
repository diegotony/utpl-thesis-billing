import{IsNotEmpty} from 'class-validator';
export class CreateBillingDto{
    readonly _id: string;
    readonly id_user: string;
    readonly id_order: string;
    readonly total: number;
}