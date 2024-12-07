import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";

// app/utils/transactionFilters.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/transactionFilters.ts"
  );
  import.meta.hot.lastModified = "1730129418549.3547";
}
var sortTransactions = (transactions, filter) => {
  if (!Array.isArray(transactions)) {
    console.error("Expected an array of transactions, but got:", transactions);
    return [];
  }
  switch (filter) {
    case "latest":
      return [...transactions].sort((a, b) => b.transactionDate.toDate().getTime() - a.transactionDate.toDate().getTime());
    case "oldest":
      return [...transactions].sort((a, b) => a.transactionDate.toDate().getTime() - b.transactionDate.toDate().getTime());
    case "aToZ":
      return [...transactions].sort((a, b) => a.transactionName.localeCompare(b.transactionName));
    case "zToA":
      return [...transactions].sort((a, b) => b.transactionName.localeCompare(a.transactionName));
    case "lowest":
      return [...transactions].sort((a, b) => a.transactionAmt - b.transactionAmt);
    case "highest":
      return [...transactions].sort((a, b) => b.transactionAmt - a.transactionAmt);
    default:
      return transactions;
  }
};
var filterTransactionsByCategory = (transactions, category) => {
  if (category === "All Transactions")
    return transactions;
  return transactions.filter((transaction) => transaction.transactionCategory === category);
};
var filterTransactionsByRecurringBill = (transactions) => {
  return transactions.filter((transaction) => transaction.recurringBill === true);
};
var filterTransactionsByName = (transactions, name) => {
  return transactions.filter(
    (transaction) => transaction.transactionName.toLowerCase().startsWith(name.toLowerCase())
  );
};

export {
  sortTransactions,
  filterTransactionsByCategory,
  filterTransactionsByRecurringBill,
  filterTransactionsByName
};
//# sourceMappingURL=/build/_shared/chunk-ZTWLSO5X.js.map
