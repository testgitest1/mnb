import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error.message);
        process.exit(1); // Exit the application if the connection fails
    }
};


export default connectDB