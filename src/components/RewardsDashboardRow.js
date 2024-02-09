import React from "react";

const RewardsDashboardRow = ({
  name,
  rewardPoints,
  monthlyTransaction,
  transactionMonths,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white px-6">
        <div className="text-base font-semibold">{name}</div>
      </td>
      {transactionMonths.map((month, idx) => (
        <td key={idx} className="px-6 py-4 text-gray-900 dark:text-white">
          {monthlyTransaction[month] || "—"}
        </td>
      ))}
      <td className="px-6 py-4 text-gray-900 dark:text-white">
        {rewardPoints}
      </td>
    </tr>
  );
};

export default RewardsDashboardRow;
