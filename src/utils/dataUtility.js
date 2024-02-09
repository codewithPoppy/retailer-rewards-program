import { calculateRewards } from "./calculateRewards";

export const getProcessedData = (customerData, transactionMonths) => {
  let totalRewards = 0;
  const monthlyTransaction = customerData.transactions.reduce(
    (res, currentTransaction) => {
      const key = new Date(currentTransaction.date).toLocaleDateString(
        "en-US",
        {
          month: "short",
          year: "numeric",
        }
      );

      transactionMonths.add(key);
      const currentReward = calculateRewards(currentTransaction.amount);

      res[key] = (res[key] || 0) + currentReward;
      totalRewards += currentReward;
      return res;
    },
    {}
  );

  return {
    ...customerData,
    monthlyTransaction,
    totalRewards,
  };
};