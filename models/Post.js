import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true},
    caption: {type: String, required: false},
    day: {type: String, required: true},
    userId: {type: String, required: true},
    petId: {type: String, required: true}
})

export const petPost = mongoose.model('PetPosts', PostSchema)

