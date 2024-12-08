import {
  db,
  doSignOut,
  doc,
  getDoc
} from "/build/_shared/chunk-AXQ3FDH7.js";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  theme_default,
  useAuth
} from "/build/_shared/chunk-KMD4SM23.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useLocation,
  useNavigate
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

// app/components/ui/pageLoading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/pageLoading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/pageLoading.tsx"
  );
  import.meta.hot.lastModified = "1729952913007.2476";
}
var PageLoading = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { height: "100%", align: "center", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { mr: 2 }, void 0, false, {
      fileName: "app/components/ui/pageLoading.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    "Loading..."
  ] }, void 0, true, {
    fileName: "app/components/ui/pageLoading.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ui/pageLoading.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = PageLoading;
var pageLoading_default = PageLoading;
var _c;
$RefreshReg$(_c, "PageLoading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/app/mainContent.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/app/mainContent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/app/mainContent.tsx"
  );
  import.meta.hot.lastModified = "1731014289787.2332";
}
var MainContent = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { as: "main", fontFamily: "sans-serif", width: "100%", p: {
    sm: `${theme_default.spacing[300]} ${theme_default.spacing[200]}`,
    md: `${theme_default.spacing[400]} ${theme_default.spacing[500]}`,
    lg: `${theme_default.spacing[400]} ${theme_default.spacing[500]}`
  }, direction: "column", align: "flex-start", gap: theme_default.spacing[400], children }, void 0, false, {
    fileName: "app/components/layout/app/mainContent.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = MainContent;
var mainContent_default = MainContent;
var _c2;
$RefreshReg$(_c2, "MainContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/phosphor-react/dist/icons/MagnifyingGlass.esm.js
var import_react5 = __toESM(require_react());

// node_modules/phosphor-react/dist/lib/index.esm.js
var import_react3 = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react3.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color, pathsByWeight13) {
  var path = pathsByWeight13.get(weight);
  if (!!path)
    return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var import_react4 = __toESM(require_react());

// node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ (0, import_react4.forwardRef)(function(props, ref) {
  var alt = props.alt, color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath25 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = (0, import_react4.useContext)(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return import_react4.default.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), !!alt && import_react4.default.createElement("title", null, alt), children, import_react4.default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath25(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// node_modules/phosphor-react/dist/icons/MagnifyingGlass.esm.js
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react5.default.createElement("line", {
    x1: "175.4",
    y1: "175.4",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    opacity: "0.2"
  }), import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("line", {
    x1: "175.4",
    y1: "175.4",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function() {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("path", {
    d: "M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.6,113.7A8,8,0,0,1,224,232a8.3,8.3,0,0,1-5.7-2.3l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.2,43.2A8,8,0,0,1,229.6,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react5.default.createElement("line", {
    x1: "175.4",
    y1: "175.4",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react5.default.createElement("line", {
    x1: "175.4",
    y1: "175.4",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "116",
    cy: "116",
    r: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react5.default.createElement("line", {
    x1: "175.4",
    y1: "175.4",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath = function renderPath2(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};
var MagnifyingGlass = /* @__PURE__ */ (0, import_react5.forwardRef)(function(props, ref) {
  return import_react5.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
MagnifyingGlass.displayName = "MagnifyingGlass";
var MagnifyingGlass_esm_default = MagnifyingGlass;

// node_modules/phosphor-react/dist/icons/Receipt.esm.js
var import_react6 = __toESM(require_react());
var pathsByWeight2 = /* @__PURE__ */ new Map();
pathsByWeight2.set("bold", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "76",
    y1: "100",
    x2: "180",
    y2: "100",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "140",
    x2: "180",
    y2: "140",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight2.set("duotone", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    opacity: "0.2"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "104",
    x2: "180",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "136",
    x2: "180",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight2.set("fill", function() {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("path", {
    d: "M216,40H40A16,16,0,0,0,24,56V208a7.9,7.9,0,0,0,3.8,6.8,8,8,0,0,0,7.8.4L64,200.9l28.4,14.3a8.3,8.3,0,0,0,7.2,0L128,200.9l28.4,14.3a8.5,8.5,0,0,0,7.2,0L192,200.9l28.4,14.3a8,8,0,0,0,7.8-.4A7.9,7.9,0,0,0,232,208V56A16,16,0,0,0,216,40ZM180,144H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Z"
  }));
});
pathsByWeight2.set("light", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "76",
    y1: "104",
    x2: "180",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "136",
    x2: "180",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight2.set("thin", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "76",
    y1: "104",
    x2: "180",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "136",
    x2: "180",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight2.set("regular", function(color) {
  return import_react6.default.createElement(import_react6.default.Fragment, null, import_react6.default.createElement("line", {
    x1: "76",
    y1: "104",
    x2: "180",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("line", {
    x1: "76",
    y1: "136",
    x2: "180",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react6.default.createElement("path", {
    d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath3 = function renderPath4(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight2);
};
var Receipt = /* @__PURE__ */ (0, import_react6.forwardRef)(function(props, ref) {
  return import_react6.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath3
  }));
});
Receipt.displayName = "Receipt";
var Receipt_esm_default = Receipt;

// node_modules/phosphor-react/dist/icons/SortAscending.esm.js
var import_react7 = __toESM(require_react());
var pathsByWeight3 = /* @__PURE__ */ new Map();
pathsByWeight3.set("bold", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("polyline", {
    points: "144 168 184 208 224 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("line", {
    x1: "184",
    y1: "112",
    x2: "184",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "64",
    x2: "184",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "192",
    x2: "104",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight3.set("duotone", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("polyline", {
    points: "144 168 184 208 224 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "184",
    y1: "112",
    x2: "184",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "128",
    x2: "120",
    y2: "128",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "64",
    x2: "184",
    y2: "64",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "192",
    x2: "104",
    y2: "192",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight3.set("fill", function() {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("path", {
    d: "M229.7,173.7l-40,40a8.2,8.2,0,0,1-11.4,0l-40-40a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,144,160h32V112a8,8,0,0,1,16,0v48h32a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,229.7,173.7ZM120,120H48a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight3.set("light", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("polyline", {
    points: "144 168 184 208 224 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("line", {
    x1: "184",
    y1: "112",
    x2: "184",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "64",
    x2: "184",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "192",
    x2: "104",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight3.set("thin", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("polyline", {
    points: "144 168 184 208 224 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("line", {
    x1: "184",
    y1: "112",
    x2: "184",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "64",
    x2: "184",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "192",
    x2: "104",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight3.set("regular", function(color) {
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement("polyline", {
    points: "144 168 184 208 224 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "184",
    y1: "112",
    x2: "184",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "128",
    x2: "120",
    y2: "128",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "64",
    x2: "184",
    y2: "64",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react7.default.createElement("line", {
    x1: "48",
    y1: "192",
    x2: "104",
    y2: "192",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath5 = function renderPath6(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight3);
};
var SortAscending = /* @__PURE__ */ (0, import_react7.forwardRef)(function(props, ref) {
  return import_react7.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath5
  }));
});
SortAscending.displayName = "SortAscending";
var SortAscending_esm_default = SortAscending;

// node_modules/phosphor-react/dist/icons/ArrowLeft.esm.js
var import_react8 = __toESM(require_react());
var pathsByWeight4 = /* @__PURE__ */ new Map();
pathsByWeight4.set("bold", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "216",
    y1: "128",
    x2: "40",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react8.default.createElement("polyline", {
    points: "112 56 40 128 112 200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight4.set("duotone", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "216",
    y1: "128",
    x2: "40",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("polyline", {
    points: "112 56 40 128 112 200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight4.set("fill", function() {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("path", {
    d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
  }));
});
pathsByWeight4.set("light", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "216",
    y1: "128",
    x2: "40",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react8.default.createElement("polyline", {
    points: "112 56 40 128 112 200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight4.set("thin", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "216",
    y1: "128",
    x2: "40",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react8.default.createElement("polyline", {
    points: "112 56 40 128 112 200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight4.set("regular", function(color) {
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement("line", {
    x1: "216",
    y1: "128",
    x2: "40",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react8.default.createElement("polyline", {
    points: "112 56 40 128 112 200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath7 = function renderPath8(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight4);
};
var ArrowLeft = /* @__PURE__ */ (0, import_react8.forwardRef)(function(props, ref) {
  return import_react8.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath7
  }));
});
ArrowLeft.displayName = "ArrowLeft";
var ArrowLeft_esm_default = ArrowLeft;

// node_modules/phosphor-react/dist/icons/CaretDown.esm.js
var import_react9 = __toESM(require_react());
var pathsByWeight5 = /* @__PURE__ */ new Map();
pathsByWeight5.set("bold", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight5.set("duotone", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("polygon", {
    points: "208 96 128 176 48 96 208 96",
    opacity: "0.2"
  }), import_react9.default.createElement("polygon", {
    points: "208 96 128 176 48 96 208 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight5.set("fill", function() {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("path", {
    d: "M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"
  }));
});
pathsByWeight5.set("light", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight5.set("thin", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight5.set("regular", function(color) {
  return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement("polyline", {
    points: "208 96 128 176 48 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath9 = function renderPath10(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight5);
};
var CaretDown = /* @__PURE__ */ (0, import_react9.forwardRef)(function(props, ref) {
  return import_react9.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath9
  }));
});
CaretDown.displayName = "CaretDown";
var CaretDown_esm_default = CaretDown;

// node_modules/phosphor-react/dist/icons/CaretUp.esm.js
var import_react10 = __toESM(require_react());
var pathsByWeight6 = /* @__PURE__ */ new Map();
pathsByWeight6.set("bold", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "48 160 128 80 208 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight6.set("duotone", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polygon", {
    points: "48 160 128 80 208 160 48 160",
    opacity: "0.2"
  }), import_react10.default.createElement("polygon", {
    points: "48 160 128 80 208 160 48 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight6.set("fill", function() {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("path", {
    d: "M213.7,154.3l-80-80a8.1,8.1,0,0,0-11.4,0l-80,80a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,48,168H208a8,8,0,0,0,7.4-4.9A8.4,8.4,0,0,0,213.7,154.3Z"
  }));
});
pathsByWeight6.set("light", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "48 160 128 80 208 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight6.set("thin", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "48 160 128 80 208 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight6.set("regular", function(color) {
  return import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("polyline", {
    points: "48 160 128 80 208 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath11 = function renderPath12(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight6);
};
var CaretUp = /* @__PURE__ */ (0, import_react10.forwardRef)(function(props, ref) {
  return import_react10.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath11
  }));
});
CaretUp.displayName = "CaretUp";
var CaretUp_esm_default = CaretUp;

// node_modules/phosphor-react/dist/icons/CheckCircle.esm.js
var import_react11 = __toESM(require_react());
var pathsByWeight7 = /* @__PURE__ */ new Map();
pathsByWeight7.set("bold", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight7.set("duotone", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), import_react11.default.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight7.set("fill", function() {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"
  }));
});
pathsByWeight7.set("light", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight7.set("thin", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight7.set("regular", function(color) {
  return import_react11.default.createElement(import_react11.default.Fragment, null, import_react11.default.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react11.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath13 = function renderPath14(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight7);
};
var CheckCircle = /* @__PURE__ */ (0, import_react11.forwardRef)(function(props, ref) {
  return import_react11.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath13
  }));
});
CheckCircle.displayName = "CheckCircle";
var CheckCircle_esm_default = CheckCircle;

// node_modules/phosphor-react/dist/icons/DotsThree.esm.js
var import_react12 = __toESM(require_react());
var pathsByWeight8 = /* @__PURE__ */ new Map();
pathsByWeight8.set("bold", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "16"
  }), import_react12.default.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "16"
  }), import_react12.default.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "16"
  }));
});
pathsByWeight8.set("duotone", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), import_react12.default.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "12"
  }), import_react12.default.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "12"
  }));
});
pathsByWeight8.set("fill", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("path", {
    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z"
  }));
});
pathsByWeight8.set("light", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "10"
  }), import_react12.default.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "10"
  }), import_react12.default.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "10"
  }));
});
pathsByWeight8.set("thin", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "8"
  }), import_react12.default.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "8"
  }), import_react12.default.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "8"
  }));
});
pathsByWeight8.set("regular", function() {
  return import_react12.default.createElement(import_react12.default.Fragment, null, import_react12.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), import_react12.default.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "12"
  }), import_react12.default.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "12"
  }));
});
var renderPath15 = function renderPath16(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight8);
};
var DotsThree = /* @__PURE__ */ (0, import_react12.forwardRef)(function(props, ref) {
  return import_react12.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath15
  }));
});
DotsThree.displayName = "DotsThree";
var DotsThree_esm_default = DotsThree;

// node_modules/phosphor-react/dist/icons/PencilSimple.esm.js
var import_react13 = __toESM(require_react());
var pathsByWeight9 = /* @__PURE__ */ new Map();
pathsByWeight9.set("bold", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight9.set("duotone", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",
    opacity: "0.2"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight9.set("fill", function() {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"
  }));
});
pathsByWeight9.set("light", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight9.set("thin", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight9.set("regular", function(color) {
  return import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement("path", {
    d: "M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react13.default.createElement("line", {
    x1: "136",
    y1: "64",
    x2: "192",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath17 = function renderPath18(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight9);
};
var PencilSimple = /* @__PURE__ */ (0, import_react13.forwardRef)(function(props, ref) {
  return import_react13.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath17
  }));
});
PencilSimple.displayName = "PencilSimple";
var PencilSimple_esm_default = PencilSimple;

// node_modules/phosphor-react/dist/icons/Trash.esm.js
var import_react14 = __toESM(require_react());
var pathsByWeight10 = /* @__PURE__ */ new Map();
pathsByWeight10.set("bold", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("line", {
    x1: "216",
    y1: "60",
    x2: "40",
    y2: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "104",
    y1: "104",
    x2: "104",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("line", {
    x1: "152",
    y1: "104",
    x2: "152",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("path", {
    d: "M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react14.default.createElement("path", {
    d: "M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight10.set("duotone", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
    opacity: "0.2"
  }), import_react14.default.createElement("line", {
    x1: "216",
    y1: "56",
    x2: "40",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "104",
    y1: "104",
    x2: "104",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "152",
    y1: "104",
    x2: "152",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("path", {
    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("path", {
    d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight10.set("fill", function() {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("path", {
    d: "M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"
  }));
});
pathsByWeight10.set("light", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("line", {
    x1: "216",
    y1: "56",
    x2: "40",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "104",
    y1: "104",
    x2: "104",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("line", {
    x1: "152",
    y1: "104",
    x2: "152",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("path", {
    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react14.default.createElement("path", {
    d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight10.set("thin", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("line", {
    x1: "216",
    y1: "56",
    x2: "40",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "104",
    y1: "104",
    x2: "104",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("line", {
    x1: "152",
    y1: "104",
    x2: "152",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("path", {
    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react14.default.createElement("path", {
    d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight10.set("regular", function(color) {
  return import_react14.default.createElement(import_react14.default.Fragment, null, import_react14.default.createElement("line", {
    x1: "216",
    y1: "56",
    x2: "40",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "104",
    y1: "104",
    x2: "104",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("line", {
    x1: "152",
    y1: "104",
    x2: "152",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("path", {
    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react14.default.createElement("path", {
    d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath19 = function renderPath20(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight10);
};
var Trash = /* @__PURE__ */ (0, import_react14.forwardRef)(function(props, ref) {
  return import_react14.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath19
  }));
});
Trash.displayName = "Trash";
var Trash_esm_default = Trash;

// node_modules/phosphor-react/dist/icons/WarningCircle.esm.js
var import_react15 = __toESM(require_react());
var pathsByWeight11 = /* @__PURE__ */ new Map();
pathsByWeight11.set("bold", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "132",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "16"
  }));
});
pathsByWeight11.set("duotone", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
pathsByWeight11.set("fill", function() {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
  }));
});
pathsByWeight11.set("light", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "10"
  }));
});
pathsByWeight11.set("thin", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "8"
  }));
});
pathsByWeight11.set("regular", function(color) {
  return import_react15.default.createElement(import_react15.default.Fragment, null, import_react15.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react15.default.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react15.default.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
var renderPath21 = function renderPath22(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight11);
};
var WarningCircle = /* @__PURE__ */ (0, import_react15.forwardRef)(function(props, ref) {
  return import_react15.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath21
  }));
});
WarningCircle.displayName = "WarningCircle";
var WarningCircle_esm_default = WarningCircle;

// node_modules/phosphor-react/dist/icons/XCircle.esm.js
var import_react16 = __toESM(require_react());
var pathsByWeight12 = /* @__PURE__ */ new Map();
pathsByWeight12.set("bold", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "96",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "160",
    x2: "96",
    y2: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight12.set("duotone", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "96",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "160",
    x2: "96",
    y2: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight12.set("fill", function() {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"
  }));
});
pathsByWeight12.set("light", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "96",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "160",
    x2: "96",
    y2: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight12.set("thin", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "96",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "160",
    x2: "96",
    y2: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight12.set("regular", function(color) {
  return import_react16.default.createElement(import_react16.default.Fragment, null, import_react16.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "96",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), import_react16.default.createElement("line", {
    x1: "160",
    y1: "160",
    x2: "96",
    y2: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath23 = function renderPath24(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight12);
};
var XCircle = /* @__PURE__ */ (0, import_react16.forwardRef)(function(props, ref) {
  return import_react16.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath23
  }));
});
XCircle.displayName = "XCircle";
var XCircle_esm_default = XCircle;

// app/hooks/useUserData.ts
var import_react17 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useUserData.ts"
  );
  import.meta.hot.lastModified = "1733615785560.7046";
}
var useUserData = () => {
  const { user } = useAuth();
  const [userData, setUserData] = (0, import_react17.useState)(null);
  const [loading, setLoading] = (0, import_react17.useState)(true);
  const [error, setError] = (0, import_react17.useState)(null);
  (0, import_react17.useEffect)(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserData(data);
          } else {
            setError("No user data available");
          }
        } catch {
          setError("Error fetching user data");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUserData();
  }, [user]);
  return { userData, loading, error };
};
var useUserData_default = useUserData;

// app/components/ui/addNewButton.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/addNewButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/addNewButton.tsx"
  );
  import.meta.hot.lastModified = "1733508671088.0823";
}
var AddNewButton = ({
  btnTag,
  onClick,
  maxCount = 0,
  maxCountLabel
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { label: maxCount >= 8 ? `Remove existing ${maxCountLabel} to add more.` : "", bg: "grey.500", hasArrow: true, placement: "left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { alignItems: "center", gap: theme_default.spacing[300], variant: "primary", textStyle: "preset4bold", padding: theme_default.spacing[200], height: "100%", onClick, isDisabled: maxCount >= 8, _hover: {
    bg: maxCount < 8 ? "grey.500" : "grey.900"
  }, tabIndex: 0, children: maxCount < 8 ? `+ Add New ${btnTag}` : "Max Limit Reached" }, void 0, false, {
    fileName: "app/components/ui/addNewButton.tsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ui/addNewButton.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c3 = AddNewButton;
var addNewButton_default = AddNewButton;
var _c3;
$RefreshReg$(_c3, "AddNewButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/app/pageHeader.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/app/pageHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/app/pageHeader.tsx"
  );
  import.meta.hot.lastModified = "1733508671084.1794";
}
var PageHeader = ({
  children,
  openModal = () => {
  },
  maxCount,
  maxCountLabel
}) => {
  _s();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    loading
  } = useUserData_default();
  const cameFromLink = location.state?.fromLink;
  const formatPageTitle = (path) => {
    const trimmedPath = path.replace("/", "");
    const capitalizedPath = trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
    return capitalizedPath.endsWith("s") ? capitalizedPath.slice(0, -1) : capitalizedPath;
  };
  const pageTitle = formatPageTitle(location.pathname);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { width: "100%", justify: "space-between", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: "center", gap: cameFromLink ? theme_default.spacing[150] : "none", children: [
      cameFromLink && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "none", color: "grey.500", onClick: () => navigate(-1), _hover: {
        color: "grey.900"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ArrowLeft_esm_default, {}, void 0, false, {
        fileName: "app/components/layout/app/pageHeader.tsx",
        lineNumber: 57,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/layout/app/pageHeader.tsx",
        lineNumber: 54,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { as: "h1", textStyle: "preset1", color: "grey.900", children }, void 0, false, {
        fileName: "app/components/layout/app/pageHeader.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/app/pageHeader.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this),
    ["/transactions", "/budgets", "/pots"].includes(location.pathname) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(addNewButton_default, { btnTag: pageTitle, onClick: () => openModal(), maxCount, maxCountLabel }, void 0, false, {
      fileName: "app/components/layout/app/pageHeader.tsx",
      lineNumber: 64,
      columnNumber: 88
    }, this),
    location.pathname === "/" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: () => doSignOut().then(() => navigate("/login")), isLoading: loading, textStyle: "preset3", color: "white", bg: "grey.900", _hover: {
      bg: "grey.500"
    }, tabIndex: 0, children: "Logout" }, void 0, false, {
      fileName: "app/components/layout/app/pageHeader.tsx",
      lineNumber: 66,
      columnNumber: 47
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/app/pageHeader.tsx",
    lineNumber: 52,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/layout/app/pageHeader.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
};
_s(PageHeader, "/GOwgpO+KXq31VqCXkMnDA7PClM=", false, function() {
  return [useLocation, useNavigate, useUserData_default];
});
_c4 = PageHeader;
var pageHeader_default = PageHeader;
var _c4;
$RefreshReg$(_c4, "PageHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/dropdownMenu.tsx
var import_react21 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/dropdownMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/dropdownMenu.tsx"
  );
  import.meta.hot.lastModified = "1733508671088.663";
}
var DropdownMenu = ({
  label,
  items,
  colorTag,
  fieldTitle,
  usedColors = [],
  usedCategories = [],
  value,
  onChange
}) => {
  _s2();
  const [activeItem, setActiveItem] = (0, import_react21.useState)(label);
  const [activeColorTag, setActiveColorTag] = (0, import_react21.useState)(colorTag);
  (0, import_react21.useEffect)(() => {
    setActiveItem(label);
    setActiveColorTag(colorTag);
  }, [label, colorTag]);
  (0, import_react21.useEffect)(() => {
    if (value) {
      const selectedItem = items.find((item) => item.colorTag === value || item.itemLabel === value);
      if (selectedItem) {
        setActiveItem(selectedItem.itemLabel);
        setActiveColorTag(selectedItem.colorTag);
      }
    }
  }, [value, items]);
  const handleItemClick = (item) => {
    if (onChange) {
      onChange(item);
    }
    setActiveItem(item.itemLabel);
    setActiveColorTag(item.colorTag);
    item.onClick?.();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { direction: "column", width: "100%", gap: fieldTitle ? "0.5rem" : "0rem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { textStyle: "preset5bold", color: "grey.500", children: fieldTitle }, void 0, false, {
      fileName: "app/components/ui/dropdownMenu.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Menu, { children: ({
      isOpen
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MenuButton, { width: "100%", as: Button, bg: "white", borderRadius: theme_default.spacing[100], border: "1px solid", borderColor: "beige.500", rightIcon: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CaretUp_esm_default, { weight: "fill" }, void 0, false, {
        fileName: "app/components/ui/dropdownMenu.tsx",
        lineNumber: 67,
        columnNumber: 170
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CaretDown_esm_default, { weight: "fill" }, void 0, false, {
        fileName: "app/components/ui/dropdownMenu.tsx",
        lineNumber: 67,
        columnNumber: 198
      }, this), _hover: {
        bg: "grey.100"
      }, _active: {
        bg: "grey.100"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { align: "center", gap: theme_default.spacing[150], children: [
        activeColorTag && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { width: "16", height: "16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("circle", { cx: "8", cy: "8", r: "8", fill: activeColorTag }, void 0, false, {
          fileName: "app/components/ui/dropdownMenu.tsx",
          lineNumber: 74,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/components/ui/dropdownMenu.tsx",
          lineNumber: 73,
          columnNumber: 52
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { textStyle: "preset4", color: "grey.900", fontWeight: "normal", children: activeItem }, void 0, false, {
          fileName: "app/components/ui/dropdownMenu.tsx",
          lineNumber: 76,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/dropdownMenu.tsx",
        lineNumber: 72,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/ui/dropdownMenu.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MenuList, { width: "100%", maxW: "31rem", maxH: "18.75rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: theme_default.spacing[150], padding: `${theme_default.spacing[150]} ${theme_default.spacing[250]}`, children: items.map((item, index) => {
        const isCategoryUsed = usedCategories.includes(item.itemLabel);
        const isColorUsed = usedColors.includes(item.colorTag || "");
        const isUsed = isColorUsed || isCategoryUsed;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MenuItem, { onClick: () => !isUsed && handleItemClick(item), isDisabled: isUsed, textStyle: activeItem === item.itemLabel ? "preset4bold" : "preset4", pb: theme_default.spacing[150], _hover: {
            bg: "white",
            textStyle: isUsed ? "preset4" : "preset4bold",
            cursor: isUsed ? "not-allowed" : "pointer"
          }, _focus: {
            bg: isUsed ? "grey.100" : "white"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { align: "center", justify: "space-between", width: "100%", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { align: "center", children: [
              item.colorTag && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", viewBox: "0 0 16 17", fill: "none", style: {
                marginRight: theme_default.spacing[100]
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("circle", { cx: "8", cy: "8.5", r: "8", fill: item.colorTag }, void 0, false, {
                fileName: "app/components/ui/dropdownMenu.tsx",
                lineNumber: 99,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/components/ui/dropdownMenu.tsx",
                lineNumber: 96,
                columnNumber: 71
              }, this),
              item.itemLabel
            ] }, void 0, true, {
              fileName: "app/components/ui/dropdownMenu.tsx",
              lineNumber: 95,
              columnNumber: 49
            }, this),
            isUsed && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", textAlign: "right", children: "Already used" }, void 0, false, {
              fileName: "app/components/ui/dropdownMenu.tsx",
              lineNumber: 103,
              columnNumber: 60
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ui/dropdownMenu.tsx",
            lineNumber: 94,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/components/ui/dropdownMenu.tsx",
            lineNumber: 87,
            columnNumber: 41
          }, this),
          index < items.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MenuDivider, {}, index, false, {
            fileName: "app/components/ui/dropdownMenu.tsx",
            lineNumber: 106,
            columnNumber: 70
          }, this)
        ] }, index, true, {
          fileName: "app/components/ui/dropdownMenu.tsx",
          lineNumber: 86,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/ui/dropdownMenu.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/dropdownMenu.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/dropdownMenu.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/dropdownMenu.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
};
_s2(DropdownMenu, "x1Iy1jA4OuixH/1s8pv3T/KqK68=");
_c5 = DropdownMenu;
var dropdownMenu_default = DropdownMenu;
var _c5;
$RefreshReg$(_c5, "DropdownMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  pageLoading_default,
  mainContent_default,
  CheckCircle_esm_default,
  DotsThree_esm_default,
  MagnifyingGlass_esm_default,
  PencilSimple_esm_default,
  Receipt_esm_default,
  SortAscending_esm_default,
  Trash_esm_default,
  WarningCircle_esm_default,
  XCircle_esm_default,
  useUserData_default,
  pageHeader_default,
  dropdownMenu_default
};
//# sourceMappingURL=/build/_shared/chunk-STRJBWB3.js.map
