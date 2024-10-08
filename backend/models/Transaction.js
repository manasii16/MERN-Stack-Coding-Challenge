// models/Transaction.js
const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  category: String,
  status: String,
  amount: Number,
});
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
