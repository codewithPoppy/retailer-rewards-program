import React from "react";
import ErrorDisplay from "./ErrorDisplay";
import RefreshButton from "./RefreshButton";
import RewardsDashboardHeader from "./RewardsDashboardHeader";
import RewardsDashboardNoData from "./RewardsDashboardNoData";
import RewardsDashboardRow from "./RewardsDashboardRow";

const RewardsDashboard = ({
  data,
  transactionMonths,
  isError,
  isLoading,
  errorMessage,
  onRefresh,
}) => {
  console.log(isError);
  const renderDashboardData = () =>
    data.map((x) => (
      <RewardsDashboardRow
        key={x.customerId}
        id={x.customerId}
        name={x.customerName}
        rewardPoints={x.totalRewards}
        monthlyTransaction={x.monthlyTransaction}
        transactionMonths={transactionMonths}
      />
    ));

  return (
    <div className="dashboard">
      <RefreshButton loading={isLoading} onRefresh={onRefresh} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
        {isError ? (
          <ErrorDisplay message={errorMessage} />
        ) : transactionMonths.length === 0 ? (
          <RewardsDashboardNoData />
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <RewardsDashboardHeader transactionMonths={transactionMonths} />
            <tbody>{renderDashboardData()}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RewardsDashboard;
