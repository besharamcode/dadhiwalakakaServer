import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.LOCAL_DATABASE_URI
    // const uri = process.env.PROD_DATABASE_URI
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
