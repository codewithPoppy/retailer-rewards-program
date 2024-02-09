import React from "react";
import Spinner from "./Spinner";
import { LOADING_TEXT, REFRESH_BUTTON_TEST_ID } from "../constants";
import { REFRESH_TEXT } from "./../constants/index";
import "../styles/RefreshButton.css";

const RefreshButton = ({ loading, onRefresh }) => {
  return (
    <button data-testid={REFRESH_BUTTON_TEST_ID} onClick={onRefresh} className="refreshButton" disabled={loading}>
      {loading ? (
        <div className="flex">
          {LOADING_TEXT} <Spinner />
        </div>
      ) : (
        <div>{REFRESH_TEXT}</div>
      )}
    </button>
  );
};

export default RefreshButton;
