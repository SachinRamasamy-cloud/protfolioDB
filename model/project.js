import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    features: {
        type: Array,
        required: true
    },
    stack: {
        type: Array,
        required: true
    }
})

export default mongoose.model("Project", projectSchema)
