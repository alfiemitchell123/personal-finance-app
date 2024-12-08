import {
  addNewModal_default,
  categoryMenuItems,
  useModal_default
} from "/build/_shared/chunk-UFRS35DX.js";
import {
  transactionImg_default,
  useTransactions_default
} from "/build/_shared/chunk-SE7ILXZI.js";
import {
  PencilSimple_esm_default,
  Trash_esm_default,
  dropdownMenu_default
} from "/build/_shared/chunk-STRJBWB3.js";
import {
  Timestamp,
  db,
  deleteDoc,
  doc,
  inputField_default,
  updateDoc
} from "/build/_shared/chunk-AXQ3FDH7.js";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  IconButton,
  Text,
  theme_default,
  useAuth,
  useToast
} from "/build/_shared/chunk-KMD4SM23.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form,
  useLocation
} from "/build/_shared/chunk-6ZCVJ245.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/transactions/transactionModal.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/transactionModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/transactionModal.tsx"
  );
  import.meta.hot.lastModified = "1733615785658.5164";
}
var TransactionModal = ({
  isOpen,
  onClose,
  mode,
  transactionId,
  existingTransaction
}) => {
  _s();
  const [transactionName, setTransactionName] = (0, import_react.useState)("");
  const [transactionCategory, setTransactionCategory] = (0, import_react.useState)("");
  const [transactionAmt, setTransactionAmt] = (0, import_react.useState)(0);
  const [recurringBill, setRecurringBill] = (0, import_react.useState)(false);
  const [loadingTransactions, setLoadingTransactions] = (0, import_react.useState)(true);
  const [errors, setErrors] = (0, import_react.useState)({
    transactionName: "",
    transactionAmt: ""
  });
  const {
    transactions: existingTransactions,
    addTransaction
  } = useTransactions_default();
  const {
    user
  } = useAuth();
  const toast = useToast();
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      transactionName: "",
      transactionAmt: ""
    };
    if (!transactionName || transactionName === "" || transactionName === "e.g. Property Management Inc") {
      newErrors.transactionName = "Transaction must have a name.";
      valid = false;
    }
    if (!transactionAmt || transactionAmt <= 0) {
      newErrors.transactionAmt = "Transaction amount must be greater than 0.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  (0, import_react.useEffect)(() => {
    if (mode === "edit" && existingTransaction) {
      setLoadingTransactions(true);
      setTransactionName(existingTransaction.transactionName || transactionName);
      setTransactionCategory(existingTransaction.transactionCategory || transactionCategory);
      setTransactionAmt(existingTransaction.transactionAmt || transactionAmt);
      setRecurringBill(existingTransaction.recurringBill || recurringBill);
      setLoadingTransactions(false);
    }
  }, [mode, existingTransaction]);
  const handleCheckboxChange = (e) => {
    setRecurringBill(e.target.checked);
  };
  const handleSaveTransaction = async () => {
    if (!validateForm())
      return;
    try {
      if (mode === "add") {
        const newTransaction = {
          transactionName,
          transactionCategory,
          transactionAmt: Number(transactionAmt),
          recurringBill,
          transactionDate: Timestamp.now()
        };
        await addTransaction(newTransaction);
        toast({
          title: "Transaction added successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else if (mode === "edit" && transactionId) {
        if (user) {
          const transactionDocRef = doc(db, `users/${user.uid}/transactions`, transactionId);
          await updateDoc(transactionDocRef, {
            transactionName,
            transactionCategory,
            transactionAmt: Number(transactionAmt),
            recurringBill
          });
          toast({
            title: "Transaction edited successfully.",
            status: "success",
            duration: 3e3,
            isClosable: true
          });
        } else {
          console.error("User is not authenticated.");
        }
      }
      setTransactionName("");
      setTransactionCategory("");
      setTransactionAmt(0);
      setRecurringBill(false);
      onClose();
    } catch (error) {
      console.log("Error adding transaction: ", error);
    }
  };
  const handleDeleteTransaction = async () => {
    console.log("handleDeleteTransaction called, mode:", mode, "transactionId:", transactionId);
    if (mode === "delete" && transactionId) {
      if (user) {
        const transactionDocRef = doc(db, `users/${user.uid}/transactions`, transactionId);
        await deleteDoc(transactionDocRef);
        onClose();
        toast({
          title: "Transaction deleted successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else {
        console.error("User is not authenticated.");
      }
    } else {
      console.error("Delete mode or transactionId is not valid");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(addNewModal_default, { isOpen, onClose, headerTitle: mode === "add" ? "Add New Transaction" : mode === "edit" ? "Edit Transaction" : mode === "delete" ? "Delete Transaction" : "", headerTag: mode === "add" ? "Enter a name for the transaction and pick a category. These categories can help you monitor income and expenses." : mode === "edit" ? "If you missed something or entered an amount incorrectly, edit it and save changes." : mode === "delete" ? "Are you sure you want to delete this transaction? This action cannot be reversed, and all the data inside it will be removed forever." : "", children: [
    (mode === "add" || mode === "edit") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[200], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { isInvalid: !!errors.transactionName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(inputField_default, { label: "Transaction Name", placeholder: "e.g. Property Management Inc", type: "text", isRequired: true, onChange: (e) => setTransactionName(e.target.value), value: transactionName, helperText: errors.transactionName }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 168,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 167,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dropdownMenu_default, { label: "Bills", items: categoryMenuItems, fieldTitle: "Transaction Category", onChange: (item) => setTransactionCategory(item.value || ""), value: transactionCategory }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 170,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { isInvalid: !!errors.transactionAmt, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(inputField_default, { placeholder: "e.g. 2000", type: "number", isRequired: true, label: "Transaction Amount", prefix: "$", onChange: (e) => setTransactionAmt(parseFloat(e.target.value)), value: transactionAmt, helperText: errors.transactionAmt }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 172,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 171,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, { variant: "outline", type: "checkbox", onChange: handleCheckboxChange, isChecked: recurringBill, iconColor: "white", colorScheme: "grey", sx: {
        ".chakra-checkbox__label": {
          color: "grey.500",
          textStyle: "preset5bold"
        }
      }, children: "Recurring Bill" }, void 0, false, {
        fileName: "app/components/transactions/transactionModal.tsx",
        lineNumber: 174,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/transactions/transactionModal.tsx",
      lineNumber: 166,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/transactions/transactionModal.tsx",
      lineNumber: 165,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", width: "100%", height: "100%", padding: theme_default.spacing[200], justifyContent: "center", alignItems: "center", gap: theme_default.spacing[200], flex: "1 0 0", borderRadius: theme_default.spacing[100], textStyle: "preset4bold", fontSize: " 0.875rem", onClick: () => {
      console.log("Button clicked, mode:", mode);
      if (mode === "add" || mode === "edit") {
        handleSaveTransaction();
      } else if (mode === "delete") {
        handleDeleteTransaction();
      }
    }, bg: mode === "add" || mode === "edit" ? "grey.900" : "secondary.red", children: mode === "add" ? "Add Transaction" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : "" }, void 0, false, {
      fileName: "app/components/transactions/transactionModal.tsx",
      lineNumber: 184,
      columnNumber: 13
    }, this),
    mode === "delete" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, justifyContent: "center", alignItems: "center", gap: theme_default.spacing[150], variant: "tertiary", textStyle: "preset4", fontSize: "0.875rem", color: "grey.500", _hover: {
      color: "grey.900"
    }, children: "No, Go Back" }, void 0, false, {
      fileName: "app/components/transactions/transactionModal.tsx",
      lineNumber: 195,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/transactionModal.tsx",
    lineNumber: 164,
    columnNumber: 10
  }, this);
};
_s(TransactionModal, "slrGtkFyHDXguA4D291nf/pgUvw=", false, function() {
  return [useTransactions_default, useAuth, useToast];
});
_c = TransactionModal;
var transactionModal_default = TransactionModal;
var _c;
$RefreshReg$(_c, "TransactionModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/transactions/transactionsListItem.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/transactionsListItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/transactionsListItem.tsx"
  );
  import.meta.hot.lastModified = "1731514058692.2773";
}
var TransactionsListItem = ({
  transaction,
  onEdit,
  onDelete
}) => {
  _s2();
  const location = useLocation();
  const formatTransactionAmount = (amount) => {
    const sign = amount >= 0 ? "+" : "-";
    return `${sign}$${Math.abs(amount).toFixed(2)}`;
  };
  const formatDate = (date) => {
    const dateObj = date instanceof Timestamp ? date.toDate() : date;
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric"
    };
    return new Date(dateObj).toLocaleDateString("en-UK", options);
  };
  const locationTransactionRoute = location.pathname === "/transactions";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", position: "relative", _hover: {
    ".action-buttons": {
      opacity: 1
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { display: {
      lg: "flex",
      md: "flex",
      sm: "none"
    }, justify: locationTransactionRoute ? "normal" : "space-between", align: "center", width: "100%", padding: locationTransactionRoute ? `0rem ${theme_default.spacing[150]}` : "none", gap: locationTransactionRoute ? theme_default.spacing[400] : "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(transactionImg_default, { transaction }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", children: transaction.transactionName }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      locationTransactionRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "7.5rem", direction: "column", justify: "center", align: "flex-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: transaction.transactionCategory }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 68,
        columnNumber: 46
      }, this),
      locationTransactionRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "7.5rem", direction: "column", justify: "center", align: "flex-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: formatDate(transaction.transactionDate) }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 72,
        columnNumber: 46
      }, this),
      locationTransactionRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "12.5rem", direction: "column", justify: "center", align: "flex-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: transaction.transactionAmt >= 0 ? "secondary.green" : "black", textAlign: "right", children: formatTransactionAmount(transaction.transactionAmt) }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 76,
        columnNumber: 46
      }, this),
      !locationTransactionRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-end", gap: theme_default.spacing[100], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: transaction.transactionAmt >= 0 ? "secondary.green" : "black", textAlign: "right", children: formatTransactionAmount(transaction.transactionAmt) }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: formatDate(transaction.transactionDate) }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 87,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 82,
        columnNumber: 47
      }, this),
      locationTransactionRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { padding: theme_default.spacing[100], position: "absolute", right: theme_default.spacing[100], top: "50%", transform: "translateY(-50%)", className: "action-buttons", opacity: "0", transition: "opacity 0.2s", gap: theme_default.spacing[100], bg: "white", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", borderRadius: theme_default.spacing[200], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { "aria-label": "Edit transaction", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PencilSimple_esm_default, {}, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 92,
          columnNumber: 73
        }, this), onClick: () => onEdit(transaction.id), size: "sm", variant: "ghost", borderRadius: theme_default.spacing[200] }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { "aria-label": "Delete transaction", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash_esm_default, {}, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 93,
          columnNumber: 75
        }, this), onClick: () => onDelete(transaction.id), size: "sm", variant: "ghost", borderRadius: theme_default.spacing[200] }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 93,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 91,
        columnNumber: 46
      }, this)
    ] }, `${transaction.id}-desktop`, true, {
      fileName: "app/components/transactions/transactionsListItem.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { mt: theme_default.spacing[100], display: {
      lg: "none",
      md: "none",
      sm: "flex"
    }, justify: locationTransactionRoute ? "normal" : "space-between", align: "center", width: "100%", padding: locationTransactionRoute ? `0rem ${theme_default.spacing[150]}` : "none", gap: locationTransactionRoute ? theme_default.spacing[400] : "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(transactionImg_default, { transaction }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-start", gap: theme_default.spacing[100], alignSelf: "stretch", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", children: transaction.transactionName }, void 0, false, {
            fileName: "app/components/transactions/transactionsListItem.tsx",
            lineNumber: 107,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: transaction.transactionCategory }, void 0, false, {
            fileName: "app/components/transactions/transactionsListItem.tsx",
            lineNumber: 108,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 106,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-end", gap: theme_default.spacing[50], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: transaction.transactionAmt >= 0 ? "secondary.green" : "black", textAlign: "right", children: formatTransactionAmount(transaction.transactionAmt) }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: formatDate(transaction.transactionDate) }, void 0, false, {
          fileName: "app/components/transactions/transactionsListItem.tsx",
          lineNumber: 116,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/transactions/transactionsListItem.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this)
    ] }, `${transaction.id}-mobile`, true, {
      fileName: "app/components/transactions/transactionsListItem.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/transactionsListItem.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s2(TransactionsListItem, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c2 = TransactionsListItem;
var transactionsListItem_default = TransactionsListItem;
var _c2;
$RefreshReg$(_c2, "TransactionsListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/transactions/transactionsList.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/transactionsList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/transactionsList.tsx"
  );
  import.meta.hot.lastModified = "1731082058712.9736";
}
var TransactionsList = ({
  limit,
  transactions = []
}) => {
  _s3();
  const {
    isModalOpen,
    transactionModalMode,
    openEditTransactionModal,
    openDeleteTransactionModal,
    closeModal,
    selectedItem
  } = useModal_default();
  const selectedTransaction = transactions?.find((transaction) => transaction.id === selectedItem);
  const displayedTransactions = limit ? transactions?.slice(0, limit) : transactions || [];
  const handleEdit = (id) => {
    openEditTransactionModal(id);
  };
  const handleDelete = (id) => {
    openDeleteTransactionModal(id);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[250], width: "100%", children: [
    displayedTransactions.map((transaction, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "100%", direction: "column", gap: theme_default.spacing[250], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(transactionsListItem_default, { transaction, onEdit: handleEdit, onDelete: handleDelete }, void 0, false, {
        fileName: "app/components/transactions/transactionsList.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      index < displayedTransactions.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Divider, { orientation: "horizontal" }, void 0, false, {
        fileName: "app/components/transactions/transactionsList.tsx",
        lineNumber: 53,
        columnNumber: 66
      }, this)
    ] }, transaction.id, true, {
      fileName: "app/components/transactions/transactionsList.tsx",
      lineNumber: 51,
      columnNumber: 64
    }, this)),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(transactionModal_default, { mode: transactionModalMode, isOpen: isModalOpen, onClose: closeModal, transactionId: selectedTransaction?.id, existingTransaction: selectedTransaction }, void 0, false, {
      fileName: "app/components/transactions/transactionsList.tsx",
      lineNumber: 55,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/transactions/transactionsList.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
};
_s3(TransactionsList, "XYMqOq9dgb+HZt64BTrrSfKcdEw=", false, function() {
  return [useModal_default];
});
_c3 = TransactionsList;
var transactionsList_default = TransactionsList;
var _c3;
$RefreshReg$(_c3, "TransactionsList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  transactionModal_default,
  transactionsList_default
};
//# sourceMappingURL=/build/_shared/chunk-5CM6EAG7.js.map
