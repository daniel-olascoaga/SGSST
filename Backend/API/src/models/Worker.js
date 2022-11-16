import { Schema, model } from "mongoose";

const workerSchema = new Schema ({
    name: String,
    lastname: String,
    age: {type: Number, min: 18, max: 80},
    profession: String,
    role_company: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Worker', workerSchema);