import mongoose from "mongoose";

const VaccineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    dose: { type: String, required: true },
    day: { type: String, required: true },
    petId: { type: String, required: true },
    tutorId: { type: String, required: true }
})

export const Vacina = mongoose.model('Vaccine', VaccineSchema)  