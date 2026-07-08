const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerce";

  if (!process.env.MONGODB_URI) {
    console.warn(
      "Warning: MONGODB_URI is not set. Falling back to local MongoDB at mongodb://127.0.0.1:27017/ecommerce"
    );
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
