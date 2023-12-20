import mongoose from "mongoose";
import { mongo_uri } from "../config/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("MongoDB connected");
  } catch (error: any) {
    console.log(error.message);
  }
};
