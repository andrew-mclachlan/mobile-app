import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://dunbar-science-club-23080.firebaseio.com/expenses.json",
    expenseData
  );
}
