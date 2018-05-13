const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCoinInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.amount = !isEmpty(data.amount) ? data.amount : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Coin is required";
  }

  if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
