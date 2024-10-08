This project is a MERN stack application that consumes a third-party API to manage product transactions. It provides backend APIs to list, search, paginate, and analyze transaction data, as well as frontend components to display this data in tables and charts.

Features
1. API to initialize database: Fetch and seed transaction data from the third-party API.
2. List transactions: Search and paginate through transaction records.
3. Statistics API: Display total sales, sold items, and unsold items for a selected month.
4. Bar Chart API: Show a chart with price ranges and the number of items sold in those ranges.
5. Pie Chart API: Display categories and the number of items in each category for the selected month.
6. Combined API: Fetches and combines all transaction data, statistics, bar chart, and pie chart responses into a single response.
7. Frontend: Displays transactions, statistics, and charts in a user-friendly interface using React.

Technologies Used
1. Frontend: React, Vite, Axios, Chart.js
2. Backend: Node.js, Express, Mongoose, MongoDB
3. Charts: Chart.js (for Bar and Pie Charts)
