import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@phosphor-icons/react/dist/lib/SSRBase.mjs
var import_react = __toESM(require_react(), 1);
var R = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty;
var c = Object.prototype.propertyIsEnumerable;
var i = (e, r, t) => r in e ? R(e, r, { enumerable: true, configurable: true, writable: true, value: t }) : e[r] = t;
var m = (e, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && i(e, t, r[t]);
  if (l)
    for (var t of l(r))
      c.call(r, t) && i(e, t, r[t]);
  return e;
};
var w = (e, r) => {
  var t = {};
  for (var s in e)
    n.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]);
  if (e != null && l)
    for (var s of l(e))
      r.indexOf(s) < 0 && c.call(e, s) && (t[s] = e[s]);
  return t;
};
var d = (0, import_react.forwardRef)((e, r) => {
  const a = e, {
    alt: t,
    color: s = "currentColor",
    size: o = "1em",
    weight: f = "regular",
    mirrored: h = false,
    children: S,
    weights: p
  } = a, u = w(a, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    m({
      ref: r,
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: s,
      viewBox: "0 0 256 256",
      transform: h ? "scale(-1, 1)" : void 0
    }, u),
    !!t && /* @__PURE__ */ import_react.default.createElement("title", null, t),
    S,
    p.get(f)
  );
});
d.displayName = "SSRBase";
var E = d;

export {
  E
};
//# sourceMappingURL=/build/_shared/chunk-NAY3M5MB.js.map
