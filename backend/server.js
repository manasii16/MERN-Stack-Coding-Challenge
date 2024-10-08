const express = require("express");
const cors = require("cors");
const axios = require("axios");
const connectDB = require("./db");
transactionRoutes = require("./routes/transactionsRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

app.use("/api/transactions", transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
