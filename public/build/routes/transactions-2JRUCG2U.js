import {
  transactionModal_default,
  transactionsList_default
} from "/build/_shared/chunk-5CM6EAG7.js";
import {
  useModal_default
} from "/build/_shared/chunk-UFRS35DX.js";
import {
  filterTransactionsByCategory,
  sortTransactions
} from "/build/_shared/chunk-ZTWLSO5X.js";
import {
  useTransactions_default
} from "/build/_shared/chunk-SE7ILXZI.js";
import {
  MagnifyingGlass_esm_default,
  dropdownMenu_default,
  mainContent_default,
  pageHeader_default,
  pageLoading_default
} from "/build/_shared/chunk-STRJBWB3.js";
import {
  I,
  l
} from "/build/_shared/chunk-5PNKOZEI.js";
import {
  inputField_default
} from "/build/_shared/chunk-AXQ3FDH7.js";
import {
  Button,
  Flex,
  Text,
  theme_default
} from "/build/_shared/chunk-KMD4SM23.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-6ZCVJ245.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/transactions/transactionContent.tsx
var import_react4 = __toESM(require_react(), 1);

// app/components/transactions/paginationButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/paginationButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/paginationButton.tsx"
  );
  import.meta.hot.lastModified = "1731514058690.9768";
}
var PaginationButton = ({
  label,
  isPageNumber,
  isActive,
  isDisabled,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { display: "flex", height: theme_default.spacing[500], padding: theme_default.spacing[200], justifyContent: "center", alignItems: "center", gap: theme_default.spacing[200], borderRadius: theme_default.spacing[100], border: `1px solid ${theme_default.colors.beige[500]}`, bg: isActive ? "grey.900" : "white", onClick, _hover: {
    bg: isActive ? "grey.900" : "beige.100"
  }, isDisabled, children: isPageNumber ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: isActive ? "white" : "grey.900", textStyle: "preset4", fontWeight: 400, children: label }, void 0, false, {
    fileName: "app/components/transactions/paginationButton.tsx",
    lineNumber: 34,
    columnNumber: 29
  }, this) : label === "Prev" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { weight: "fill", color: theme_default.colors.grey[500] }, void 0, false, {
      fileName: "app/components/transactions/paginationButton.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset4", color: "grey.900", fontWeight: 400, children: "Prev" }, void 0, false, {
      fileName: "app/components/transactions/paginationButton.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/paginationButton.tsx",
    lineNumber: 36,
    columnNumber: 46
  }, this) : label === "Next" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset4", color: "grey.900", fontWeight: 400, children: "Next" }, void 0, false, {
      fileName: "app/components/transactions/paginationButton.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(l, { weight: "fill", color: theme_default.colors.grey[500] }, void 0, false, {
      fileName: "app/components/transactions/paginationButton.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/paginationButton.tsx",
    lineNumber: 39,
    columnNumber: 46
  }, this) : null }, void 0, false, {
    fileName: "app/components/transactions/paginationButton.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = PaginationButton;
var paginationButton_default = PaginationButton;
var _c;
$RefreshReg$(_c, "PaginationButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/transactions/pagination.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/pagination.tsx"
  );
  import.meta.hot.lastModified = "1730126592037.2769";
}
var Pagination = ({
  totalTransactions,
  currentPage,
  setCurrentPage,
  transactionsPerPage
}) => {
  const totalPages = Math.ceil(totalTransactions / transactionsPerPage);
  const onPageChange = (page) => {
    if (page < 1)
      return;
    if (page > totalPages)
      return;
    setCurrentPage(page);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { paddingTop: theme_default.spacing[300], justify: "space-between", align: "center", alignSelf: "stretch", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(paginationButton_default, { label: "Prev", onClick: () => onPageChange(currentPage - 1), isDisabled: currentPage <= 1 }, void 0, false, {
      fileName: "app/components/transactions/pagination.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[100], children: [...Array(totalPages)].map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(paginationButton_default, { label: index + 1, isPageNumber: true, isActive: currentPage === index + 1, onClick: () => onPageChange(index + 1) }, index + 1, false, {
      fileName: "app/components/transactions/pagination.tsx",
      lineNumber: 43,
      columnNumber: 59
    }, this)) }, void 0, false, {
      fileName: "app/components/transactions/pagination.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(paginationButton_default, { label: "Next", onClick: () => onPageChange(currentPage + 1), isDisabled: currentPage >= totalPages }, void 0, false, {
      fileName: "app/components/transactions/pagination.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/pagination.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_c2 = Pagination;
var pagination_default = Pagination;
var _c2;
$RefreshReg$(_c2, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/transactions/transactionContent.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/transactionContent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/transactionContent.tsx"
  );
  import.meta.hot.lastModified = "1733508671086.5112";
}
var sortMenuItems = [{
  itemLabel: "Latest",
  value: "latest"
}, {
  itemLabel: "Oldest",
  value: "oldest"
}, {
  itemLabel: "A to Z",
  value: "aToZ"
}, {
  itemLabel: "Z to A",
  value: "zToA"
}, {
  itemLabel: "Lowest",
  value: "lowest"
}, {
  itemLabel: "Highest",
  value: "highest"
}];
var transactionMenuItems = [{
  itemLabel: "All Transactions",
  value: "All Transactions"
}, {
  itemLabel: "Entertainment",
  value: "Entertainment"
}, {
  itemLabel: "Bills",
  value: "Bills"
}, {
  itemLabel: "Income",
  value: "Income"
}, {
  itemLabel: "Groceries",
  value: "Groceries"
}, {
  itemLabel: "Dining Out",
  value: "Dining Out"
}, {
  itemLabel: "Transportation",
  value: "Transportation"
}, {
  itemLabel: "Personal Care",
  value: "Personal Care"
}];
var TransactionContent = ({
  transactions
}) => {
  _s();
  const [filteredTransactions, setFilteredTransactions] = (0, import_react4.useState)(transactions);
  const [filter, setFilter] = (0, import_react4.useState)("latest");
  const [selectedCategory, setSelectedCategory] = (0, import_react4.useState)("All Transactions");
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const [showSortDropdown, setShowSortDropdown] = (0, import_react4.useState)(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = (0, import_react4.useState)(false);
  const TRANSACTIONS_PER_PAGE = 10;
  (0, import_react4.useEffect)(() => {
    if (!transactions || transactions.length === 0) {
      setFilteredTransactions([]);
      return;
    }
    const sortedTransactions = sortTransactions(transactions, filter);
    let result = filterTransactionsByCategory(sortedTransactions, selectedCategory);
    if (selectedCategory === "All Transactions") {
      result = sortedTransactions;
    }
    if (searchTerm) {
      result = result.filter((transaction) => transaction.transactionName.toLowerCase().startsWith(searchTerm.toLowerCase()));
    }
    setFilteredTransactions(result);
    const newTotalPages = Math.ceil(filteredTransactions.length / TRANSACTIONS_PER_PAGE);
    if (currentPage < 1) {
      setCurrentPage(1);
    } else if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages > 0 ? newTotalPages : 1);
    }
    console.log("Total pages: ", newTotalPages);
  }, [transactions, filter, selectedCategory, searchTerm, filteredTransactions.length, currentPage]);
  const handleFilterChange = (item) => {
    setFilter(item.value ?? "Latest");
  };
  const handleCategoryChange = (item) => {
    setSelectedCategory(item.value ?? "All Transactions");
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const startIndex = (currentPage - 1) * TRANSACTIONS_PER_PAGE;
  const displayedTransactions = filteredTransactions.slice(startIndex, startIndex + TRANSACTIONS_PER_PAGE);
  const handleSortIconClick = () => {
    setShowSortDropdown((prev) => !prev);
    setShowCategoryDropdown(false);
  };
  const handleCategoryIconClick = () => {
    setShowCategoryDropdown((prev) => !prev);
    setShowSortDropdown(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { maxW: "90rem", padding: theme_default.spacing[400], direction: "column", align: "flex-start", gap: theme_default.spacing[300], alignSelf: "stretch", borderRadius: theme_default.spacing[150], bg: "white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { justify: {
      lg: "space-between",
      md: "center",
      sm: "normal"
    }, align: "center", alignSelf: "stretch", gap: theme_default.spacing[300], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "20rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(inputField_default, { placeholder: "Search transaction", id: "search", type: "text", isRequired: false, icon: MagnifyingGlass_esm_default, onChange: handleSearchChange, iconWeight: "regular" }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 135,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 134,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { justify: "flex-end", align: "center", gap: theme_default.spacing[300], display: {
        lg: "flex",
        md: "flex",
        sm: "flex"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[100], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", width: "100%", children: "Sort by" }, void 0, false, {
            fileName: "app/components/transactions/transactionContent.tsx",
            lineNumber: 143,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(dropdownMenu_default, { label: "Latest", items: sortMenuItems, onChange: handleFilterChange }, void 0, false, {
            fileName: "app/components/transactions/transactionContent.tsx",
            lineNumber: 144,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/transactions/transactionContent.tsx",
          lineNumber: 142,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[100], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", width: "100%", children: "Category" }, void 0, false, {
            fileName: "app/components/transactions/transactionContent.tsx",
            lineNumber: 147,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(dropdownMenu_default, { label: "All Transactions", items: transactionMenuItems, onChange: handleCategoryChange }, void 0, false, {
            fileName: "app/components/transactions/transactionContent.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/transactions/transactionContent.tsx",
          lineNumber: 146,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/transactions/transactionContent.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { padding: theme_default.spacing[150], align: "center", gap: theme_default.spacing[400], alignSelf: "stretch", borderBottom: "1px solid", borderBottomColor: "grey.100", display: {
      lg: "flex",
      md: "flex",
      sm: "none"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { flex: "1", textStyle: "preset5", color: "grey.500", children: "Receipent/Sender" }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 185,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { width: "7.5rem", textStyle: "preset5", color: "grey.500", children: "Category" }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 186,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { width: "7.5rem", textStyle: "preset5", color: "grey.500", children: "Transaction Date" }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 187,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { width: "12.5rem", textStyle: "preset5", color: "grey.500", textAlign: "right", children: "Amount" }, void 0, false, {
        fileName: "app/components/transactions/transactionContent.tsx",
        lineNumber: 188,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/transactions/transactionContent.tsx",
      lineNumber: 180,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(transactionsList_default, { transactions: displayedTransactions }, void 0, false, {
      fileName: "app/components/transactions/transactionContent.tsx",
      lineNumber: 191,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(pagination_default, { totalTransactions: filteredTransactions.length, currentPage, setCurrentPage, transactionsPerPage: TRANSACTIONS_PER_PAGE }, void 0, false, {
      fileName: "app/components/transactions/transactionContent.tsx",
      lineNumber: 193,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/transactionContent.tsx",
    lineNumber: 128,
    columnNumber: 10
  }, this);
};
_s(TransactionContent, "DN3MBj0EnIgET2LlSiUulDeX34E=");
_c3 = TransactionContent;
var transactionContent_default = TransactionContent;
var _c3;
$RefreshReg$(_c3, "TransactionContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/transactions.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/transactions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/transactions.tsx"
  );
  import.meta.hot.lastModified = "1731514058699.133";
}
function TransactionsRoute() {
  _s2();
  const {
    transactions,
    loading
  } = useTransactions_default();
  const {
    isModalOpen,
    transactionModalMode,
    selectedItem,
    openAddTransactionModal,
    openEditTransactionModal,
    openDeleteTransactionModal,
    closeModal
  } = useModal_default();
  const selectedTransaction = transactions?.find((transaction) => transaction.id === selectedItem);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(mainContent_default, { children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(pageLoading_default, {}, void 0, false, {
    fileName: "app/routes/transactions.tsx",
    lineNumber: 46,
    columnNumber: 24
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(pageHeader_default, { openModal: openAddTransactionModal, children: "Transactions" }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 47,
      columnNumber: 21
    }, this),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(transactionModal_default, { mode: transactionModalMode, isOpen: isModalOpen, onClose: closeModal, transactionId: selectedTransaction?.id, existingTransaction: selectedTransaction }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 50,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(transactionContent_default, { transactions }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/transactions.tsx",
    lineNumber: 46,
    columnNumber: 42
  }, this) }, void 0, false, {
    fileName: "app/routes/transactions.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s2(TransactionsRoute, "XU02X69CVkrMcFoU8397xh7nFFQ=", false, function() {
  return [useTransactions_default, useModal_default];
});
_c4 = TransactionsRoute;
var _c4;
$RefreshReg$(_c4, "TransactionsRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TransactionsRoute as default
};
//# sourceMappingURL=/build/routes/transactions-2JRUCG2U.js.map
