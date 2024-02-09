import { render, screen } from "@testing-library/react";
import React from "react";
import RewardsDashboardRow from "./RewardsDashboardRow";

describe("RewardsDashboardRow Component", () => {
  it("renders customer name and reward points", () => {
    render(
      <table>
        <tbody>
          <RewardsDashboardRow
            name="John Doe"
            rewardPoints={120}
            monthlyTransaction={{}}
            transactionMonths={[]}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("120")).toBeInTheDocument();
  });
  it("renders monthly transactions correctly", () => {
    const transactionMonths = ["2021-01", "2021-02", "2021-03"];
    const monthlyTransaction = {
      "2021-01": 50,
      "2021-03": 75,
    };
    render(
      <table>
        <tbody>
          <RewardsDashboardRow
            name="Jane Doe"
            rewardPoints={125}
            monthlyTransaction={monthlyTransaction}
            transactionMonths={transactionMonths}
          />
        </tbody>
      </table>
    );
    // Check for transaction values and placeholders
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("—")).toBeInTheDocument(); // Placeholder for 2021-02
    expect(screen.getByText("75")).toBeInTheDocument();
  });
  it("handles empty monthly transactions gracefully", () => {
    const transactionMonths = ["2021-04", "2021-05"];
    render(
      <table>
        <tbody>
          <RewardsDashboardRow
            name="Emily Doe"
            rewardPoints={100}
            monthlyTransaction={{}}
            transactionMonths={transactionMonths}
          />
        </tbody>
      </table>
    );
    // Expect placeholders for each month
    const placeholders = screen.getAllByText("—");
    expect(placeholders.length).toBe(transactionMonths.length);
  });
});
