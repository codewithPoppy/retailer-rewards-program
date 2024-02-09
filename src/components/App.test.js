import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App";
import { DASHBOARD_TITLE } from "../constants";

const RewardsAPI = require("../api/RewardsAPI");

// Mock data
const mockedTransactionData = [
  {
    customerId: "C001",
    customerName: "Customer 1",
    transactions: [
      {
        date: "2/18/2024",
        amount: 100,
      },
      {
        date: "1/2/2024",
        amount: 140,
      },
    ],
  },
  {
    customerId: "C002",
    customerName: "Customer 2",
    transactions: [
      {
        date: "3/31/2024",
        amount: 150,
      },
      {
        date: "3/13/2024",
        amount: 90,
      },
    ],
  },
  {
    customerId: "C003",
    customerName: "Customer 3",
    transactions: [
      {
        date: "3/25/2024",
        amount: 110,
      },
      {
        date: "3/30/2024",
        amount: 180,
      },
    ],
  },
];

jest.mock("../api/RewardsAPI", () => ({
  fetchTransactions: jest.fn(),
}));
jest.mock("../utils/dataUtility", () => ({
  getProcessedData: jest.fn().mockImplementation((data) => data),
}));

describe("App Component", () => {
  it("renders and shows loading state", async () => {
    render(<App />);
    expect(screen.getByText(DASHBOARD_TITLE)).toBeInTheDocument();
  });
  it("fetches and displays data successfully", async () => {
    RewardsAPI.fetchTransactions.mockResolvedValueOnce([
      ...mockedTransactionData,
    ]);
    render(<App />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());
    expect(RewardsAPI.fetchTransactions).toHaveBeenCalled();
    expect(screen.queryByText(/error/i)).toBeNull();
  });
  it("handles and displays error on fetch failure", async () => {
    RewardsAPI.fetchTransactions.mockRejectedValueOnce(
      new Error("Network error")
    );
    render(<App />);
    expect(RewardsAPI.fetchTransactions).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });
});
