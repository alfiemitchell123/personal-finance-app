import {
  Divider,
  Flex,
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/editDeleteDropdown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/editDeleteDropdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/editDeleteDropdown.tsx"
  );
  import.meta.hot.lastModified = "1729696227952.5703";
}
var EditDeleteDropdown = ({
  label,
  onEdit,
  onDelete
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { display: "inline-flex", maxH: "18.75rem", padding: `${theme_default.spacing[150]} ${theme_default.spacing[250]}`, direction: "column", align: "flex-start", gap: theme_default.spacing[150], borderRadius: theme_default.spacing[100], bg: "white", boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { onClick: onEdit, align: "center", gap: theme_default.spacing[200], cursor: "pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset4", color: "grey.900", children: [
      "Edit ",
      label
    ] }, void 0, true, {
      fileName: "app/components/ui/editDeleteDropdown.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ui/editDeleteDropdown.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { height: "0.0625rem", stroke: "1px" }, void 0, false, {
      fileName: "app/components/ui/editDeleteDropdown.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { onClick: onDelete, align: "center", gap: theme_default.spacing[200], cursor: "pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset4", color: "secondary.red", children: [
      "Delete ",
      label
    ] }, void 0, true, {
      fileName: "app/components/ui/editDeleteDropdown.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ui/editDeleteDropdown.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/editDeleteDropdown.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = EditDeleteDropdown;
var editDeleteDropdown_default = EditDeleteDropdown;
var _c;
$RefreshReg$(_c, "EditDeleteDropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  editDeleteDropdown_default
};
//# sourceMappingURL=/build/_shared/chunk-IRZLVB6B.js.map
