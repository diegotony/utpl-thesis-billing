import * as mongoose from 'mongoose'
export const BillingSchema = new mongoose.Schema({
    // id_menu:{type: mongoose.Schema.Types.ObjectId, required:[true,'Debe asignar el id del menu']},
    id_user:{type: mongoose.Schema.Types.ObjectId, required:[true,'Debe asignar el id del user']},
    id_order:{type: mongoose.Schema.Types.ObjectId, required:[true,'Debe asignar el id del order']},    
    total: {type: Number, required:[true,'Debe asignar el total']},
});