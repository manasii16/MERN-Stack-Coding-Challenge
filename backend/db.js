const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://manasishivarkar:FyH2Gv9GS24OJT6L@mernstack.n8tqi.mongodb.net/transactionDB"
      // "mongodb://localhost:27017/transactionDB"
      "mongodb+srv://manasishivarkar:FyH2Gv9GS24OJT6L@mernstack.n8tqi.mongodb.net/transactionDB"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
