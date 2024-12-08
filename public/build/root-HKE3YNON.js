import {
  E
} from "/build/_shared/chunk-NAY3M5MB.js";
import {
  AuthProvider,
  Box,
  ChakraProvider,
  ColorModeScript,
  Flex,
  Link,
  Text,
  theme_default,
  useAuth,
  useTheme
} from "/build/_shared/chunk-KMD4SM23.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate
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

// app/components/layout/sidebar/sidebarMenuItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/sidebar/sidebarMenuItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/sidebar/sidebarMenuItem.tsx"
  );
  import.meta.hot.lastModified = "1733508671084.8005";
}
var SidebarMenuItem = ({
  label,
  icon,
  to,
  isMinimized,
  onClick,
  activeState
}) => {
  _s();
  const theme = useTheme();
  const location = useLocation();
  const isActive = location.pathname === to;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick, href: to, display: "flex", flexDirection: {
    md: "column",
    lg: "row"
  }, width: isMinimized ? "5.5rem" : "100%", height: "3.5rem", p: {
    sm: `${theme.spacing[200]} ${theme.spacing[400]}`,
    // md: `${theme.spacing[100]} 0rem ${theme.spacing[150]} 0rem`,
    lg: `${theme.spacing[200]} ${theme.spacing[400]}`
  }, alignItems: "center", justifyContent: {
    md: "center",
    lg: "start"
  }, gap: {
    md: theme.spacing[50],
    lg: theme.spacing[200]
  }, alignSelf: "stretch", borderRadius: {
    sm: "none",
    md: "0.5rem 0.5rem 0rem 0rem",
    lg: isMinimized ? "none" : "0rem 0.75rem 0.75rem 0rem"
  }, color: isActive ? "grey.900" : "grey.300", boxShadow: {
    sm: isActive ? `inset 0 -${theme.spacing[50]} 0 0 #277C78` : "none",
    lg: isActive ? `inset ${theme.spacing[50]} 0 0 0 #277C78` : "none"
  }, bg: isActive ? "beige.100" : "grey.900", _hover: {
    textDecoration: "none",
    color: isActive ? "grey.900" : "grey.100",
    "& > span": {
      color: isActive ? "secondary.green" : "grey.100"
    }
  }, _active: {
    bg: activeState ? "beige.100" : "grey.900",
    boxShadow: {
      sm: "none",
      lg: activeState ? `inset ${theme.spacing[50]} 0 0 0 #277C78` : "none"
    },
    color: activeState ? "grey.900" : "grey.100"
  }, _focus: {
    bg: "grey.900",
    boxShadow: "none",
    color: "white"
  }, _focusVisible: {
    outline: "2px solid #277C78",
    // Customize outline color
    outlineOffset: "2px"
  }, children: [
    icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { as: "span", color: isActive ? "secondary.green" : "grey.300", mr: {
      sm: "none",
      lg: theme.spacing[200]
    }, children: icon }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebarMenuItem.tsx",
      lineNumber: 78,
      columnNumber: 22
    }, this),
    !isMinimized && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: {
      md: "preset5",
      lg: "preset3"
    }, display: {
      sm: "none",
      md: "block"
    }, fontWeight: 700, children: label }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebarMenuItem.tsx",
      lineNumber: 84,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/sidebar/sidebarMenuItem.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(SidebarMenuItem, "MktkgluFNueXdnZzPwsccmDqY1o=", false, function() {
  return [useTheme, useLocation];
});
_c = SidebarMenuItem;
var sidebarMenuItem_default = SidebarMenuItem;
var _c;
$RefreshReg$(_c, "SidebarMenuItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@phosphor-icons/react/dist/ssr/House.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/House.mjs
var import_react3 = __toESM(require_react(), 1);
var l = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/House.mjs
var f = Object.defineProperty;
var i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var R = Object.prototype.propertyIsEnumerable;
var m = (o5, e3, r) => e3 in o5 ? f(o5, e3, { enumerable: true, configurable: true, writable: true, value: r }) : o5[e3] = r;
var a2 = (o5, e3) => {
  for (var r in e3 || (e3 = {}))
    c.call(e3, r) && m(o5, r, e3[r]);
  if (t)
    for (var r of t(e3))
      R.call(e3, r) && m(o5, r, e3[r]);
  return o5;
};
var s = (o5, e3) => i(o5, p(e3));
var w = (0, import_react4.forwardRef)((o5, e3) => /* @__PURE__ */ import_react4.default.createElement(E, s(a2({ ref: e3 }, o5), { weights: l })));
w.displayName = "House";

// node_modules/@phosphor-icons/react/dist/ssr/ArrowsDownUp.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/ArrowsDownUp.mjs
var import_react5 = __toESM(require_react(), 1);
var l3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M120.49,167.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L68,179V48a12,12,0,0,1,24,0V179l11.51-11.52A12,12,0,0,1,120.49,167.51Zm96-96-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L164,77V208a12,12,0,0,0,24,0V77l11.51,11.52a12,12,0,0,0,17-17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M176,48V208H80V48Z", opacity: "0.2" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8,8,0,0,0,5.66-13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M116.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L74,193.51V48a6,6,0,0,1,12,0V193.51l21.76-21.75A6,6,0,0,1,116.24,171.76Zm96-96-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L170,62.49V208a6,6,0,0,0,12,0V62.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M114.83,173.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L76,198.34V48a4,4,0,0,1,8,0V198.34l25.17-25.17A4,4,0,0,1,114.83,173.17Zm96-96-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L172,57.66V208a4,4,0,0,0,8,0V57.66l25.17,25.17a4,4,0,1,0,5.66-5.66Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/ArrowsDownUp.mjs
var s2 = Object.defineProperty;
var w2 = Object.defineProperties;
var f2 = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var i2 = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var m2 = (o5, r, e3) => r in o5 ? s2(o5, r, { enumerable: true, configurable: true, writable: true, value: e3 }) : o5[r] = e3;
var a4 = (o5, r) => {
  for (var e3 in r || (r = {}))
    i2.call(r, e3) && m2(o5, e3, r[e3]);
  if (t2)
    for (var e3 of t2(r))
      n.call(r, e3) && m2(o5, e3, r[e3]);
  return o5;
};
var p2 = (o5, r) => w2(o5, f2(r));
var A = (0, import_react6.forwardRef)((o5, r) => /* @__PURE__ */ import_react6.default.createElement(E, p2(a4({ ref: r }, o5), { weights: l3 })));
A.displayName = "ArrowsDownUp";

// node_modules/@phosphor-icons/react/dist/ssr/ChartDonut.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/ChartDonut.mjs
var import_react7 = __toESM(require_react(), 1);
var t3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("path", { d: "M128,20a12,12,0,0,0-12,12V88a12,12,0,0,0,12,12,28,28,0,1,1-24.26,14A12,12,0,0,0,99.35,97.6l-48.5-28A12,12,0,0,0,34.46,74,108,108,0,1,0,128,20ZM50,96.81l28.2,16.28A52.08,52.08,0,0,0,76,128c0,.5,0,1,0,1.5l-31.43,8.42A83.21,83.21,0,0,1,44,128,84.35,84.35,0,0,1,50,96.81Zm.83,64.3,31.43-8.43A52.2,52.2,0,0,0,116,178.59v32.54A84.26,84.26,0,0,1,50.81,161.11Zm89.19,50V178.59A52,52,0,0,0,140,77.4V44.85a84,84,0,0,1,0,166.28Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(
      "path",
      {
        d: "M224,128a96,96,0,0,1-96,96V168a40,40,0,0,0,0-80V32A96,96,0,0,1,224,128Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react7.default.createElement("path", { d: "M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("path", { d: "M120,161.94v65.34a4,4,0,0,1-4.46,4,104.28,104.28,0,0,1-84-64.5,4,4,0,0,1,2.69-5.34L97.32,144.5a4,4,0,0,1,4.35,1.66,32.25,32.25,0,0,0,15.59,12A4,4,0,0,1,120,161.94ZM128.06,24A8,8,0,0,0,120,32V88a7.94,7.94,0,0,0,7.87,8,32,32,0,0,1,10.86,62.15,4,4,0,0,0-2.73,3.79v65.34a4,4,0,0,0,4.45,4A104,104,0,0,0,128.06,24Zm-32,101.49a32,32,0,0,1,4.15-13.42l0-.07a8,8,0,0,0-.57-8.87A8.36,8.36,0,0,0,97.18,101L48.85,73.06A8,8,0,0,0,37.92,76,104.12,104.12,0,0,0,25,142.68,4,4,0,0,0,30,146L93.22,129A3.94,3.94,0,0,0,96.1,125.49Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("path", { d: "M128,26a6,6,0,0,0-6,6V88a6,6,0,0,0,6,6,34,34,0,1,1-29.45,17,6,6,0,0,0-2.2-8.2l-48.5-28A6,6,0,0,0,39.65,77,102,102,0,1,0,128,26ZM47.21,88.29l38.29,22.1A46,46,0,0,0,82,128a47.64,47.64,0,0,0,.4,6L39.7,145.45a90.27,90.27,0,0,1,7.51-57.16ZM42.81,157l42.7-11.44a46.12,46.12,0,0,0,36.49,28v44.2A90.2,90.2,0,0,1,42.81,157ZM134,217.8V173.6a46,46,0,0,0,0-91.21V38.2a90,90,0,0,1,0,179.6Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("path", { d: "M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("path", { d: "M128,28a4,4,0,0,0-4,4V88a4,4,0,0,0,4,4,36,36,0,1,1-31.18,18,4,4,0,0,0-1.47-5.47l-48.5-28A4,4,0,0,0,41.39,78,100,100,0,1,0,128,28ZM46.38,85.5l41.67,24a43.86,43.86,0,0,0-3.4,25.93L38.18,147.93a92.19,92.19,0,0,1,8.2-62.43Zm-6.13,70.15L86.71,143.2A44.11,44.11,0,0,0,124,171.81v48.1A92.17,92.17,0,0,1,40.25,155.65ZM132,219.91v-48.1a44,44,0,0,0,0-87.63V36.09a92,92,0,0,1,0,183.82Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/ChartDonut.mjs
var i3 = Object.defineProperty;
var p3 = Object.defineProperties;
var s3 = Object.getOwnPropertyDescriptors;
var e2 = Object.getOwnPropertySymbols;
var n2 = Object.prototype.hasOwnProperty;
var c3 = Object.prototype.propertyIsEnumerable;
var a5 = (r, t7, o5) => t7 in r ? i3(r, t7, { enumerable: true, configurable: true, writable: true, value: o5 }) : r[t7] = o5;
var m3 = (r, t7) => {
  for (var o5 in t7 || (t7 = {}))
    n2.call(t7, o5) && a5(r, o5, t7[o5]);
  if (e2)
    for (var o5 of e2(t7))
      c3.call(t7, o5) && a5(r, o5, t7[o5]);
  return r;
};
var f3 = (r, t7) => p3(r, s3(t7));
var u = (0, import_react8.forwardRef)((r, t7) => /* @__PURE__ */ import_react8.default.createElement(E, f3(m3({ ref: t7 }, r), { weights: t3 })));
u.displayName = "ChartDonut";

// node_modules/@phosphor-icons/react/dist/ssr/Jar.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/Jar.mjs
var import_react9 = __toESM(require_react(), 1);
var V = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(
      "path",
      {
        d: "M208,88V200a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V88A32,32,0,0,1,80,56h96A32,32,0,0,1,208,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react9.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,48V32h16V48Zm48,0H152V32h16ZM104,32V48H88V32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM202,200a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V88A26,26,0,0,1,80,62h96a26,26,0,0,1,26,26Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM172,32V52H148V28h20A4,4,0,0,1,172,32ZM116,52V28h24V52ZM88,28h20V52H84V32A4,4,0,0,1,88,28ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/Jar.mjs
var i4 = Object.defineProperty;
var p4 = Object.defineProperties;
var s4 = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c4 = Object.prototype.hasOwnProperty;
var R4 = Object.prototype.propertyIsEnumerable;
var t4 = (e3, r, a13) => r in e3 ? i4(e3, r, { enumerable: true, configurable: true, writable: true, value: a13 }) : e3[r] = a13;
var m4 = (e3, r) => {
  for (var a13 in r || (r = {}))
    c4.call(r, a13) && t4(e3, a13, r[a13]);
  if (o)
    for (var a13 of o(r))
      R4.call(r, a13) && t4(e3, a13, r[a13]);
  return e3;
};
var f4 = (e3, r) => p4(e3, s4(r));
var J = (0, import_react10.forwardRef)((e3, r) => /* @__PURE__ */ import_react10.default.createElement(E, f4(m4({ ref: r }, e3), { weights: V })));
J.displayName = "Jar";

// node_modules/@phosphor-icons/react/dist/ssr/Receipt.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/Receipt.mjs
var import_react11 = __toESM(require_react(), 1);
var l5 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M68,100A12,12,0,0,1,80,88h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,100Zm12,52h96a12,12,0,0,0,0-24H80a12,12,0,0,0,0,24ZM236,56V208a12,12,0,0,1-17.37,10.73L192,205.42l-26.63,13.31a12,12,0,0,1-10.74,0L128,205.42l-26.63,13.31a12,12,0,0,1-10.74,0L64,205.42,37.37,218.73A12,12,0,0,1,20,208V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V188.58l14.63-7.31a12,12,0,0,1,10.74,0L96,194.58l26.63-13.31a12,12,0,0,1,10.74,0L160,194.58l26.63-13.31a12,12,0,0,1,10.74,0L212,188.58Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(
      "path",
      {
        d: "M224,56V208l-32-16-32,16-32-16L96,208,64,192,32,208V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react11.default.createElement("path", { d: "M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M182,104a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,104Zm-6,26H80a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm54-74V208a6,6,0,0,1-2.85,5.1,5.93,5.93,0,0,1-3.15.9,6,6,0,0,1-2.68-.63L192,198.71l-29.32,14.66a6,6,0,0,1-5.36,0L128,198.71,98.68,213.37a6,6,0,0,1-5.36,0L64,198.71,34.68,213.37A6,6,0,0,1,26,208V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V198.29l23.32-11.66a6,6,0,0,1,5.36,0L96,201.29l29.32-14.66a6,6,0,0,1,5.36,0L160,201.29l29.32-14.66a6,6,0,0,1,5.36,0L218,198.29Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M180,104a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,104Zm-4,28H80a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm52-76V208a4,4,0,0,1-4,4,4.05,4.05,0,0,1-1.79-.42L192,196.47l-30.21,15.11a4,4,0,0,1-3.58,0L128,196.47,97.79,211.58a4,4,0,0,1-3.58,0L64,196.47,33.79,211.58A4,4,0,0,1,28,208V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V201.53l26.21-13.11a4,4,0,0,1,3.58,0L96,203.53l30.21-15.11a4,4,0,0,1,3.58,0L160,203.53l30.21-15.11a4,4,0,0,1,3.58,0L220,201.53Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/Receipt.mjs
var p5 = Object.defineProperty;
var c5 = Object.defineProperties;
var f5 = Object.getOwnPropertyDescriptors;
var o2 = Object.getOwnPropertySymbols;
var s5 = Object.prototype.hasOwnProperty;
var R5 = Object.prototype.propertyIsEnumerable;
var m5 = (t7, e3, r) => e3 in t7 ? p5(t7, e3, { enumerable: true, configurable: true, writable: true, value: r }) : t7[e3] = r;
var a8 = (t7, e3) => {
  for (var r in e3 || (e3 = {}))
    s5.call(e3, r) && m5(t7, r, e3[r]);
  if (o2)
    for (var r of o2(e3))
      R5.call(e3, r) && m5(t7, r, e3[r]);
  return t7;
};
var i5 = (t7, e3) => c5(t7, f5(e3));
var S = (0, import_react12.forwardRef)((t7, e3) => /* @__PURE__ */ import_react12.default.createElement(E, i5(a8({ ref: e3 }, t7), { weights: l5 })));
S.displayName = "Receipt";

// node_modules/@phosphor-icons/react/dist/ssr/ArrowFatLineLeft.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/ArrowFatLineLeft.mjs
var import_react13 = __toESM(require_react(), 1);
var t5 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M176,68H132V32a12,12,0,0,0-20.49-8.49l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h44a12,12,0,0,0,12-12V80A12,12,0,0,0,176,68Zm-12,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h44Zm64-84v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M184,80v96H120v48L24,128l96-96V80Z", opacity: "0.2" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M192,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56A8,8,0,0,1,192,80Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M184,74H126V32a6,6,0,0,0-10.24-4.24l-96,96a6,6,0,0,0,0,8.48l96,96A6,6,0,0,0,126,224V182h58a6,6,0,0,0,6-6V80A6,6,0,0,0,184,74Zm-6,96H120a6,6,0,0,0-6,6v33.51L32.49,128,114,46.49V80a6,6,0,0,0,6,6h58Zm44-90v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M184,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h60a4,4,0,0,0,4-4V80A4,4,0,0,0,184,76Zm-4,96H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h60Zm40-92v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/ArrowFatLineLeft.mjs
var i6 = Object.defineProperty;
var p6 = Object.defineProperties;
var s6 = Object.getOwnPropertyDescriptors;
var o3 = Object.getOwnPropertySymbols;
var n3 = Object.prototype.hasOwnProperty;
var w3 = Object.prototype.propertyIsEnumerable;
var a10 = (r, e3, t7) => e3 in r ? i6(r, e3, { enumerable: true, configurable: true, writable: true, value: t7 }) : r[e3] = t7;
var m6 = (r, e3) => {
  for (var t7 in e3 || (e3 = {}))
    n3.call(e3, t7) && a10(r, t7, e3[t7]);
  if (o3)
    for (var t7 of o3(e3))
      w3.call(e3, t7) && a10(r, t7, e3[t7]);
  return r;
};
var f6 = (r, e3) => p6(r, s6(e3));
var l7 = (0, import_react14.forwardRef)((r, e3) => /* @__PURE__ */ import_react14.default.createElement(E, f6(m6({ ref: e3 }, r), { weights: t5 })));
l7.displayName = "ArrowFatLineLeft";

// node_modules/@phosphor-icons/react/dist/ssr/ArrowFatLineRight.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/ArrowFatLineRight.mjs
var import_react15 = __toESM(require_react(), 1);
var t6 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H80A12,12,0,0,0,68,80v96a12,12,0,0,0,12,12h44v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H92V92h44a12,12,0,0,0,12-12V61l67,67ZM52,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M136,224V176H72V80h64V32l96,96Z", opacity: "0.2" }), /* @__PURE__ */ import_react15.default.createElement("path", { d: "M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H80V88h56a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm189.66,42.34-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H72a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h58v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H78V86h58a6,6,0,0,0,6-6V46.49L223.51,128ZM46,80v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H80V88h56a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H72a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h60v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H76V84h60a4,4,0,0,0,4-4V41.66L226.34,128ZM44,80v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/ArrowFatLineRight.mjs
var f7 = Object.defineProperty;
var p7 = Object.defineProperties;
var s7 = Object.getOwnPropertyDescriptors;
var o4 = Object.getOwnPropertySymbols;
var R6 = Object.prototype.hasOwnProperty;
var n4 = Object.prototype.propertyIsEnumerable;
var a12 = (t7, r, e3) => r in t7 ? f7(t7, r, { enumerable: true, configurable: true, writable: true, value: e3 }) : t7[r] = e3;
var i7 = (t7, r) => {
  for (var e3 in r || (r = {}))
    R6.call(r, e3) && a12(t7, e3, r[e3]);
  if (o4)
    for (var e3 of o4(r))
      n4.call(r, e3) && a12(t7, e3, r[e3]);
  return t7;
};
var m7 = (t7, r) => p7(t7, s7(r));
var d4 = (0, import_react16.forwardRef)((t7, r) => /* @__PURE__ */ import_react16.default.createElement(E, m7(i7({ ref: r }, t7), { weights: t6 })));
d4.displayName = "ArrowFatLineRight";

// app/contexts/sidebarProvider.tsx
var import_react17 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/contexts/sidebarProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/contexts/sidebarProvider.tsx"
  );
  import.meta.hot.lastModified = "1733508671089.926";
}
var SidebarContext = (0, import_react17.createContext)(void 0);
var SidebarProvider = ({
  children
}) => {
  _s2();
  const [isMinimized, setIsMinimized] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    const savedState = localStorage.getItem("sidebarMinimized");
    if (savedState !== null) {
      setIsMinimized(JSON.parse(savedState));
    }
  }, []);
  const toggleSidebar = () => {
    setIsMinimized((prevState) => {
      const newState = !prevState;
      localStorage.setItem("sidebarMinimized", JSON.stringify(newState));
      return newState;
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SidebarContext.Provider, { value: {
    isMinimized,
    toggleSidebar
  }, children }, void 0, false, {
    fileName: "app/contexts/sidebarProvider.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s2(SidebarProvider, "CWG3svUgcyDd9YxNwRkFaUYEsgQ=");
_c2 = SidebarProvider;
var useSidebar = () => {
  _s22();
  const context = (0, import_react17.useContext)(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
_s22(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c2;
$RefreshReg$(_c2, "SidebarProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/sidebar/sidebar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/sidebar/sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/sidebar/sidebar.tsx"
  );
  import.meta.hot.lastModified = "1733690696025.3835";
}
var menuItems = [{
  label: "Overview",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(w, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this),
  to: "/"
}, {
  label: "Transactions",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(A, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this),
  to: "/transactions"
}, {
  label: "Budgets",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(u, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this),
  to: "/budgets"
}, {
  label: "Pots",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(J, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this),
  to: "/pots"
}, {
  label: "Recurring Bills",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(S, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this),
  to: "/bills"
}];
var Sidebar = ({
  isMinimized,
  toggleSidebar
}) => {
  _s3();
  const theme = useTheme();
  const sidebar = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { zIndex: 1, width: {
    sm: "full",
    lg: sidebar.isMinimized ? "5.5rem" : "18.75rem"
  }, as: "header", display: "flex", height: {
    sm: "3.5rem",
    md: "4.625rem",
    lg: "100vh"
  }, position: "fixed", bottom: {
    base: 0,
    sm: 0,
    md: 0,
    lg: "auto"
  }, left: {
    base: 0,
    sm: 0,
    md: 0,
    lg: "auto"
  }, pb: {
    md: "none",
    lg: theme.spacing[300]
  }, flexDirection: "column", alignItems: "flex-start", flexShrink: 0, gap: theme.spacing[300], bg: "grey.900", borderRadius: {
    sm: "0.5rem 0.5rem 0rem 0rem",
    lg: `0rem ${theme.spacing[200]} ${theme.spacing[200]} 0rem`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { display: {
      sm: "none",
      lg: "flex"
    }, direction: "column", justify: "center", align: sidebar.isMinimized ? "center" : "flex-start", gap: theme.spacing[100], alignSelf: "stretch", p: `${theme.spacing[500]} ${theme.spacing[400]}`, children: sidebar.isMinimized ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "assets/logoSmall.svg", alt: "Finance" }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 89,
      columnNumber: 40
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "assets/logoFull.svg", alt: "Finance" }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 89,
      columnNumber: 91
    }, this) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { as: "nav", width: {
      md: "100%",
      lg: sidebar.isMinimized ? "5.5rem" : "18.75rem"
    }, "max-height": "50rem", direction: {
      sm: "row",
      lg: "column"
    }, align: "flex-start", gap: theme.spacing[50], flex: "1 0 0", p: {
      md: `${theme.spacing[100]} ${theme.spacing[500]} 0rem ${theme.spacing[500]}`,
      lg: `0rem ${theme.spacing[300]} 0rem 0rem`
    }, children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(sidebarMenuItem_default, { label: item.label, icon: item.icon, to: item.to, isMinimized: sidebar.isMinimized, activeState: true }, item.label, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 101,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { display: {
      sm: "none",
      lg: "flex"
    }, height: "3.5rem", align: "center", gap: theme.spacing[200], shrink: "0", alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(sidebarMenuItem_default, { label: "Minimize Menu", icon: sidebar.isMinimized ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(d4, { weight: "fill", size: 24 }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 107,
      columnNumber: 86
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(l7, { weight: "fill", size: 24 }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 107,
      columnNumber: 134
    }, this), isMinimized: sidebar.isMinimized, onClick: sidebar.toggleSidebar, activeState: false }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 107,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
};
_s3(Sidebar, "a+dxycmPa/mREO+tpjm/+Q/0OpY=", false, function() {
  return [useTheme, useSidebar];
});
_c3 = Sidebar;
var sidebar_default = Sidebar;
var _c3;
$RefreshReg$(_c3, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/app/appLayout.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/app/appLayout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/app/appLayout.tsx"
  );
  import.meta.hot.lastModified = "1731424568178.9072";
}
var AppLayout = ({
  children
}) => {
  _s4();
  const location = useLocation();
  const noAppLayoutRoutes = ["/login", "/register"];
  const useAppLayout = !noAppLayoutRoutes.includes(location.pathname);
  const sidebar = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: useAppLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { display: "flex", bg: "beige.100", minHeight: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(sidebar_default, { isMinimized: sidebar.isMinimized, toggleSidebar: sidebar.toggleSidebar }, void 0, false, {
      fileName: "app/components/layout/app/appLayout.tsx",
      lineNumber: 37,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "100%", ml: {
      lg: sidebar.isMinimized ? "5.5rem" : "18.75rem",
      md: "0",
      sm: "0"
    }, mb: {
      lg: "0",
      md: "5rem",
      sm: "4rem"
    }, children }, void 0, false, {
      fileName: "app/components/layout/app/appLayout.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/app/appLayout.tsx",
    lineNumber: 36,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/layout/app/appLayout.tsx",
    lineNumber: 35,
    columnNumber: 29
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children }, void 0, false, {
    fileName: "app/components/layout/app/appLayout.tsx",
    lineNumber: 51,
    columnNumber: 23
  }, this) }, void 0, false, {
    fileName: "app/components/layout/app/appLayout.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s4(AppLayout, "zH/qzPSZuNeSppfgbsB5Es/nmX4=", false, function() {
  return [useLocation, useSidebar];
});
_c4 = AppLayout;
var appLayout_default = AppLayout;
var _c4;
$RefreshReg$(_c4, "AppLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/protected.tsx
var import_react22 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/protected.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/protected.tsx"
  );
  import.meta.hot.lastModified = "1733598300693.5066";
}
function Protected({
  children
}) {
  _s5();
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  (0, import_react22.useEffect)(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [loading, user, navigate]);
  if (loading) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children }, void 0, false, {
    fileName: "app/routes/protected.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s5(Protected, "GzX/7VFHH1GPgTzSUkHwXewcMzw=", false, function() {
  return [useAuth, useNavigate];
});
_c5 = Protected;
var _c5;
$RefreshReg$(_c5, "Protected");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1733675139638.6301";
}
var meta = () => {
  return [{
    charset: "utf-8"
  }, {
    title: "Finance"
  }, {
    viewport: "width=device-width,initial-scale=1"
  }];
};
var links = () => {
  return [{
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&display=swap"
  }];
};
function Layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ColorModeScript, { initialColorMode: theme_default.config.initialColorMode }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { as: "body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChakraProvider, { theme: theme_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SidebarProvider, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Protected, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(appLayout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c6 = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_c22 = App;
var _c6;
var _c22;
$RefreshReg$(_c6, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-HKE3YNON.js.map
