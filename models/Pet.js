import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specie: { type: String, required: true },
    sex: { type: String, required: false },
    birth: { type: String, required: false },
    castrated: { type: String, required: false },
    photoURL: { type: String, required: true },
    breed: { type: String, required: false },
    petType: { type: String, required: true },
    tutorId: { type: String, required: true }
})

export const pet = mongoose.model("Pet", petSchema)