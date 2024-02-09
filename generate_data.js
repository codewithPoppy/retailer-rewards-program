const fs = require("fs");

function generateCustomerData(
  dateRangeStart,
  dateRangeEnd,
  amountRangeMin,
  amountRangeMax,
  numCustomers,
  numTransactionsPerCustomer
) {
  // Validate and convert date arguments from strings to Date objects
  dateRangeStart = new Date(dateRangeStart);
  dateRangeEnd = new Date(dateRangeEnd);

  // Check if date arguments are valid dates
  if (isNaN(dateRangeStart.getTime()) || isNaN(dateRangeEnd.getTime())) {
    console.error(
      "Invalid date format. Please provide dates in YYYY-MM-DD format."
    );
    return;
  }

  // Validate and convert numerical arguments
  amountRangeMin = parseInt(amountRangeMin);
  amountRangeMax = parseInt(amountRangeMax);
  numCustomers = parseInt(numCustomers);
  numTransactionsPerCustomer = parseInt(numTransactionsPerCustomer);

  // Check if numerical arguments are valid numbers
  if (
    isNaN(amountRangeMin) ||
    isNaN(amountRangeMax) ||
    isNaN(numCustomers) ||
    isNaN(numTransactionsPerCustomer)
  ) {
    console.error("Invalid numeric arguments. Please provide valid numbers.");
    return;
  }

  const customerData = [];

  for (let customerId = 1; customerId <= numCustomers; customerId++) {
    const customerName = `Customer ${customerId}`;
    const transactions = [];

    for (
      let transactionId = 1;
      transactionId <= numTransactionsPerCustomer;
      transactionId++
    ) {
      // Generate random date within the specified range
      const randomDays =
        Math.floor(
          (Math.random() * new Date(dateRangeEnd - dateRangeStart).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1;
      const transactionDate = new Date(
        dateRangeStart.getTime() + randomDays * 24 * 60 * 60 * 1000
      );

      // Generate random amount within the specified range
      const transactionAmount =
        Math.floor(
          (Math.floor(Math.random() * (amountRangeMax - amountRangeMin + 1)) +
            amountRangeMin) /
            10
        ) * 10;

      transactions.push({
        date: transactionDate.toLocaleDateString("en-US"),
        amount: transactionAmount,
      });
    }

    customerData.push({
      customerId: `C${customerId.toString().padStart(3, "0")}`,
      customerName,
      transactions,
    });
  }

  return customerData;
}

// Access command-line arguments from process.argv
const dateRangeStartStr = process.argv[2];
const dateRangeEndStr = process.argv[3];
const amountRangeMinStr = process.argv[4];
const amountRangeMaxStr = process.argv[5];
const numCustomersStr = process.argv[6];
const numTransactionsPerCustomerStr = process.argv[7];
const outputFilename = "./src/api/sampleData.json";

// Generate customer data with validated arguments
const customerData = generateCustomerData(
  dateRangeStartStr,
  dateRangeEndStr,
  amountRangeMinStr,
  amountRangeMaxStr,
  numCustomersStr,
  numTransactionsPerCustomerStr
);

// Convert customer data to JSON string
const jsonData = JSON.stringify(customerData, null, 2); // Indent for readability

// Write JSON string to a file
fs.writeFile(outputFilename, jsonData, (err) => {
  if (err) {
    console.error("Error writing data to JSON file:", err);
    return;
  }
  console.log(`Customer data successfully exported to ${outputFilename}`);
});
