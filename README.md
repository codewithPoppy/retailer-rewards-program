# Rewards Program

This project demonstrates a rewards program for a retail scenario, where customers earn points for each transaction based on the amount spent. The system calculates reward points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100.

## Features

- **React JS Implementation:** Utilizes React JS for building the user interface without TypeScript.
- **Asynchronous Data Fetching:** Simulates fetching transaction data asynchronously to mimic real-life API calls.
- **Dynamic Reward Calculation:** Calculates rewards based on customer transactions dynamically, demonstrating logic handling within the React application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your computer to run this project. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/codewithPoppy/retailer-rewards-program.git
```
Navigate to the project directory:
```
cd retailer-rewards-program
```
Install the necessary packages:
```
npm install
```
Start the development server:
```
npm start
```
The application will open in your default web browser at http://localhost:3000.
# Usage
After starting the application, it will automatically load the simulated transaction data. The UI presents a dashboard where reward points earned by each customer per month and the total are displayed.

# Running the Tests
To ensure the reliability of the application, unit tests have been included. Run the following command to execute the tests:

```
npm test
```

# Customer Data Generation Script

## Generating and Exporting Customer Data to JSON

This script demonstrates how to generate sample customer data with transactions and export it to a JSON file using Node.js and the `fs` module.

## Key Features:

* Generates realistic customer data with:
    * Customer IDs
    * Customer names
    * Multiple transactions per customer
    * Random transaction dates within a specified range
    * Random transaction amounts within a specified range
* Validates input arguments for data generation
* Writes the generated data to a JSON file

## Prerequisites:

* Node.js installed on your system

## Usage:

1. **Navigate to the script's directory** in your terminal.
2. **Run the script with command-line arguments:**

```bash
node script.js <dateRangeStart> <dateRangeEnd> <amountRangeMin> <amountRangeMax> <numCustomers> <numTransactionsPerCustomer>
```
Example code:
```
node script.js 2023-01-01 2024-01-01 100 500 5 10
```


## Arguments:

* `dateRangeStart`: Starting date for transaction dates (YYYY-MM-DD)
* `dateRangeEnd`: Ending date for transaction dates (YYYY-MM-DD)
* `amountRangeMin`: Minimum transaction amount (numeric)
* `amountRangeMax`: Maximum transaction amount (numeric)
* `numCustomers`: Number of customers to generate
* `numTransactionsPerCustomer`: Number of transactions per customer

## Output:

* Creates a JSON file named `sampleData.json` in the `./src/api` directory with the generated customer data.

## File System Interaction:

* The script uses the `fs` module to interact with the file system.
* It imports the `fs` module with `const fs = require("fs");`.
* It uses the `fs.writeFile` function to write the JSON data to the specified file.

## Additional Notes:

* Error handling is included for file writing operations.
* The generated JSON data is indented for readability.
* Consider customizing date and amount ranges, as well as output filename, to suit your specific needs.
