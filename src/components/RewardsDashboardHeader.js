import React from "react";
import { NAME_TEXT, TOTAL_REWARD_POINTS_TEXT } from "../constants";

const RewardsDashboardHeader = ({ transactionMonths }) => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky">
    <tr>
      <th scope="col" className="px-6 py-3">
        {NAME_TEXT}
      </th>
      {transactionMonths.map((month, idx) => (
        <th key={idx} scope="col" className="px-6 py-3">
          {month}
        </th>
      ))}
      <th scope="col" className="px-6 py-3">
        {TOTAL_REWARD_POINTS_TEXT}
      </th>
    </tr>
  </thead>
);

export default RewardsDashboardHeader;
