const mockTransactionData = require("./sampleData.json");

export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactionData);
    }, 1000);
  });
};
