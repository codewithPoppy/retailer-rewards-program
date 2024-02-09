import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import RewardsDashboard from "./RewardsDashboard";
import { REFRESH_BUTTON_TEST_ID } from "../constants";

jest.mock("./ErrorDisplay", () => () => <div>ErrorDisplay Mock</div>);
jest.mock("./RewardsDashboardRow", () => () => (
  <div>RewardsDashboardRow Mock</div>
));
jest.mock("./RewardsDashboardNoData", () => () => (
  <div>RewardsDashboardNoData Mock</div>
));

describe("RewardsDashboard Component", () => {
  it("renders RewardsDashboardNoData when there are no transactions and no error", () => {
    render(
      <RewardsDashboard data={[]} transactionMonths={[]} isError={false} />
    );
    expect(screen.getByText("RewardsDashboardNoData Mock")).toBeInTheDocument();
  });
  it("renders ErrorDisplay when there is an error", () => {
    render(<RewardsDashboard isError={true} errorMessage="Error message" />);
    expect(screen.getByText("ErrorDisplay Mock")).toBeInTheDocument();
  });
  it("renders RewardsDashboardRow for each data item", () => {
    const data = [
      {
        customerId: "1",
        customerName: "John Doe",
        totalRewards: 100,
        monthlyTransaction: {},
      },
      {
        customerId: "2",
        customerName: "Jane Doe",
        totalRewards: 200,
        monthlyTransaction: {},
      },
    ];
    render(
      <RewardsDashboard
        data={data}
        transactionMonths={["2021-01"]}
        isError={false}
      />
    );
    expect(screen.getAllByText("RewardsDashboardRow Mock").length).toBe(
      data.length
    );
  });
  it("renders RefreshButton and can call onRefresh", () => {
    const onRefreshMock = jest.fn();
    render(
      <RewardsDashboard
        onRefresh={onRefreshMock}
        isLoading={false}
        transactionMonths={[]}
      />
    );
    fireEvent.click(screen.getByTestId(REFRESH_BUTTON_TEST_ID));
    expect(onRefreshMock).toHaveBeenCalled();
  });
});
