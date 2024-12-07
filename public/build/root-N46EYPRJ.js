import {
  A,
  D,
  H,
  I2 as I,
  J,
  d,
  w
} from "/build/_shared/chunk-5PNKOZEI.js";
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

// app/contexts/sidebarProvider.tsx
var import_react3 = __toESM(require_react(), 1);
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
var SidebarContext = (0, import_react3.createContext)(void 0);
var SidebarProvider = ({
  children
}) => {
  _s2();
  const [isMinimized, setIsMinimized] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
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
  const context = (0, import_react3.useContext)(SidebarContext);
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
  import.meta.hot.lastModified = "1731514058689.4036";
}
var menuItems = [{
  label: "Overview",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(H, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this),
  to: "/"
}, {
  label: "Transactions",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(D, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this),
  to: "/transactions"
}, {
  label: "Budgets",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(w, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this),
  to: "/budgets"
}, {
  label: "Pots",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(J, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this),
  to: "/pots"
}, {
  label: "Recurring Bills",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(I, { weight: "fill", size: 24 }, void 0, false, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 45,
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
      lineNumber: 83,
      columnNumber: 40
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "assets/logoFull.svg", alt: "Finance" }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 83,
      columnNumber: 91
    }, this) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 79,
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
      lineNumber: 95,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { display: {
      sm: "none",
      lg: "flex"
    }, height: "3.5rem", align: "center", gap: theme.spacing[200], shrink: "0", alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(sidebarMenuItem_default, { label: "Minimize Menu", icon: sidebar.isMinimized ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(d, { weight: "fill", size: 24 }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 101,
      columnNumber: 86
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(A, { weight: "fill", size: 24 }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 101,
      columnNumber: 134
    }, this), isMinimized: sidebar.isMinimized, onClick: sidebar.toggleSidebar, activeState: false }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 101,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/layout/sidebar/sidebar.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/sidebar/sidebar.tsx",
    lineNumber: 55,
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
var import_react9 = __toESM(require_react(), 1);
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
  (0, import_react9.useEffect)(() => {
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
  import.meta.hot.lastModified = "1733598268892.504";
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
  return null;
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
//# sourceMappingURL=/build/root-N46EYPRJ.js.map
