import {
  usePots_default
} from "/build/_shared/chunk-HNLPZASZ.js";
import {
  transactionsList_default
} from "/build/_shared/chunk-ZBVHDEMX.js";
import {
  budgetsChart_default,
  summaryTitle_default,
  useBudgets_default
} from "/build/_shared/chunk-ADJMCADT.js";
import "/build/_shared/chunk-76FYL7ER.js";
import {
  useBillsData_default
} from "/build/_shared/chunk-Z7FWRHWT.js";
import {
  useTransactions_default
} from "/build/_shared/chunk-GUQ6LDKD.js";
import {
  mainContent_default,
  pageHeader_default,
  pageLoading_default,
  useUserData_default
} from "/build/_shared/chunk-TGV7UNIE.js";
import {
  J2 as J
} from "/build/_shared/chunk-5PNKOZEI.js";
import "/build/_shared/chunk-UNK6ZALF.js";
import {
  Box,
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

// app/routes/_index.tsx
var import_react9 = __toESM(require_react(), 1);

// app/components/dashboard/summaryCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/summaryCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/summaryCard.tsx"
  );
  import.meta.hot.lastModified = "1730138163541.5186";
}
var SummaryCard = ({
  label,
  amount,
  bg,
  labelColor,
  amountColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { p: theme_default.spacing[300], direction: "column", align: "flex-start", gap: theme_default.spacing[150], flex: "1 0 0", bg, borderRadius: theme_default.spacing[150], width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: labelColor, textStyle: "preset4", children: label }, void 0, false, {
      fileName: "app/components/dashboard/summaryCard.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: amountColor, textStyle: "preset1", children: [
      "$",
      amount.toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    ] }, void 0, true, {
      fileName: "app/components/dashboard/summaryCard.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/summaryCard.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = SummaryCard;
var summaryCard_default = SummaryCard;
var _c;
$RefreshReg$(_c, "SummaryCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/microSummaryTag.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/microSummaryTag.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/microSummaryTag.tsx"
  );
  import.meta.hot.lastModified = "1730127765158.7603";
}
var MicroSummaryTag = ({
  color,
  label,
  amount
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], flex: "1 0 0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: theme_default.spacing[50], alignSelf: "stretch", borderRadius: theme_default.spacing[100], bg: color }, void 0, false, {
      fileName: "app/components/dashboard/microSummaryTag.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: label }, void 0, false, {
        fileName: "app/components/dashboard/microSummaryTag.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/microSummaryTag.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/microSummaryTag.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/microSummaryTag.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c2 = MicroSummaryTag;
var microSummaryTag_default = MicroSummaryTag;
var _c2;
$RefreshReg$(_c2, "MicroSummaryTag");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/potsSummary.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/potsSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/potsSummary.tsx"
  );
  import.meta.hot.lastModified = "1730139436633.1843";
}
var PotsSummary = () => {
  _s();
  const {
    pots,
    loading,
    error
  } = usePots_default();
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Loading pots..." }, void 0, false, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: error }, void 0, false, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 39,
      columnNumber: 12
    }, this);
  }
  const totalSavedAllPots = pots.reduce((accumulator, pot) => {
    return accumulator + (pot.totalSaved || 0);
  }, 0);
  const displayedPots = pots?.slice(0, 4).sort((a, b) => (b.totalSaved || 0) - (a.totalSaved || 0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { height: "50%", p: theme_default.spacing[400], direction: "column", align: "flex-start", gap: theme_default.spacing[250], alignSelf: "stretch", borderRadius: theme_default.spacing[150], background: "white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(summaryTitle_default, { title: "Pots", titleStyle: "preset2", link: "/pots", linkText: "See Details" }, void 0, false, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    pots ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "100%", direction: {
      lg: "row",
      md: "row",
      sm: "column"
    }, align: "center", gap: theme_default.spacing[250], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: {
        lg: "15.4375rem",
        md: "15.4375rem",
        sm: "100%"
      }, height: "6.875rem", p: theme_default.spacing[200], align: "center", gap: theme_default.spacing[200], borderRadius: theme_default.spacing[150], bg: "beige.100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(J, { weight: "light", width: "2.5rem", height: "2.5rem", fill: "#277C78" }, void 0, false, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: "0.6875rem", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: "Total Saved" }, void 0, false, {
            fileName: "app/components/dashboard/potsSummary.tsx",
            lineNumber: 61,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset1", color: "grey.900", children: [
            "$",
            totalSavedAllPots.toFixed(0)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/potsSummary.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/potsSummary.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "100%", direction: "column", justify: "center", align: "flex-start", gap: theme_default.spacing[200], flex: "1 0 0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-start", gap: theme_default.spacing[200], flex: "1 0 0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], alignSelf: "stretch", children: displayedPots.slice(0, 2).map((pot) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(microSummaryTag_default, { pot, color: pot.potColor, label: pot.potName, amount: pot.totalSaved }, pot.id, false, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 73,
          columnNumber: 75
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 72,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[200], alignSelf: "stretch", children: displayedPots.slice(2, 4).map((pot) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(microSummaryTag_default, { pot, color: pot.potColor, label: pot.potName, amount: pot.totalSaved }, pot.id, false, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 76,
          columnNumber: 75
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/potsSummary.tsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/potsSummary.tsx",
        lineNumber: 71,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/potsSummary.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/potsSummary.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 49,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "100%", justify: "center", align: "center", direction: "column", mt: theme_default.spacing[500], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset4", children: "Add pots to get started." }, void 0, false, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 82,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/potsSummary.tsx",
      lineNumber: 81,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/potsSummary.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(PotsSummary, "5JGmWGJK1g+DPKz5aaN7vcbvKaQ=", false, function() {
  return [usePots_default];
});
_c3 = PotsSummary;
var potsSummary_default = PotsSummary;
var _c3;
$RefreshReg$(_c3, "PotsSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/budgetsSummary.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/budgetsSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/budgetsSummary.tsx"
  );
  import.meta.hot.lastModified = "1731012097766.9636";
}
var BudgetsSummary = ({
  budgets
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { p: theme_default.spacing[400], direction: "column", align: "center", gap: theme_default.spacing[250], alignSelf: "stretch", borderRadius: theme_default.spacing[150], background: "white", height: "100%", flex: "1 0 0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(summaryTitle_default, { title: "Budgets", titleStyle: "preset2", link: "/budgets", linkText: "See Details" }, void 0, false, {
      fileName: "app/components/dashboard/budgetsSummary.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { width: {
      lg: "auto",
      md: "auto",
      sm: "100%"
    }, direction: {
      lg: "row",
      md: "row",
      sm: "column"
    }, align: "center", gap: theme_default.spacing[250], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { p: `${theme_default.spacing[100]} 0rem`, align: "center", gap: "1rem", flex: "1 0 0", alignSelf: "stretch", margin: "auto", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(budgetsChart_default, { budgets }, void 0, false, {
        fileName: "app/components/dashboard/budgetsSummary.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/budgetsSummary.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: "column", justify: "center", align: "flex-start", gap: theme_default.spacing[200], flex: "0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: {
        lg: "column",
        md: "column",
        sm: "row"
      }, align: "flex-start", gap: theme_default.spacing[200], alignSelf: "stretch", width: {
        lg: "auto",
        md: "auto",
        sm: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: {
          lg: "column",
          md: "column",
          sm: "column"
        }, gap: theme_default.spacing[200], width: {
          lg: "auto",
          md: "auto",
          sm: "100%"
        }, children: budgets.sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 2).map((savings, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(microSummaryTag_default, { color: savings.budgetColor, label: savings.budgetCategory, amount: savings.totalSpent }, index, false, {
          fileName: "app/components/dashboard/budgetsSummary.tsx",
          lineNumber: 65,
          columnNumber: 122
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/budgetsSummary.tsx",
          lineNumber: 56,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: {
          lg: "column",
          md: "column",
          sm: "column"
        }, gap: theme_default.spacing[200], width: {
          lg: "auto",
          md: "auto",
          sm: "100%"
        }, children: budgets.sort((a, b) => b.totalSpent - a.totalSpent).slice(2, 4).map((savings, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(microSummaryTag_default, { color: savings.budgetColor, label: savings.budgetCategory, amount: savings.totalSpent }, index, false, {
          fileName: "app/components/dashboard/budgetsSummary.tsx",
          lineNumber: 76,
          columnNumber: 122
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/budgetsSummary.tsx",
          lineNumber: 67,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/budgetsSummary.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/budgetsSummary.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/dashboard/budgetsSummary.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/budgetsSummary.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/budgetsSummary.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c4 = BudgetsSummary;
var budgetsSummary_default = BudgetsSummary;
var _c4;
$RefreshReg$(_c4, "BudgetsSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/transactionsSummary.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/transactionsSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/transactionsSummary.tsx"
  );
  import.meta.hot.lastModified = "1730133706873.5964";
}
var TransactionsSummary = () => {
  _s2();
  const {
    transactions
  } = useTransactions_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { p: theme_default.spacing[400], direction: "column", align: "flex-start", gap: theme_default.spacing[400], alignSelf: "stretch", borderRadius: theme_default.spacing[150], bg: "white", height: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(summaryTitle_default, { title: "Transactions", titleStyle: "preset2", link: "/transactions", linkText: "See Details" }, void 0, false, {
      fileName: "app/components/dashboard/transactionsSummary.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    transactions ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { direction: "column", align: "space-between", gap: theme_default.spacing[250], alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(transactionsList_default, { transactions, limit: 4 }, void 0, false, {
      fileName: "app/components/dashboard/transactionsSummary.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/transactionsSummary.tsx",
      lineNumber: 35,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { width: "100%", justify: "center", align: "center", direction: "column", mt: theme_default.spacing[500], children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { textStyle: "preset4", children: "Add transactions to get started." }, void 0, false, {
      fileName: "app/components/dashboard/transactionsSummary.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/transactionsSummary.tsx",
      lineNumber: 37,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/transactionsSummary.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s2(TransactionsSummary, "cTP0WG6dR6t7C9ORLcZ2HXgsiT8=", false, function() {
  return [useTransactions_default];
});
_c5 = TransactionsSummary;
var transactionsSummary_default = TransactionsSummary;
var _c5;
$RefreshReg$(_c5, "TransactionsSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/billsSummaryTag.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/billsSummaryTag.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/billsSummaryTag.tsx"
  );
  import.meta.hot.lastModified = "1729353816360.7578";
}
var BillsSummaryTag = ({
  color,
  label,
  amount
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { padding: `${theme_default.spacing[250]} ${theme_default.spacing[200]}`, justify: "space-between", align: "center", alignSelf: "stretch", borderRadius: theme_default.spacing[100], borderLeft: `${theme_default.spacing[50]} solid ${color}`, bg: "beige.100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: label }, void 0, false, {
      fileName: "app/components/dashboard/billsSummaryTag.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", children: [
      "$",
      amount.toFixed(2)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/billsSummaryTag.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/billsSummaryTag.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c6 = BillsSummaryTag;
var billsSummaryTag_default = BillsSummaryTag;
var _c6;
$RefreshReg$(_c6, "BillsSummaryTag");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/billsSummary.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/billsSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/billsSummary.tsx"
  );
  import.meta.hot.lastModified = "1730132618687.999";
}
var BillsSummary = () => {
  _s3();
  const billsData = useBillsData_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { p: theme_default.spacing[400], direction: "column", align: "flex-start", gap: theme_default.spacing[250], alignSelf: "stretch", borderRadius: theme_default.spacing[150], background: "white", height: "100%", flex: "1 0 0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(summaryTitle_default, { title: "Recurring Bills", titleStyle: "preset2", link: "/bills", linkText: "See Details" }, void 0, false, {
      fileName: "app/components/dashboard/billsSummary.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[150], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(billsSummaryTag_default, { color: `${theme_default.colors.secondary.green}`, label: "Paid Bills", amount: billsData.totalPaidAmount }, void 0, false, {
        fileName: "app/components/dashboard/billsSummary.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(billsSummaryTag_default, { color: `${theme_default.colors.secondary.yellow}`, label: "Total Upcoming", amount: billsData.totalUpcoming }, void 0, false, {
        fileName: "app/components/dashboard/billsSummary.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(billsSummaryTag_default, { color: `${theme_default.colors.secondary.cyan}`, label: "Due Soon", amount: billsData.totalDueSoon }, void 0, false, {
        fileName: "app/components/dashboard/billsSummary.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/billsSummary.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/billsSummary.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(BillsSummary, "nNUm8ep7J70I2kBfxVtjzOQq4+Y=", false, function() {
  return [useBillsData_default];
});
_c7 = BillsSummary;
var billsSummary_default = BillsSummary;
var _c7;
$RefreshReg$(_c7, "BillsSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1733508598753.0242";
}
function Home() {
  _s4();
  const {
    budgets
  } = useBudgets_default();
  const {
    userData,
    loading,
    error
  } = useUserData_default();
  const {
    transactions
  } = useTransactions_default();
  const [totalIncome, setTotalIncome] = (0, import_react9.useState)(0);
  const [totalExpenses, setTotalExpenses] = (0, import_react9.useState)(0);
  const [currentBalance, setCurrentBalance] = (0, import_react9.useState)(0);
  const budgetsWithTotals = (0, import_react9.useMemo)(() => {
    return budgets.map((budget) => {
      const budgetTransactions = transactions.filter((transaction) => transaction.transactionCategory === budget.budgetCategory && transaction.transactionAmt < 0);
      const totalSpent = budgetTransactions.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);
      const totalRemaining = budget.maxSpend - totalSpent;
      return {
        ...budget,
        totalSpent,
        totalRemaining
      };
    });
  }, [budgets, transactions]);
  (0, import_react9.useEffect)(() => {
    const income = transactions.filter((transaction) => transaction.transactionAmt > 0).reduce((sum, transaction) => sum + transaction.transactionAmt, 0);
    const expenses = transactions.filter((transaction) => transaction.transactionAmt < 0).reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);
    const currentBalance2 = income - expenses;
    setTotalIncome(income);
    setTotalExpenses(expenses);
    setCurrentBalance(currentBalance2);
  }, [transactions]);
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(pageLoading_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 23
    }, this);
  if (error)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: error }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this);
  const summaryData = [{
    label: "Current Balance",
    amount: currentBalance,
    labelColor: "white",
    amountColor: "white",
    bg: "grey.900"
  }, {
    label: "Income",
    amount: totalIncome,
    labelColor: "grey.500",
    amountColor: "grey.900",
    bg: "white"
  }, {
    label: "Expenses",
    amount: totalExpenses,
    labelColor: "grey.500",
    amountColor: "grey.900",
    bg: "white"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(mainContent_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(pageHeader_default, { children: "Overview" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { direction: {
      lg: "row",
      md: "row",
      sm: "column"
    }, align: "flex-start", alignSelf: "stretch", gap: {
      lg: theme_default.spacing[300],
      md: theme_default.spacing[300],
      sm: theme_default.spacing[150]
    }, maxWidth: {
      lg: "90rem",
      md: "90rem",
      sm: "90rem"
    }, children: summaryData.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(summaryCard_default, { label: item.label, amount: item.amount ?? 0, labelColor: item.labelColor, amountColor: item.amountColor, bg: item.bg }, index, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 114,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { direction: {
      lg: "row",
      md: "column",
      sm: "column"
    }, maxWidth: {
      lg: "90rem",
      sm: "100%"
    }, width: "100%", gap: theme_default.spacing[300], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { width: {
        lg: "38rem",
        md: "100%",
        sm: "100%"
      }, direction: "column", align: "flex-start", gap: theme_default.spacing[300], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(potsSummary_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(transactionsSummary_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flex, { height: {
        lg: "auto",
        md: "47.5625rem",
        sm: "55.5625rem"
      }, direction: "column", align: "flex-start", gap: theme_default.spacing[300], flex: "1 0 0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(budgetsSummary_default, { budgets: budgetsWithTotals }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(billsSummary_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s4(Home, "X2bY4Ktc4QqCCNXKQYb6GKnykDU=", false, function() {
  return [useBudgets_default, useUserData_default, useTransactions_default];
});
_c8 = Home;
var _c8;
$RefreshReg$(_c8, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default
};
//# sourceMappingURL=/build/routes/_index-GGLCAOJS.js.map
