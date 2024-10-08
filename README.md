This project is a MERN stack application that consumes a third-party API to manage product transactions. It provides backend APIs to list, search, paginate, and analyze transaction data, as well as frontend components to display this data in tables and charts.

Features
API to initialize database: Fetch and seed transaction data from the third-party API.
List transactions: Search and paginate through transaction records.
Statistics API: Display total sales, sold items, and unsold items for a selected month.
Bar Chart API: Show a chart with price ranges and the number of items sold in those ranges.
Pie Chart API: Display categories and the number of items in each category for the selected month.
Combined API: Fetches and combines all transaction data, statistics, bar chart, and pie chart responses into a single response.
Frontend: Displays transactions, statistics, and charts in a user-friendly interface using React.

Technologies Used
Frontend: React, Vite, Axios, Chart.js
Backend: Node.js, Express, Mongoose, MongoDB
Charts: Chart.js (for Bar and Pie Charts)
