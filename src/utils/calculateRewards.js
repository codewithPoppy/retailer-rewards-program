/**
 * Calculates reward points for a single transaction.
 * @param {number} amount - The transaction amount.
 * @returns {number} The calculated reward points.
 */
export const calculateRewards = (amount) => {
  const { UPPER, LOWER } = require("../constants").POINTS_THRESHOLD;
  const { ABOVE_UPPER, BETWEEN_UPPER_AND_LOWER } =
    require("../constants").POINTS_RATE;

  let points = 0;

  if (amount > UPPER) {
    points += (amount - UPPER) * ABOVE_UPPER;
    amount = UPPER;
  }

  if (amount > LOWER) {
    points += (amount - LOWER) * BETWEEN_UPPER_AND_LOWER;
  }

  return points;
};
