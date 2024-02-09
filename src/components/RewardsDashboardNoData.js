import React from "react";
import { NODATA_TEXT } from "../constants";
import "../styles/RewardsDashboardNoData.css";

const RewardsDashboardNoData = () => {
  return (
    <div className="noDataContainer">
      <p className="noDataMessage">{NODATA_TEXT}</p>
    </div>
  );
};

export default RewardsDashboardNoData;
