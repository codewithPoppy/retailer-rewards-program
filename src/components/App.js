import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTransactions } from "../api/RewardsAPI";
import { DASHBOARD_TITLE } from "../constants";
import { getProcessedData } from "../utils/dataUtility";
import RewardsDashboard from "./RewardsDashboard";
import "../styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [transactionMonths, setTransactionMonths] = useState(new Set());
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchTransactions();
      const localTransactionMonths = new Set();
      const processedData = data.map((customerData) =>
        getProcessedData(customerData, localTransactionMonths)
      );
      setCustomerData(processedData);
      setTransactionMonths(localTransactionMonths);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setErrorMessage(error.toString());
      setIsLoading(false);
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    fetchData().then(() => {
      if (!isMounted) return;
    });
    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  const sortedTransactionMonths = useMemo(
    () =>
      Array.from(transactionMonths).sort((a, b) => new Date(a) - new Date(b)),
    [transactionMonths]
  );

  return (
    <div className="App">
      <h1 className="text-3xl p-4">{DASHBOARD_TITLE}</h1>
      <RewardsDashboard
        data={customerData}
        transactionMonths={sortedTransactionMonths}
        isError={isError}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onRefresh={fetchData}
      />
    </div>
  );
}

export default App;
