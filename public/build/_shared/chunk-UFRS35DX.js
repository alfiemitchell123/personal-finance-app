import {
  XCircle_esm_default
} from "/build/_shared/chunk-STRJBWB3.js";
import {
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  theme_default
} from "/build/_shared/chunk-KMD4SM23.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/useModal.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useModal.ts"
  );
  import.meta.hot.lastModified = "1730019599604.1501";
}
var useModal = () => {
  const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
  const [budgetModalMode, setBudgetModalMode] = (0, import_react.useState)("add");
  const [potModalMode, setPotModalMode] = (0, import_react.useState)("addNew");
  const [transactionModalMode, setTransactionModalMode] = (0, import_react.useState)("add");
  const [selectedItem, setSelectedItem] = (0, import_react.useState)(void 0);
  const openAddBudgetModal = () => {
    setBudgetModalMode("add");
    setSelectedItem(void 0);
    setIsModalOpen(true);
  };
  const openEditBudgetModal = (id) => {
    setBudgetModalMode("edit");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openDeleteBudgetModal = (id) => {
    setBudgetModalMode("delete");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openAddPotModal = () => {
    setPotModalMode("addNew");
    setSelectedItem(void 0);
    setIsModalOpen(true);
  };
  const openEditPotModal = (id) => {
    setPotModalMode("edit");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openDeletePotModal = (id) => {
    setPotModalMode("delete");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openWithdrawPotModal = (id) => {
    setPotModalMode("withdraw");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openAddMoneyPotModal = (id) => {
    setPotModalMode("addMoney");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(void 0);
  };
  const openAddTransactionModal = () => {
    setTransactionModalMode("add");
    setSelectedItem(void 0);
    setIsModalOpen(true);
  };
  const openEditTransactionModal = (id) => {
    setTransactionModalMode("edit");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  const openDeleteTransactionModal = (id) => {
    setTransactionModalMode("delete");
    setSelectedItem(id);
    setIsModalOpen(true);
  };
  return {
    isModalOpen,
    budgetModalMode,
    potModalMode,
    transactionModalMode,
    selectedItem,
    closeModal,
    // Budgets
    openAddBudgetModal,
    openEditBudgetModal,
    openDeleteBudgetModal,
    // Pots
    openAddPotModal,
    openEditPotModal,
    openDeletePotModal,
    openWithdrawPotModal,
    openAddMoneyPotModal,
    // Transactions
    openAddTransactionModal,
    openEditTransactionModal,
    openDeleteTransactionModal
  };
};
var useModal_default = useModal;

// app/components/ui/customModalCloseButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/customModalCloseButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/customModalCloseButton.tsx"
  );
  import.meta.hot.lastModified = "1729674787998.3843";
}
var CustomModalCloseButton = ({
  onClose
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { onClick: onClose, "aria-label": "Close modal", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircle_esm_default, { size: 32, weight: "thin" }, void 0, false, {
    fileName: "app/components/ui/customModalCloseButton.tsx",
    lineNumber: 26,
    columnNumber: 71
  }, this), bg: "transparent", boxSize: "2rem", _hover: {
    bg: "transparent",
    color: "grey.900"
  } }, void 0, false, {
    fileName: "app/components/ui/customModalCloseButton.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = CustomModalCloseButton;
var customModalCloseButton_default = CustomModalCloseButton;
var _c;
$RefreshReg$(_c, "CustomModalCloseButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/addNewModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/addNewModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/addNewModal.tsx"
  );
  import.meta.hot.lastModified = "1729679326378.9297";
}
var AddNewModal = ({
  isOpen,
  onClose,
  headerTitle,
  headerTag,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { isOpen, onClose, isCentered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalOverlay, {}, void 0, false, {
      fileName: "app/components/ui/addNewModal.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalContent, { display: "flex", maxW: "35rem", padding: theme_default.spacing[400], flexDirection: "column", alignItems: "flex-start", gap: theme_default.spacing[250], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "space-between", width: "100%", align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalHeader, { flex: "1", padding: 0, textStyle: "preset1", fontSize: "2rem", color: "grey.900", children: headerTitle }, void 0, false, {
          fileName: "app/components/ui/addNewModal.tsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(customModalCloseButton_default, { onClose }, void 0, false, {
          fileName: "app/components/ui/addNewModal.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/addNewModal.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: headerTag }, void 0, false, {
        fileName: "app/components/ui/addNewModal.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalBody, { display: "flex", flexDirection: "column", gap: theme_default.spacing[250], width: "100%", padding: 0, children }, void 0, false, {
        fileName: "app/components/ui/addNewModal.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/addNewModal.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/addNewModal.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c2 = AddNewModal;
var addNewModal_default = AddNewModal;
var _c2;
$RefreshReg$(_c2, "AddNewModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/menuItems.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/menuItems.ts"
  );
  import.meta.hot.lastModified = "1730019070293.9883";
}
var categoryMenuItems = [
  {
    itemLabel: "Bills",
    value: "Bills"
  },
  {
    itemLabel: "Dining Out",
    value: "Dining Out"
  },
  {
    itemLabel: "Entertainment",
    value: "Entertainment"
  },
  {
    itemLabel: "General",
    value: "General"
  },
  {
    itemLabel: "Groceries",
    value: "Groceries"
  },
  {
    itemLabel: "Lifestyle",
    value: "Lifestyle"
  },
  {
    itemLabel: "Personal Care",
    value: "Personal Care"
  },
  {
    itemLabel: "Transportation",
    value: "Transportation"
  }
];
var themeMenuItems = [
  { itemLabel: "Green", colorTag: "#277C78" },
  { itemLabel: "Yellow", colorTag: "#F2CDAC" },
  { itemLabel: "Cyan", colorTag: "#82C9D7" },
  { itemLabel: "Navy", colorTag: "#626070" },
  { itemLabel: "Red", colorTag: "#C94736" },
  { itemLabel: "Purple", colorTag: "#826CB0" },
  { itemLabel: "Turquoise", colorTag: "#597C7C" },
  { itemLabel: "Magenta", colorTag: "#934F6F" }
];

export {
  useModal_default,
  addNewModal_default,
  categoryMenuItems,
  themeMenuItems
};
//# sourceMappingURL=/build/_shared/chunk-UFRS35DX.js.map
