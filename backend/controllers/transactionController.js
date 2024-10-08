const axios = require("axios");
const Transaction = require("../models/Transaction");

exports.initializeDatabase = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );

    // Insert the data into the MongoDB database
    await Transaction.insertMany(data);

    res.status(200).json({ message: "Database initialized successfully!" });
  } catch (error) {
    console.error("Error initializing database:", error); // Log the full error for debugging
    res.status(500).json({
      message: "Error initializing database",
      error: error.message || error, // Include error details
    });
  }
};

// Function to list transactions
exports.listTransactions = async (req, res) => {
  const { page = 1, search = "" } = req.query;
  const limit = 10; // Number of transactions per page
  const offset = (page - 1) * limit;

  try {
    const transactions = await Transaction.find({
      $or: [
        { description: { $regex: search, $options: "i" } },
        { amount: { $regex: search } },
      ],
    })
      .limit(limit)
      .skip(offset);

    const totalCount = await Transaction.countDocuments({
      $or: [
        { description: { $regex: search, $options: "i" } },
        { amount: { $regex: search } },
      ],
    });

    res.status(200).json({ transactions, totalCount });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions." });
  }
};

// Function to get statistics for a specified month
exports.getStatistics = async (req, res) => {
  const month = req.query.month;

  try {
    const statistics = await Transaction.aggregate([
      { $match: { month: month } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          transactionCount: { $sum: 1 },
        },
      },
    ]);

    if (statistics.length > 0) {
      res.status(200).json(statistics[0]);
    } else {
      res.status(404).json({ message: "No statistics found for this month." });
    }
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({ error: "Failed to fetch statistics." });
  }
};

// Function to get bar chart data
exports.getBarChartData = async (req, res) => {
  const month = req.query.month;

  try {
    const barChartData = await Transaction.aggregate([
      { $match: { month: month } },
      { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
    ]);

    res.status(200).json(barChartData);
  } catch (error) {
    console.error("Error fetching bar chart data:", error);
    res.status(500).json({ error: "Failed to fetch bar chart data." });
  }
};

// Function to get pie chart data
exports.getPieChartData = async (req, res) => {
  const month = req.query.month;

  try {
    const pieChartData = await Transaction.aggregate([
      { $match: { month: month } },
      { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
    ]);

    res.status(200).json(pieChartData);
  } catch (error) {
    console.error("Error fetching pie chart data:", error);
    res.status(500).json({ error: "Failed to fetch pie chart data." });
  }
};
