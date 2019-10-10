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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const billing_service_1 = require("./billing.service");
const create_billing_dto_1 = require("../../shared/dto/create-billing.dto");
let BillingController = class BillingController {
    constructor(billingService) {
        this.billingService = billingService;
    }
    async createBilling(dto) {
        return (await this.billingService.create(dto));
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_billing_dto_1.CreateBillingDto]),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "createBilling", null);
BillingController = __decorate([
    common_1.Controller('billing'),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], BillingController);
exports.BillingController = BillingController;
//# sourceMappingURL=billing.controller.js.map