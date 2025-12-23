import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("MongoDB is connected Successfully")
    } catch (error) {
        console.error("Failed to connect DB",error)
        process.exit(1)
    }
}

export default connectDB