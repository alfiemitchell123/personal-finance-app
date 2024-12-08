import {
  usePots_default
} from "/build/_shared/chunk-LV6XMHKU.js";
import {
  transactionsList_default
} from "/build/_shared/chunk-5CM6EAG7.js";
import {
  budgetsChart_default,
  summaryTitle_default,
  useBudgets_default
} from "/build/_shared/chunk-JGDIYDEN.js";
import "/build/_shared/chunk-IVEKJXSA.js";
import "/build/_shared/chunk-UFRS35DX.js";
import {
  useBillsData_default
} from "/build/_shared/chunk-XEUDDUXO.js";
import {
  useTransactions_default
} from "/build/_shared/chunk-SE7ILXZI.js";
import {
  mainContent_default,
  pageHeader_default,
  pageLoading_default,
  useUserData_default
} from "/build/_shared/chunk-STRJBWB3.js";
import {
  E
} from "/build/_shared/chunk-NAY3M5MB.js";
import "/build/_shared/chunk-AXQ3FDH7.js";
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
var import_react10 = __toESM(require_react(), 1);

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

// node_modules/@phosphor-icons/react/dist/ssr/TipJar.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/TipJar.mjs
var import_react2 = __toESM(require_react(), 1);
var V = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Zm-28-38a30,30,0,0,1-28,29.93V196a12,12,0,0,1-24,0v-4h-8a12,12,0,0,1,0-24h30a6,6,0,0,0,0-12H118a30,30,0,0,1-2-59.93V96a12,12,0,0,1,24,0h8a12,12,0,0,1,0,24H118a6,6,0,0,0,0,12h20A30,30,0,0,1,168,162Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M208,88V200a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V88A32,32,0,0,1,80,56h96A32,32,0,0,1,208,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Zm-40-40a24,24,0,0,1-24,24v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h24a8,8,0,0,0,0-16H120a24,24,0,0,1,0-48V96a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16H120a8,8,0,0,0,0,16h16A24,24,0,0,1,160,160Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,32h16V48H120ZM88,32h16V48H88Zm48,152v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h24a8,8,0,0,0,0-16H120a24,24,0,0,1,0-48V96a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16H120a8,8,0,0,0,0,16h16a24,24,0,0,1,0,48ZM168,48H152V32h16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM202,200a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V88A26,26,0,0,1,80,62h96a26,26,0,0,1,26,26Zm-44-40a22,22,0,0,1-22,22h-2v10a6,6,0,0,1-12,0V182H112a6,6,0,0,1,0-12h24a10,10,0,0,0,0-20H120a22,22,0,0,1,0-44h2V96a6,6,0,0,1,12,0v10h10a6,6,0,0,1,0,12H120a10,10,0,0,0,0,20h16A22,22,0,0,1,158,160Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Zm-40-40a24,24,0,0,1-24,24v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h24a8,8,0,0,0,0-16H120a24,24,0,0,1,0-48V96a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16H120a8,8,0,0,0,0,16h16A24,24,0,0,1,160,160Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM148,28h20a4,4,0,0,1,4,4V52H148Zm-32,0h24V52H116ZM84,32a4,4,0,0,1,4-4h20V52H84ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Zm-48-40a20,20,0,0,1-20,20h-4v12a4,4,0,0,1-8,0V180H112a4,4,0,0,1,0-8h24a12,12,0,0,0,0-24H120a20,20,0,0,1,0-40h4V96a4,4,0,0,1,8,0v12h12a4,4,0,0,1,0,8H120a12,12,0,0,0,0,24h16A20,20,0,0,1,156,160Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/TipJar.mjs
var p = Object.defineProperty;
var f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var R = Object.prototype.propertyIsEnumerable;
var t = (e, r, a2) => r in e ? p(e, r, { enumerable: true, configurable: true, writable: true, value: a2 }) : e[r] = a2;
var m = (e, r) => {
  for (var a2 in r || (r = {}))
    c.call(r, a2) && t(e, a2, r[a2]);
  if (o)
    for (var a2 of o(r))
      R.call(r, a2) && t(e, a2, r[a2]);
  return e;
};
var i = (e, r) => f(e, s(r));
var J = (0, import_react3.forwardRef)((e, r) => /* @__PURE__ */ import_react3.default.createElement(E, i(m({ ref: r }, e), { weights: V })));
J.displayName = "TipJar";

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
  import.meta.hot.lastModified = "1733689956341.8699";
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
  const displayedPots = pots?.slice(0, 4).sort((a2, b) => (b.totalSaved || 0) - (a2.totalSaved || 0));
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
  import.meta.hot.lastModified = "1733689940135.5254";
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
        }, children: budgets.sort((a2, b) => b.totalSpent - a2.totalSpent).slice(0, 2).map((savings, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(microSummaryTag_default, { color: savings.budgetColor, label: savings.budgetCategory, amount: savings.totalSpent }, index, false, {
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
        }, children: budgets.sort((a2, b) => b.totalSpent - a2.totalSpent).slice(2, 4).map((savings, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(microSummaryTag_default, { color: savings.budgetColor, label: savings.budgetCategory, amount: savings.totalSpent }, index, false, {
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
  import.meta.hot.lastModified = "1733677571888.3357";
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
  const [totalIncome, setTotalIncome] = (0, import_react10.useState)(0);
  const [totalExpenses, setTotalExpenses] = (0, import_react10.useState)(0);
  const [currentBalance, setCurrentBalance] = (0, import_react10.useState)(0);
  const budgetsWithTotals = (0, import_react10.useMemo)(() => {
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
  (0, import_react10.useEffect)(() => {
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
//# sourceMappingURL=/build/routes/_index-MGJRWECU.js.map
