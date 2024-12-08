import {
  d2 as d,
  w2 as w
} from "/build/_shared/chunk-5PNKOZEI.js";
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
var import_react2 = __toESM(require_react(), 1);

// app/components/ClientOnly.tsx
var import_react = __toESM(require_react(), 1);
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
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
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
  import.meta.hot.lastModified = "1733615785572.7014";
}
var Login = () => {
  _s2();
  const {
    user
  } = useAuth();
  const [passwordIsVisible, setPasswordIsVisible] = (0, import_react2.useState)(false);
  const [isSigningUp, setIsSigningUp] = (0, import_react2.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [email, setEmail] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [name, setName] = (0, import_react2.useState)("");
  const [errorMessage, setErrorMessage] = (0, import_react2.useState)("");
  const toast = useToast();
  const togglePasswordVisibility = () => {
    setPasswordIsVisible((prev) => !prev);
  };
  const toggleForm = () => setIsSigningUp((prev) => !prev);
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      lineNumber: 100,
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
      lineNumber: 114,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 110,
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
            lineNumber: 123,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { bg: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(32,31,36,1) 24%, rgba(32,31,36,0.7049413515406162) 57%, rgba(32,31,36,0.4360337885154062) 77%, rgba(0,212,255,0) 100%)", backdropFilter: "blur(0.4px)", width: "100%", borderRadius: "0.75rem", padding: theme_default.spacing[500], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", color: "white", align: "flex-start", gap: theme_default.spacing[300], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset1", children: "Keep track of your money and save for your future" }, void 0, false, {
              fileName: "app/components/auth/login.tsx",
              lineNumber: 126,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4", children: "Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily." }, void 0, false, {
              fileName: "app/components/auth/login.tsx",
              lineNumber: 130,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 125,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 124,
            columnNumber: 25
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 120,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 116,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { p: theme_default.spacing[400], direction: "column", justify: "center", align: "center", gap: theme_default.spacing[500], flex: "1 0 0", alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { maxW: "35rem", width: "100%", p: theme_default.spacing[400], direction: "column", align: "flex-start", alignSelf: "stretch", mx: "auto", gap: theme_default.spacing[400], bg: "white", borderRadius: theme_default.spacing[150], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { textStyle: "preset1", children: isSigningUp ? "Sign Up" : "Login" }, void 0, false, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 139,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { style: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: `${theme_default.spacing[400]}`
      }, onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "100%", direction: "column", gap: theme_default.spacing[200], children: [
          isSigningUp && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "name", type: "text", isRequired: true, label: "Name", onChange: (e) => setName(e.target.value) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 147,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "email", type: "email", isRequired: true, label: "Email", onChange: (e) => setEmail(e.target.value) }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 148,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "password", type: passwordIsVisible ? "text" : "password", isRequired: true, label: "Password", onChange: (e) => setPassword(e.target.value), icon: passwordIsVisible ? w : d, onIconClick: togglePasswordVisibility, helperText: isSigningUp ? "Passwords must be at least 8 characters" : "" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 149,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 146,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { width: "100%", height: "3.3125rem", type: "submit", variant: "primary", isLoading, children: isSigningUp ? "Create Account" : "Login" }, void 0, false, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 151,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", mx: "auto", gap: "0.5rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { gap: theme_default.spacing[100], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: isSigningUp ? "Already have an account?" : "Need to create an account?" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 157,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textStyle: "preset4bold", color: "grey.900", textDecoration: "underline", onClick: toggleForm, cursor: "pointer", children: isSigningUp ? "Login" : "Sign Up" }, void 0, false, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 160,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 156,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 155,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 140,
        columnNumber: 25
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { color: "red.500", children: errorMessage }, void 0, false, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 166,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 138,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 137,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/login.tsx",
    lineNumber: 103,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/auth/login.tsx",
    lineNumber: 102,
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
//# sourceMappingURL=/build/routes/login-3VRPNMO7.js.map
