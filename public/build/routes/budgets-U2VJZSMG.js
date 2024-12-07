import {
  editDeleteDropdown_default
} from "/build/_shared/chunk-IRZLVB6B.js";
import {
  budgetsChart_default,
  summaryTitle_default,
  useBudgets_default
} from "/build/_shared/chunk-ADJMCADT.js";
import {
  addNewModal_default,
  categoryMenuItems,
  themeMenuItems,
  useModal_default
} from "/build/_shared/chunk-76FYL7ER.js";
import {
  transactionImg_default,
  useTransactions_default
} from "/build/_shared/chunk-GUQ6LDKD.js";
import {
  DotsThree_esm_default,
  dropdownMenu_default,
  mainContent_default,
  pageHeader_default,
  pageLoading_default
} from "/build/_shared/chunk-TGV7UNIE.js";
import "/build/_shared/chunk-5PNKOZEI.js";
import {
  Timestamp,
  db,
  deleteDoc,
  doc,
  inputField_default,
  updateDoc
} from "/build/_shared/chunk-UNK6ZALF.js";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  ListItem,
  Text,
  UnorderedList,
  theme_default,
  useAuth,
  useToast
} from "/build/_shared/chunk-KMD4SM23.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form
} from "/build/_shared/chunk-6ZCVJ245.js";
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

// app/routes/budgets.tsx
var import_react11 = __toESM(require_react(), 1);

// app/components/budgets/budgetTitle.tsx
var import_react4 = __toESM(require_react(), 1);

// app/components/budgets/budgetModal.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/budgetModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/budgetModal.tsx"
  );
  import.meta.hot.lastModified = "1733603633661.9268";
}
var BudgetModal = ({
  isOpen,
  onClose,
  mode,
  budgetId,
  existingBudget
}) => {
  _s();
  const [budgetCategory, setBudgetCategory] = (0, import_react.useState)("");
  const [maxSpend, setMaxSpend] = (0, import_react.useState)(0);
  const [budgetColor, setBudgetColor] = (0, import_react.useState)("");
  const [totalSpent, setTotalSpent] = (0, import_react.useState)(0);
  const [totalRemaining, setTotalRemaining] = (0, import_react.useState)(0);
  const [errors, setErrors] = (0, import_react.useState)({
    maxSpend: ""
  });
  const {
    budgets: existingBudgets,
    loading,
    addBudget
  } = useBudgets_default();
  const {
    user
  } = useAuth();
  const toast = useToast();
  (0, import_react.useEffect)(() => {
    if (!loading && mode === "edit" && existingBudget) {
      setBudgetCategory(existingBudget.budgetCategory || budgetCategory);
      setMaxSpend(existingBudget.maxSpend || maxSpend);
      setBudgetColor(existingBudget.budgetColor || budgetColor);
    }
  }, [mode, existingBudget, loading]);
  (0, import_react.useEffect)(() => {
    const usedCategories2 = existingBudgets.map((budget) => budget.budgetCategory);
    const usedColors2 = existingBudgets.map((budget) => budget.budgetColor);
    const availableCategories = categoryMenuItems.map((item) => item.value).filter((category) => !usedCategories2.includes(category));
    const availableColors = themeMenuItems.map((item) => item.colorTag).filter((color) => !usedColors2.includes(color));
    if (availableCategories.length > 0) {
      setBudgetCategory(availableCategories[0]);
    }
    if (availableColors.length > 0) {
      setBudgetColor(availableColors[0]);
    }
  }, [existingBudgets]);
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      maxSpend: ""
    };
    if (!maxSpend || maxSpend <= 0) {
      newErrors.maxSpend = "Maximum spend must be greater than 0.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSaveBudget = async () => {
    if (!validateForm())
      return;
    try {
      if (mode === "add") {
        const newBudget = {
          budgetCategory,
          budgetColor,
          maxSpend: Number(maxSpend),
          totalSpent,
          totalRemaining: maxSpend,
          createdAt: Timestamp.now()
        };
        await addBudget(newBudget);
        toast({
          title: "Budget added successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else if (mode === "edit" && budgetId) {
        if (user) {
          const budgetDocRef = doc(db, `users/${user.uid}/budgets`, budgetId);
          await updateDoc(budgetDocRef, {
            budgetCategory,
            budgetColor,
            maxSpend,
            totalRemaining: maxSpend
          });
          toast({
            title: "Budget edited successfully.",
            status: "success",
            duration: 3e3,
            isClosable: true
          });
        } else {
          console.error("User is not authenticated.");
        }
      }
      setBudgetCategory("");
      setMaxSpend(0);
      setBudgetColor("");
      setTotalSpent(0);
      setTotalRemaining(maxSpend);
      onClose();
    } catch (error) {
      console.log("Error adding budget: ", error);
    }
  };
  const handleDeleteBudget = async () => {
    console.log("handleDeleteBudget called, mode:", mode, "budgetId:", budgetId);
    if (mode === "delete" && budgetId) {
      if (user) {
        const budgetDocRef = doc(db, `users/${user.uid}/budgets`, budgetId);
        await deleteDoc(budgetDocRef);
        console.log("Budget deleted successfully");
        onClose();
        toast({
          title: "Budget deleted successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else {
        console.error("User is not authenticated.");
      }
    } else {
      console.error("Delete mode or budgetId is not valid");
    }
  };
  const usedColors = existingBudgets.map((budget) => budget.budgetColor);
  const usedCategories = existingBudgets.map((budget) => budget.budgetCategory);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(addNewModal_default, { isOpen, onClose, headerTitle: mode === "add" ? "Add New Budget" : mode === "edit" ? "Edit Budget" : mode === "delete" ? "Delete Budget" : "", headerTag: mode === "add" ? "Choose a category to set a spending budget. These categories can help you monitor spending." : mode === "edit" ? "As your budgets change, feel free to update your spending limits." : mode === "delete" ? "Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever." : "", children: [
    (mode === "add" || mode === "edit") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[200], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dropdownMenu_default, { label: "Entertainment", items: categoryMenuItems, fieldTitle: "Budget Category", onChange: (item) => setBudgetCategory(item.value || ""), usedCategories, value: budgetCategory }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 185,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 184,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { isInvalid: !!errors.maxSpend, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(inputField_default, { placeholder: "e.g. 2000", type: "number", isRequired: true, label: "Maximum Spend", prefix: "$", onChange: (e) => setMaxSpend(parseFloat(e.target.value)), value: maxSpend.toString(), helperText: errors.maxSpend }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 188,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 187,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dropdownMenu_default, { label: "Green", items: themeMenuItems, fieldTitle: "Theme", colorTag: theme_default.colors.secondary.green, usedColors, usedCategories, onChange: (item) => setBudgetColor(item.colorTag || ""), value: budgetColor }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 191,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetModal.tsx",
        lineNumber: 190,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/budgetModal.tsx",
      lineNumber: 183,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/budgets/budgetModal.tsx",
      lineNumber: 182,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", width: "100%", height: "100%", padding: theme_default.spacing[200], justifyContent: "center", alignItems: "center", gap: theme_default.spacing[200], flex: "1 0 0", borderRadius: theme_default.spacing[100], textStyle: "preset4bold", fontSize: " 0.875rem", onClick: () => {
      console.log("Button clicked, mode:", mode);
      if (mode === "add" || mode === "edit") {
        handleSaveBudget();
      } else if (mode === "delete") {
        handleDeleteBudget();
      }
    }, bg: mode === "add" || mode === "edit" ? "grey.900" : "secondary.red", children: mode === "add" ? "Add Budget" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : "" }, void 0, false, {
      fileName: "app/components/budgets/budgetModal.tsx",
      lineNumber: 195,
      columnNumber: 13
    }, this),
    mode === "delete" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, justifyContent: "center", alignItems: "center", gap: theme_default.spacing[150], variant: "tertiary", textStyle: "preset4", fontSize: "0.875rem", color: "grey.500", _hover: {
      color: "grey.900"
    }, children: "No, Go Back" }, void 0, false, {
      fileName: "app/components/budgets/budgetModal.tsx",
      lineNumber: 206,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/budgets/budgetModal.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
};
_s(BudgetModal, "D76pD9sJ0027TZHWIq3vqTG5NwE=", false, function() {
  return [useBudgets_default, useAuth, useToast];
});
_c = BudgetModal;
var budgetModal_default = BudgetModal;
var _c;
$RefreshReg$(_c, "BudgetModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/budgets/budgetTitle.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/budgetTitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/budgetTitle.tsx"
  );
  import.meta.hot.lastModified = "1729933259786.0947";
}
var BudgetTitle = ({
  fill,
  budgetCategory,
  onEdit,
  onDelete
}) => {
  _s2();
  const {
    isModalOpen,
    budgetModalMode,
    selectedItem,
    openEditBudgetModal,
    openDeleteBudgetModal,
    closeModal
  } = useModal_default();
  const [dropdownIsOpen, setDropdownIsOpen] = (0, import_react4.useState)(false);
  const dropdownRef = (0, import_react4.useRef)(null);
  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownIsOpen(!dropdownIsOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownIsOpen(false);
    }
  };
  (0, import_react4.useEffect)(() => {
    if (dropdownIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownIsOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "space-between", align: "center", alignSelf: "stretch", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "19.75rem", align: "center", gap: theme_default.spacing[200], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "8", cy: "8", r: "8", fill }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset2", color: "grey.900", children: budgetCategory }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/budgetTitle.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { position: "relative", ref: dropdownRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DotsThree_esm_default, { onMouseDown: toggleDropdown, cursor: "pointer" }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      dropdownIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "140px", position: "absolute", top: "100%", left: "auto", transform: "translateX(-100%)", zIndex: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(editDeleteDropdown_default, { label: "Budget", onEdit, onDelete }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 76,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetTitle.tsx",
        lineNumber: 75,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/budgetTitle.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(budgetModal_default, { mode: budgetModalMode, isOpen: isModalOpen, onClose: closeModal }, void 0, false, {
      fileName: "app/components/budgets/budgetTitle.tsx",
      lineNumber: 79,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/budgets/budgetTitle.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
};
_s2(BudgetTitle, "wq6NMp+OW+oHBod2HLFxO4MczIc=", false, function() {
  return [useModal_default];
});
_c2 = BudgetTitle;
var budgetTitle_default = BudgetTitle;
var _c2;
$RefreshReg$(_c2, "BudgetTitle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/budgets/budgetPercentageBar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/budgetPercentageBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/budgetPercentageBar.tsx"
  );
  import.meta.hot.lastModified = "1729003749030.3735";
}
var BudgetPercentageBar = ({
  budget
}) => {
  const percentageSpent = budget.totalSpent / budget.maxSpend * 100;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { width: "100%", position: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { height: theme_default.spacing[400], padding: theme_default.spacing[50], align: "flex-start", alignSelf: "stretch", borderRadius: theme_default.spacing[50], bg: "beige.100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { position: "absolute", height: theme_default.spacing[300], maxW: "98.5%", width: `${percentageSpent}%`, bg: budget.budgetColor, borderRadius: theme_default.spacing[50] }, void 0, false, {
    fileName: "app/components/budgets/budgetPercentageBar.tsx",
    lineNumber: 30,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/budgets/budgetPercentageBar.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/budgets/budgetPercentageBar.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c3 = BudgetPercentageBar;
var budgetPercentageBar_default = BudgetPercentageBar;
var _c3;
$RefreshReg$(_c3, "BudgetPercentageBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/budgets/latestSpendingTransaction.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/latestSpendingTransaction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/latestSpendingTransaction.tsx"
  );
  import.meta.hot.lastModified = "1730110113802.8994";
}
var LatestSpendingTransaction = ({
  transaction
}) => {
  const formatTransactionAmount = (amount) => {
    const sign = amount >= 0 ? "+" : "-";
    return `${sign}$${Math.abs(amount).toFixed(2)}`;
  };
  const formatDate = (date) => {
    const dateObj = date instanceof Timestamp ? date.toDate() : new Date(date);
    if (isNaN(dateObj.getTime())) {
      return "Invalid date";
    }
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric"
    };
    return dateObj.toLocaleDateString("en-UK", options);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], alignSelf: "stretch", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1 0 0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(transactionImg_default, { transaction }, void 0, false, {
        fileName: "app/components/budgets/latestSpendingTransaction.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset5bold", color: "grey.900", children: transaction.transactionName }, void 0, false, {
        fileName: "app/components/budgets/latestSpendingTransaction.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/latestSpendingTransaction.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-end", gap: theme_default.spacing[50], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset5bold", color: "grey.900", children: formatTransactionAmount(transaction.transactionAmt) }, void 0, false, {
        fileName: "app/components/budgets/latestSpendingTransaction.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: formatDate(transaction.transactionDate) }, void 0, false, {
        fileName: "app/components/budgets/latestSpendingTransaction.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/latestSpendingTransaction.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/budgets/latestSpendingTransaction.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_c4 = LatestSpendingTransaction;
var latestSpendingTransaction_default = LatestSpendingTransaction;
var _c4;
$RefreshReg$(_c4, "LatestSpendingTransaction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/budgets/latestSpending.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/latestSpending.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/latestSpending.tsx"
  );
  import.meta.hot.lastModified = "1730109832026.337";
}
var LatestSpending = ({
  budget
}) => {
  _s3();
  const {
    transactions,
    loading
  } = useTransactions_default();
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(pageLoading_default, {}, void 0, false, {
      fileName: "app/components/budgets/latestSpending.tsx",
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { padding: theme_default.spacing[250], direction: "column", justify: "center", align: "flex-start", gap: theme_default.spacing[250], alignSelf: "stretch", borderRadius: theme_default.spacing[150], bg: "beige.100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(summaryTitle_default, { title: "Latest Spending", link: "/transactions", linkText: "See All", titleStyle: "preset3" }, void 0, false, {
      fileName: "app/components/budgets/latestSpending.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[150], alignSelf: "stretch", children: transactions && transactions.filter((t) => t.transactionCategory === budget.budgetCategory && t.transactionAmt < 0).sort((a, b) => b.transactionDate.toDate().getTime() - a.transactionDate.toDate().getTime()).slice(0, 3).map((filteredTransaction, index, filteredArray) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.default.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(latestSpendingTransaction_default, { transaction: filteredTransaction }, void 0, false, {
        fileName: "app/components/budgets/latestSpending.tsx",
        lineNumber: 45,
        columnNumber: 33
      }, this),
      index < filteredArray.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Divider, { borderColor: "gray.300" }, void 0, false, {
        fileName: "app/components/budgets/latestSpending.tsx",
        lineNumber: 46,
        columnNumber: 70
      }, this)
    ] }, filteredTransaction.id, true, {
      fileName: "app/components/budgets/latestSpending.tsx",
      lineNumber: 44,
      columnNumber: 287
    }, this)) }, void 0, false, {
      fileName: "app/components/budgets/latestSpending.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/budgets/latestSpending.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s3(LatestSpending, "aB29K0VbpdqN1CVpX+HziTBOfHI=", false, function() {
  return [useTransactions_default];
});
_c5 = LatestSpending;
var latestSpending_default = LatestSpending;
var _c5;
$RefreshReg$(_c5, "LatestSpending");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/budgets/budgetCard.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/budgets/budgetCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/budgets/budgetCard.tsx"
  );
  import.meta.hot.lastModified = "1730109867373.7183";
}
var BudgetCard = ({
  budget,
  onEdit,
  onDelete
}) => {
  _s4();
  const {
    transactions,
    loading
  } = useTransactions_default();
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(pageLoading_default, {}, void 0, false, {
      fileName: "app/components/budgets/budgetCard.tsx",
      lineNumber: 41,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { padding: theme_default.spacing[400], direction: "column", align: "flex-start", gap: theme_default.spacing[250], alignSelf: "stretch", borderRadius: theme_default.spacing[150], bg: "white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(budgetTitle_default, { fill: budget.budgetColor, budgetCategory: budget.budgetCategory, onEdit: () => onEdit(budget.id), onDelete: () => onDelete(budget.id) }, void 0, false, {
      fileName: "app/components/budgets/budgetCard.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[200], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: [
        "Maximum of $",
        budget.maxSpend.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/budgets/budgetCard.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/budgets/budgetCard.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(budgetPercentageBar_default, { budget }, void 0, false, {
        fileName: "app/components/budgets/budgetCard.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { justify: "space-between", align: "flex-start", gap: theme_default.spacing[200], alignSelf: "stretch", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { width: theme_default.spacing[50], alignSelf: "stretch", borderRadius: theme_default.spacing[100], bg: budget.budgetColor }, void 0, false, {
            fileName: "app/components/budgets/budgetCard.tsx",
            lineNumber: 55,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { direction: "column", gap: theme_default.spacing[50], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: "Spent" }, void 0, false, {
              fileName: "app/components/budgets/budgetCard.tsx",
              lineNumber: 57,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", children: [
              "$",
              budget.totalSpent.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/components/budgets/budgetCard.tsx",
              lineNumber: 60,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/budgets/budgetCard.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/budgets/budgetCard.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { width: theme_default.spacing[50], alignSelf: "stretch", borderRadius: theme_default.spacing[100], bg: "beige.100" }, void 0, false, {
            fileName: "app/components/budgets/budgetCard.tsx",
            lineNumber: 67,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { direction: "column", gap: theme_default.spacing[50], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: "Remaining" }, void 0, false, {
              fileName: "app/components/budgets/budgetCard.tsx",
              lineNumber: 69,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", children: [
              "$",
              budget.totalRemaining.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/components/budgets/budgetCard.tsx",
              lineNumber: 72,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/budgets/budgetCard.tsx",
            lineNumber: 68,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/budgets/budgetCard.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/budgets/budgetCard.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      transactions && transactions.filter((t) => t.transactionCategory === budget.budgetCategory && t.transactionAmt < 0).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(latestSpending_default, { budget }, void 0, false, {
        fileName: "app/components/budgets/budgetCard.tsx",
        lineNumber: 78,
        columnNumber: 146
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/budgets/budgetCard.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/budgets/budgetCard.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s4(BudgetCard, "aB29K0VbpdqN1CVpX+HziTBOfHI=", false, function() {
  return [useTransactions_default];
});
_c6 = BudgetCard;
var budgetCard_default = BudgetCard;
var _c6;
$RefreshReg$(_c6, "BudgetCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/budgets.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/budgets.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/budgets.tsx"
  );
  import.meta.hot.lastModified = "1731514058697.563";
}
function BudgetsRoute() {
  _s5();
  const {
    budgets,
    loading: budgetsLoading
  } = useBudgets_default();
  const {
    transactions
  } = useTransactions_default();
  const {
    isModalOpen,
    budgetModalMode,
    selectedItem,
    openAddBudgetModal,
    openEditBudgetModal,
    openDeleteBudgetModal,
    closeModal
  } = useModal_default();
  const selectedBudget = budgets?.find((budget) => budget.id === selectedItem);
  const handleEdit = (id) => {
    openEditBudgetModal(id);
  };
  const handleDelete = (id) => {
    openDeleteBudgetModal(id);
  };
  const budgetsWithTotals = (0, import_react11.useMemo)(() => {
    if (!budgets || !transactions)
      return [];
    return budgets.map((budget) => {
      const budgetTransactions = transactions.filter((transaction) => transaction.transactionCategory === budget.budgetCategory && transaction.transactionAmt < 0);
      const totalSpent = budgetTransactions.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);
      const totalRemaining = budget.maxSpend - totalSpent;
      return {
        ...budget,
        totalSpent,
        totalRemaining,
        budgetColor: budget.budgetColor
      };
    });
  }, [budgets, transactions]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(mainContent_default, { children: budgetsLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { height: "100vh", width: "100%", align: "center", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(pageLoading_default, {}, void 0, false, {
    fileName: "app/routes/budgets.tsx",
    lineNumber: 75,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/budgets.tsx",
    lineNumber: 74,
    columnNumber: 31
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(pageHeader_default, { openModal: openAddBudgetModal, maxCount: budgets.length, maxCountLabel: "budgets", children: "Budgets" }, void 0, false, {
      fileName: "app/routes/budgets.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(budgetModal_default, { mode: budgetModalMode, isOpen: isModalOpen, onClose: closeModal, budgetId: selectedBudget?.id, existingBudget: selectedBudget }, void 0, false, {
      fileName: "app/routes/budgets.tsx",
      lineNumber: 78,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { width: "100%", direction: {
      lg: "row",
      sm: "column"
    }, maxW: "90rem", align: "flex-start", gap: theme_default.spacing[300], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { width: {
        lg: "26.75rem",
        sm: "100%"
      }, height: "100%", padding: theme_default.spacing[400], direction: {
        lg: "column",
        md: "row",
        sm: "column"
      }, align: {
        lg: "flex-start",
        sm: "center"
      }, gap: theme_default.spacing[400], alignSelf: "stretch", borderRadius: theme_default.spacing[150], bg: "white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { width: "100%", justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(budgetsChart_default, { budgets: budgetsWithTotals }, void 0, false, {
          fileName: "app/routes/budgets.tsx",
          lineNumber: 96,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/budgets.tsx",
          lineNumber: 95,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { height: "100%", direction: "column", align: "flex-start", gap: theme_default.spacing[300], alignSelf: "stretch", width: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset2", color: "grey.900", children: "Spending Summary" }, void 0, false, {
            fileName: "app/routes/budgets.tsx",
            lineNumber: 100,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UnorderedList, { m: 0, listStyleType: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: theme_default.spacing[200], alignSelf: "stretch", children: budgetsWithTotals && budgetsWithTotals.length > 0 ? budgetsWithTotals.map((budget, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { width: "100%", direction: "column", gap: theme_default.spacing[200], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ListItem, { display: "flex", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1 0 0", alignSelf: "stretch", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { width: theme_default.spacing[50], alignSelf: "stretch", borderRadius: theme_default.spacing[100], bg: budget.budgetColor }, void 0, false, {
                  fileName: "app/routes/budgets.tsx",
                  lineNumber: 107,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: budget.budgetCategory }, void 0, false, {
                  fileName: "app/routes/budgets.tsx",
                  lineNumber: 108,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/budgets.tsx",
                lineNumber: 106,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { height: "1.1875rem", justify: "center", align: "center", gap: theme_default.spacing[100], children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset3", color: "grey.900", children: [
                  "$",
                  budget.totalSpent.toFixed(2)
                ] }, void 0, true, {
                  fileName: "app/routes/budgets.tsx",
                  lineNumber: 113,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: [
                  "of $",
                  budget.maxSpend.toFixed(2)
                ] }, void 0, true, {
                  fileName: "app/routes/budgets.tsx",
                  lineNumber: 116,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/budgets.tsx",
                lineNumber: 112,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/budgets.tsx",
              lineNumber: 105,
              columnNumber: 53
            }, this),
            index < budgetsWithTotals.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Divider, { orientation: "horizontal", height: "0.0625rem" }, void 0, false, {
              fileName: "app/routes/budgets.tsx",
              lineNumber: 121,
              columnNumber: 94
            }, this)
          ] }, budget.id, true, {
            fileName: "app/routes/budgets.tsx",
            lineNumber: 104,
            columnNumber: 131
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset4", children: "Add a budget to get started." }, void 0, false, {
            fileName: "app/routes/budgets.tsx",
            lineNumber: 122,
            columnNumber: 60
          }, this) }, void 0, false, {
            fileName: "app/routes/budgets.tsx",
            lineNumber: 103,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/budgets.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budgets.tsx",
        lineNumber: 84,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[300], flex: "1 0 0", width: "100%", children: budgetsWithTotals && budgetsWithTotals.length > 0 ? budgetsWithTotals.map((budget) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(budgetCard_default, { budget, onEdit: handleEdit, onDelete: handleDelete }, budget.id, false, {
        fileName: "app/routes/budgets.tsx",
        lineNumber: 127,
        columnNumber: 114
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { width: "100%", height: "50vh", justify: "center", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { textStyle: "preset4bold", children: "Add a budget to get started." }, void 0, false, {
        fileName: "app/routes/budgets.tsx",
        lineNumber: 128,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/budgets.tsx",
        lineNumber: 127,
        columnNumber: 208
      }, this) }, void 0, false, {
        fileName: "app/routes/budgets.tsx",
        lineNumber: 126,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/budgets.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/budgets.tsx",
    lineNumber: 76,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/routes/budgets.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s5(BudgetsRoute, "H+Wn/ukn01qjtXJGrldjmPOW1+k=", false, function() {
  return [useBudgets_default, useTransactions_default, useModal_default];
});
_c7 = BudgetsRoute;
var _c7;
$RefreshReg$(_c7, "BudgetsRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BudgetsRoute as default
};
//# sourceMappingURL=/build/routes/budgets-U2VJZSMG.js.map
