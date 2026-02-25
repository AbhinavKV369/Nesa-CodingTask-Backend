import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Connection to DB failed ",error)
    }
}

export default connectDb;