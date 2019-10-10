import * as mongoose from 'mongoose'
export const BillingSchema = new mongoose.Schema({
    id_menu:{type: mongoose.Schema.Types.ObjectId},
    id_user:{type: mongoose.Schema.Types.ObjectId},
    id_order:{type: mongoose.Schema.Types.ObjectId},    
    total: {type: Number},
});