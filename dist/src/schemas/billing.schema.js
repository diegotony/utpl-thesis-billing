"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BillingSchema = new mongoose.Schema({
    id_menu: { type: mongoose.Schema.Types.ObjectId },
    id_user: { type: mongoose.Schema.Types.ObjectId },
    id_order: { type: mongoose.Schema.Types.ObjectId },
    total: { type: Number },
});
//# sourceMappingURL=billing.schema.js.map