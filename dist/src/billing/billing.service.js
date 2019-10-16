"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let BillingService = class BillingService {
    constructor(billingModel) {
        this.billingModel = billingModel;
    }
    async create(createBilllingDto) {
        try {
            const createdBilling = new this.billingModel(createBilllingDto);
            if (!createdBilling) {
                throw new common_1.HttpException('Upps error ...', common_1.HttpStatus.BAD_REQUEST);
            }
            return await createdBilling.save();
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(`Callback getUser ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const billlings = this.billingModel.find().exec();
            if (!billlings) {
                throw new common_1.HttpException('Upps error ...', common_1.HttpStatus.BAD_REQUEST);
            }
            return billlings;
        }
        catch (error) {
            throw new common_1.HttpException(`Callback getUser ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
BillingService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Billing')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], BillingService);
exports.BillingService = BillingService;
//# sourceMappingURL=billing.service.js.map