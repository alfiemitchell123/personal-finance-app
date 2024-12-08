import {
  E
} from "/build/_shared/chunk-NAY3M5MB.js";
import {
  db,
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doc,
  inputField_default,
  setDoc
} from "/build/_shared/chunk-AXQ3FDH7.js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  theme_default,
  useAuth,
  useToast
} from "/build/_shared/chunk-KMD4SM23.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Navigate
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

// app/components/auth/login.tsx
var import_react6 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/ssr/Eye.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/Eye.mjs
var import_react = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/Eye.mjs
var i = Object.defineProperty;
var p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var m = (r, e2, o2) => e2 in r ? i(r, e2, { enumerable: true, configurable: true, writable: true, value: o2 }) : r[e2] = o2;
var a = (r, e2) => {
  for (var o2 in e2 || (e2 = {}))
    c.call(e2, o2) && m(r, o2, e2[o2]);
  if (t2)
    for (var o2 of t2(e2))
      y.call(e2, o2) && m(r, o2, e2[o2]);
  return r;
};
var f = (r, e2) => p(r, s(e2));
var n = (0, import_react2.forwardRef)((r, e2) => /* @__PURE__ */ import_react2.default.createElement(E, f(a({ ref: e2 }, r), { weights: t })));
n.displayName = "Eye";

// node_modules/@phosphor-icons/react/dist/ssr/EyeSlash.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@phosphor-icons/react/dist/defs/EyeSlash.mjs
var import_react3 = __toESM(require_react(), 1);
var t3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C20.67,88.66,5.72,121.58,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212a131.34,131.34,0,0,0,51-10l20.09,22.1a12,12,0,0,0,17.76-16.14ZM128,188c-29.59,0-55.47-10.73-76.91-31.88A130.69,130.69,0,0,1,29.52,128c5.27-9.31,18.79-29.9,42-44.29l90.09,99.11A109.33,109.33,0,0,1,128,188Zm123-55.12c-.36.81-9,20-28,39.16a12,12,0,1,1-17-16.9A130.48,130.48,0,0,0,226.48,128a130.36,130.36,0,0,0-21.57-28.12C183.46,78.73,157.59,68,128,68c-3.35,0-6.7.14-10,.42a12,12,0,1,1-2-23.91c3.93-.34,8-.51,12-.51,36,0,68.63,13.67,94.49,39.52,19.35,19.35,28.11,38.8,28.48,39.61A12.08,12.08,0,0,1,251,132.88Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M96.68,57.87a4,4,0,0,1,2.08-6.6A130.13,130.13,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41a8,8,0,0,1,0,6.5c-.35.79-8.82,19.57-27.65,38.4q-4.28,4.26-8.79,8.07a4,4,0,0,1-5.55-.36ZM213.92,210.62a8,8,0,1,1-11.84,10.76L180,197.13A127.21,127.21,0,0,1,128,208c-34.88,0-66.57-13.26-91.66-38.34C17.51,150.83,9,132.05,8.69,131.26a8,8,0,0,1,0-6.5C9,124,17.51,105.18,36.34,86.35a135,135,0,0,1,25-19.78L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-65.49-48.25-52.69-58a40,40,0,0,0,52.69,58Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L64.44,67c-37.28,21.9-53.23,57-53.92,58.57a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206a124.91,124.91,0,0,0,52.57-11.25l23,25.29a6,6,0,0,0,8.88-8.08Zm48.62,71.32,45,49.52a34,34,0,0,1-45-49.52ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.57,134.57,0,0,1,22.69,128c4.29-8.2,20.1-35.18,50-51.91L92.89,98.3a46,46,0,0,0,61.35,67.48l17.81,19.6A113.47,113.47,0,0,1,128,194Zm6.4-99.4a6,6,0,0,1,2.25-11.79,46.17,46.17,0,0,1,37.15,40.87,6,6,0,0,1-5.42,6.53l-.56,0a6,6,0,0,1-6-5.45A34.1,34.1,0,0,0,134.4,94.6Zm111.08,35.85c-.41.92-10.37,23-32.86,43.12a6,6,0,1,1-8-8.94A134.07,134.07,0,0,0,233.31,128a134.67,134.67,0,0,0-23.86-32.07C186.78,73.42,159.38,62,128,62a120.19,120.19,0,0,0-19.69,1.6,6,6,0,1,1-2-11.83A131.12,131.12,0,0,1,128,50c43.38,0,73,20.54,90.24,37.76,18.58,18.58,26.9,37,27.24,37.81A6,6,0,0,1,245.48,130.45Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z" }))
  ]
]);

// node_modules/@phosphor-icons/react/dist/ssr/EyeSlash.mjs
var f2 = Object.defineProperty;
var i2 = Object.defineProperties;
var p2 = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty;
var S = Object.prototype.propertyIsEnumerable;
var t4 = (r, e2, a3) => e2 in r ? f2(r, e2, { enumerable: true, configurable: true, writable: true, value: a3 }) : r[e2] = a3;
var m2 = (r, e2) => {
  for (var a3 in e2 || (e2 = {}))
    l.call(e2, a3) && t4(r, a3, e2[a3]);
  if (o)
    for (var a3 of o(e2))
      S.call(e2, a3) && t4(r, a3, e2[a3]);
  return r;
};
var s2 = (r, e2) => i2(r, p2(e2));
var R2 = (0, import_react4.forwardRef)((r, e2) => /* @__PURE__ */ import_react4.default.createElement(E, s2(m2({ ref: e2 }, r), { weights: t3 })));
R2.displayName = "EyeSlash";

// app/components/ClientOnly.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ClientOnly.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ClientOnly.tsx"
  );
  import.meta.hot.lastModified = "1733508598748.201";
}
var ClientOnly = ({
  children
}) => {
  _s();
  const [isClient, setIsClient] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
    fileName: "app/components/ClientOnly.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(ClientOnly, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = ClientOnly;
var ClientOnly_default = ClientOnly;
var _c;
$RefreshReg$(_c, "ClientOnly");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/auth/login.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/auth/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/auth/login.tsx"
  );
  import.meta.hot.lastModified = "1733689926976.8694";
}
var Login = () => {
  _s2();
  const {
    user
  } = useAuth();
  const [passwordIsVisible, setPasswordIsVisible] = (0, import_react6.useState)(false);
  const [isSigningUp, setIsSigningUp] = (0, import_react6.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react6.useState)(false);
  const [email, setEmail] = (0, import_react6.useState)("");
  const [password, setPassword] = (0, import_react6.useState)("");
  const [name, setName] = (0, import_react6.useState)("");
  const [errorMessage, setErrorMessage] = (0, import_react6.useState)("");
  const toast = useToast();
  const togglePasswordVisibility = () => {
    setPasswordIsVisible((prev) => !prev);
  };
  const toggleForm = () => setIsSigningUp((prev) => !prev);
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    setIsLoading(true);
    if (!isSigningUp) {
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        toast({
          title: "Sign In Error",
          description: "Failed to sign in. Please check your credentials.",
          status: "error",
          duration: 5e3,
          isClosable: true
        });
        setErrorMessage("Failed to sign in");
      }
    } else {
      try {
        const userCredential = await doCreateUserWithEmailAndPassword(email, password);
        const user2 = userCredential.user;
        await setDoc(doc(db, "users", user2.uid), {
          displayName: name || "User"
        });
        console.log("Registration sucessful.");
        toast({
          title: "Registration Successful",
          description: "You have successfully registered.",
          status: "success",
          duration: 5e3,
          isClosable: true
        });
      } catch (error) {
        toast({
          title: "Registration Error",
          description: "Failed to register. Please try again.",
          status: "error",
          duration: 5e3,
          isClosable: true
        });
        setErrorMessage("Failed to register. Please try again.");
      }
    }
    setIsLoading(false);
  };
  if (user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigate, { to: "/", replace: true }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 101,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClientOnly_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: {
    lg: "90rem",
    sm: "auto"
  }, height: "100vh", align: "flex-start", bg: "beige.100", direction: {
    lg: "row",
    sm: "column"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { display: {
      lg: "none",
      sm: "flex"
    }, padding: theme_default.spacing[300], direction: "column", justify: "center", align: "center", gap: theme_default.spacing[500], alignSelf: "stretch", borderRadius: "0 0 0.5rem 0.5rem", bg: "grey.900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { src: "assets/logoFull.svg", alt: "Finance" }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 115,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 111,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { display: {
      lg: "flex",
      sm: "none"
    }, maxWidth: "37.5rem", padding: theme_default.spacing[250], align: "center", gap: "0.5rem", flex: "1 0 0", alignSelf: "stretch", position: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Flex,
      {
        bgImage: "url(assets/illustration-authentication.svg)",
        bgColor: "grey.900",
        bgPosition: "top center",
        bgRepeat: "no-repeat",
        borderRadius: "0.75rem",
        direction: "column",
        justify: "space-between",
        align: "flex-start",
        flex: "1 0 0",
        alignSelf: "stretch",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { src: "assets/logoFull.svg", alt: "Finance", padding: theme_default.spacing[500] }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 124,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { bg: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(32,31,36,1) 24%, rgba(32,31,36,0.7049413515406162) 57%, rgba(32,31,36,0.4360337885154062) 77%, rgba(0,212,255,0) 100%)", backdropFilter: "blur(0.4px)", width: "100%", borderRadius: "0.75rem", padding: theme_default.spacing[500], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", color: "white", align: "flex-start", gap: theme_default.spacing[300], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset1", children: "Keep track of your money and save for your future" }, void 0, false, {
              fileName: "app/components/auth/login.tsx",
              lineNumber: 127,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4", children: "Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily." }, void 0, false, {
              fileName: "app/components/auth/login.tsx",
              lineNumber: 131,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 126,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 125,
            columnNumber: 25
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 121,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { p: theme_default.spacing[400], direction: "column", justify: "center", align: "center", gap: theme_default.spacing[500], flex: "1 0 0", alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { maxW: "35rem", width: "100%", p: theme_default.spacing[400], direction: "column", align: "flex-start", alignSelf: "stretch", mx: "auto", gap: theme_default.spacing[400], bg: "white", borderRadius: theme_default.spacing[150], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { textStyle: "preset1", children: isSigningUp ? "Sign Up" : "Login" }, void 0, false, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 140,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { style: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: `${theme_default.spacing[400]}`
      }, onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "100%", direction: "column", gap: theme_default.spacing[200], children: [
          isSigningUp && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "name", type: "text", isRequired: true, label: "Name", onChange: (e2) => setName(e2.target.value) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 148,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "email", type: "email", isRequired: true, label: "Email", onChange: (e2) => setEmail(e2.target.value) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 149,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "password", type: passwordIsVisible ? "text" : "password", isRequired: true, label: "Password", onChange: (e2) => setPassword(e2.target.value), icon: passwordIsVisible ? n : R2, onIconClick: togglePasswordVisibility, helperText: isSigningUp ? "Passwords must be at least 8 characters" : "" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 150,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 147,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { width: "100%", height: "3.3125rem", type: "submit", variant: "primary", isLoading, children: isSigningUp ? "Create Account" : "Login" }, void 0, false, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 152,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", mx: "auto", gap: "0.5rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { gap: theme_default.spacing[100], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: isSigningUp ? "Already have an account?" : "Need to create an account?" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 158,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", textDecoration: "underline", onClick: toggleForm, cursor: "pointer", children: isSigningUp ? "Login" : "Sign Up" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 161,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 157,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 141,
        columnNumber: 25
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { color: "red.500", children: errorMessage }, void 0, false, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 167,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 139,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 138,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/login.tsx",
    lineNumber: 104,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/auth/login.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
};
_s2(Login, "cgjCuIY5OJYvNh47T/wENNwKl/o=", false, function() {
  return [useAuth, useToast];
});
_c2 = Login;
var login_default = Login;
var _c2;
$RefreshReg$(_c2, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/login.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1725720883563.4644";
}
function LoginRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(login_default, {}, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c3 = LoginRoute;
var _c3;
$RefreshReg$(_c3, "LoginRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginRoute as default
};
//# sourceMappingURL=/build/routes/login-2BO3OVSO.js.map
