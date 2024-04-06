import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    password: { type: String, required: true },
    about: { type: String },
    photo: { type: String },
}, { timestamps: true })

export default mongoose.models.user || mongoose.model("user", userSchema)