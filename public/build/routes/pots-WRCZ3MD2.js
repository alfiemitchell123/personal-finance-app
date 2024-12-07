import {
  editDeleteDropdown_default
} from "/build/_shared/chunk-IRZLVB6B.js";
import {
  usePots_default
} from "/build/_shared/chunk-HNLPZASZ.js";
import {
  addNewModal_default,
  themeMenuItems,
  useModal_default
} from "/build/_shared/chunk-76FYL7ER.js";
import {
  DotsThree_esm_default,
  dropdownMenu_default,
  mainContent_default,
  pageHeader_default,
  pageLoading_default
} from "/build/_shared/chunk-TGV7UNIE.js";
import {
  Timestamp,
  db,
  deleteDoc,
  doc,
  getDoc,
  inputField_default,
  updateDoc
} from "/build/_shared/chunk-UNK6ZALF.js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  SimpleGrid,
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
  Form
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

// app/components/pots/potTitle.tsx
var import_react5 = __toESM(require_react(), 1);

// app/components/pots/potModal.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/pots/potChartForModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potChartForModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potChartForModal.tsx"
  );
  import.meta.hot.lastModified = "1729949989159.6248";
}
var PotChartForModal = ({
  newAmount,
  percentage,
  targetAmt,
  savedAmtBarWidth,
  addOrWithdrawAmtBarWidth,
  barColor
}) => {
  const gap = theme_default.spacing[50];
  console.log("savedAmtBarWidth: ", savedAmtBarWidth);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: theme_default.spacing[200], direction: "column", align: "flex-start", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { justify: "space-between", align: "center", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: "New Amount" }, void 0, false, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { textStyle: "preset1", color: "grey.900", textAlign: "right", children: [
        "$",
        newAmount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potChartForModal.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", align: "flex-start", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { width: "100%", height: theme_default.spacing[100], align: "center", borderRadius: theme_default.spacing[50], bg: "beige.100", position: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { height: theme_default.spacing[100], width: `${savedAmtBarWidth}%`, bg: "grey.900", borderRadius: `${theme_default.spacing[50]} 0rem 0rem ${theme_default.spacing[50]}}`, position: "absolute", left: 0 }, void 0, false, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { height: theme_default.spacing[100], width: `${addOrWithdrawAmtBarWidth}%`, bg: barColor, borderRadius: `0rem ${theme_default.spacing[50]} ${theme_default.spacing[50]} 0rem`, position: "absolute", left: `calc(${savedAmtBarWidth}% + 0.125rem)` }, void 0, false, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potChartForModal.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pots/potChartForModal.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "flex-start", gap: theme_default.spacing[100], width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { flex: "1", textStyle: "preset5bold", color: barColor, children: [
        percentage,
        "%"
      ] }, void 0, true, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { flex: "1", textStyle: "preset5", color: "grey.500", textAlign: "right", children: [
        "Target of $",
        targetAmt
      ] }, void 0, true, {
        fileName: "app/components/pots/potChartForModal.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potChartForModal.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pots/potChartForModal.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c = PotChartForModal;
var potChartForModal_default = PotChartForModal;
var _c;
$RefreshReg$(_c, "PotChartForModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pots/potModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potModal.tsx"
  );
  import.meta.hot.lastModified = "1733603633787.7666";
}
var PotModal = ({
  isOpen,
  onClose,
  mode,
  potId,
  existingPot
}) => {
  _s();
  const [potName, setPotName] = (0, import_react2.useState)("");
  const [targetAmt, setTargetAmt] = (0, import_react2.useState)(0);
  const [potColor, setPotColor] = (0, import_react2.useState)("");
  const [totalSaved, setTotalSaved] = (0, import_react2.useState)(existingPot?.totalSaved || 0);
  const [withdrawAddAmt, setWithdrawAddAmt] = (0, import_react2.useState)("0");
  const [percentage, setPercentage] = (0, import_react2.useState)(0);
  const [savedAmtBarWidth, setSavedAmtBarWidth] = (0, import_react2.useState)(0);
  const [addOrWithdrawAmtBarWidth, setAddOrWithdrawAmtBarWidth] = (0, import_react2.useState)(0);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [errors, setErrors] = (0, import_react2.useState)({
    potName: "",
    targetAmt: ""
  });
  const [nameError, setNameError] = (0, import_react2.useState)(null);
  const {
    pots: existingPots,
    addPot
  } = usePots_default();
  const {
    user
  } = useAuth();
  const toast = useToast();
  const maxChars = 30;
  const usedColors = existingPots.map((pot) => pot.potColor);
  const usedNames = existingPots.map((pot) => pot.potName);
  const handleNameChange = (event) => {
    const name = event.target.value;
    const normalizedName = name.toLowerCase();
    if (usedNames.some((existingName) => existingName.toLowerCase() === normalizedName)) {
      setNameError("This name is already in use. Please choose a different one.");
    } else {
      setNameError(null);
    }
    setPotName(name);
  };
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      potName: "",
      targetAmt: ""
    };
    if (!potName || potName === "" || potName === "e.g. Rainy Days") {
      newErrors.potName = "Pot must have a name.";
      valid = false;
    }
    if (!targetAmt || targetAmt <= 0) {
      newErrors.targetAmt = "Target amount must be greater than 0.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  (0, import_react2.useEffect)(() => {
    if (mode === "edit" && existingPot) {
      setPotName(existingPot.potName || "");
      setTargetAmt(Number(existingPot.targetAmt) || 0);
      setPotColor(existingPot.potColor || "");
      console.log("Editing mode with data: ", existingPot);
    }
  }, [mode, existingPot]);
  const handleSavePot = async () => {
    if (!validateForm())
      return;
    if (nameError) {
      return;
    }
    const capitalizedPotName = potName.charAt(0).toUpperCase() + potName.slice(1).toLowerCase();
    try {
      if (mode === "addNew") {
        const newPot = {
          potName: capitalizedPotName,
          targetAmt: Number(targetAmt),
          potColor,
          totalSaved,
          createdAt: Timestamp.now()
        };
        await addPot(newPot);
        toast({
          title: "Pot added successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else if (mode === "edit" && potId) {
        if (user) {
          const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
          await updateDoc(potDocRef, {
            potName: capitalizedPotName,
            targetAmt: Number(targetAmt),
            potColor,
            totalSaved
          });
          toast({
            title: "Pot edited successfully.",
            status: "success",
            duration: 3e3,
            isClosable: true
          });
        } else {
          console.error("User is not authenticated.");
        }
      }
      setPotName("");
      setTargetAmt(0);
      setPotColor("");
      setTotalSaved(0);
      onClose();
    } catch (error) {
      console.log("Error adding pot: ", error);
    }
  };
  const handleDeletePot = async () => {
    console.log("handleDeletePot called, mode:", mode, "potId:", potId);
    if (mode === "delete" && potId) {
      if (user) {
        const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
        await deleteDoc(potDocRef);
        console.log("Pot deleted successfully");
        onClose();
        toast({
          title: "Pot deleted successfully.",
          status: "success",
          duration: 3e3,
          isClosable: true
        });
      } else {
        console.error("User is not authenticated.");
      }
    } else {
      console.error("Delete mode or potId is not valid");
    }
  };
  const handleAddMoneyToPot = async () => {
    if (mode === "addMoney" && potId) {
      if (user) {
        const amountToAdd = parseFloat(withdrawAddAmt);
        if (!isNaN(amountToAdd)) {
          const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
          const potDoc = await getDoc(potDocRef);
          if (amountToAdd >= 0 && potDoc.exists()) {
            const currentTotalSaved = potDoc.data().totalSaved;
            const targetAmt2 = potDoc.data().targetAmt;
            const newTotalSaved = currentTotalSaved + amountToAdd;
            await updateDoc(potDocRef, {
              totalSaved: newTotalSaved
            });
            setTotalSaved(newTotalSaved);
            onClose();
            if (newTotalSaved >= targetAmt2) {
              toast({
                title: "Congratulations! You've met your target.",
                description: `Your pot has reached or exceeded the target amount of $${targetAmt2}.`,
                status: "success",
                duration: 3e3,
                isClosable: true
              });
            }
          }
        }
      } else {
        console.error("User is not authenticated.");
      }
    }
  };
  const handleWithdrawFromPot = async () => {
    if (mode === "withdraw" && potId) {
      if (user) {
        const amountToAdd = parseFloat(withdrawAddAmt);
        if (!isNaN(amountToAdd)) {
          const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
          const potDoc = await getDoc(potDocRef);
          if (amountToAdd >= 0 && potDoc.exists()) {
            const currentTotalSaved = potDoc.data().totalSaved;
            if (currentTotalSaved - amountToAdd >= 0) {
              await updateDoc(potDocRef, {
                totalSaved: currentTotalSaved - amountToAdd
              });
              setTotalSaved(currentTotalSaved - amountToAdd);
              onClose();
            } else {
              toast({
                title: "Insufficient Funds",
                description: `You only have $${currentTotalSaved} available.`,
                status: "error",
                duration: 3e3,
                isClosable: true
              });
            }
          }
        } else {
          console.error("User is not authenticated.");
        }
      }
    }
  };
  const fetchTargetAmt = async () => {
    if (potId && user) {
      const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
      const potDoc = await getDoc(potDocRef);
      if (potDoc.exists()) {
        const potData = potDoc.data();
        setTargetAmt(potData.targetAmt);
      } else {
        console.error("Pot document does not exist.");
      }
    }
  };
  (0, import_react2.useEffect)(() => {
    fetchTargetAmt();
  }, [potId, user]);
  const calculateSavedAmtBarWidth = async () => {
    setIsLoading(true);
    try {
      if ((mode === "withdraw" || mode === "addMoney") && potId) {
        if (user) {
          const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
          const potDoc = await getDoc(potDocRef);
          if (potDoc.exists()) {
            const currentTotalSaved = potDoc.data().totalSaved;
            const currentTargetAmt = potDoc.data().targetAmt;
            if (currentTargetAmt && currentTotalSaved) {
              const barWidth = currentTotalSaved / currentTargetAmt * 100;
              setSavedAmtBarWidth(barWidth);
              return;
            }
          } else {
            console.error("Pot document does not exist.");
          }
        } else {
          console.error("User is not authenticated.");
        }
      }
    } catch (error) {
      console.error("Error calculating saved amount bar width:", error);
    } finally {
      setIsLoading(false);
    }
    setSavedAmtBarWidth(0);
  };
  (0, import_react2.useEffect)(() => {
    calculateSavedAmtBarWidth();
  }, [mode, user, potId]);
  const calculateAddOrWithdrawBarWidth = () => {
    const maxWidth = 100;
    const amount = Number(withdrawAddAmt);
    const target = Number(targetAmt);
    const widthPercentage = target > 0 ? amount / target * maxWidth : 0;
    const availableWidth = maxWidth - savedAmtBarWidth;
    const barWidth = Math.min(widthPercentage, availableWidth);
    setAddOrWithdrawAmtBarWidth(barWidth);
  };
  (0, import_react2.useEffect)(() => {
    calculateAddOrWithdrawBarWidth();
  }, [withdrawAddAmt, targetAmt]);
  const calculatePercentage = () => {
    const amount = Number(withdrawAddAmt);
    const existingAmt = existingPot?.totalSaved ?? 0;
    const target = Number(targetAmt);
    if (target > 0) {
      const total = existingAmt + amount;
      const percentage2 = total / target * 100;
      setPercentage(percentage2);
      return;
    }
    return 0;
  };
  (0, import_react2.useEffect)(() => {
    calculatePercentage();
  }, [withdrawAddAmt, targetAmt]);
  const handleAddWithdrawInputChange = (e) => {
    setWithdrawAddAmt(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(addNewModal_default, { isOpen, onClose, headerTitle: mode === "addNew" ? "Add New Pot" : mode === "edit" ? "Edit Pot" : mode === "delete" ? "Delete Pot" : mode === "withdraw" ? `Withdraw from \u2018${existingPot?.potName}\u2019` : mode === "addMoney" ? `Add to \u2018${existingPot?.potName}\u2019` : "", headerTag: mode === "addNew" ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases." : mode === "edit" ? "If your saving targets change, feel free to update your pots." : mode === "delete" ? "Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever." : mode === "withdraw" ? "Enter the amount to withdraw back into your checking account." : mode === "addMoney" ? "Enter amount to add to your savings." : "", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { width: "100%", align: "center", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(pageLoading_default, {}, void 0, false, {
    fileName: "app/components/pots/potModal.tsx",
    lineNumber: 351,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/pots/potModal.tsx",
    lineNumber: 350,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    (mode === "addNew" || mode === "edit") && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[200], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { isInvalid: !!errors.potName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { id: "potName", label: "Pot Name", type: "text", placeholder: "e.g. Rainy Days", helperText: nameError ? nameError : errors.potName ? errors.potName : `${maxChars - potName.length} characters left`, onChange: handleNameChange, value: potName || "", usedNames, isRequired: true, maxLength: 30 }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 356,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 355,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { isInvalid: !!errors.targetAmt, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { placeholder: "e.g. 2000", type: "number", isRequired: true, label: "Target", prefix: "$", onChange: (e) => setTargetAmt(parseFloat(e.target.value) || 0), value: targetAmt ? targetAmt.toString() : "", helperText: errors.targetAmt }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 359,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 358,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(dropdownMenu_default, { label: "Green", items: themeMenuItems, fieldTitle: "Theme", colorTag: theme_default.colors.secondary.green, usedColors, onChange: (item) => setPotColor(item.colorTag || ""), value: potColor }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 362,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 361,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potModal.tsx",
      lineNumber: 354,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/pots/potModal.tsx",
      lineNumber: 353,
      columnNumber: 64
    }, this),
    (mode === "withdraw" || mode === "addMoney") && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: theme_default.spacing[250], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(potChartForModal_default, { targetAmt: existingPot?.targetAmt, newAmount: withdrawAddAmt ? parseFloat(withdrawAddAmt) : 0, percentage: addOrWithdrawAmtBarWidth, barColor: mode === "withdraw" ? theme_default.colors.secondary.red : mode === "addMoney" ? theme_default.colors.secondary.green : "", savedAmtBarWidth, addOrWithdrawAmtBarWidth }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 368,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inputField_default, { label: mode === "withdraw" ? "Amount to Withdraw" : mode === "addMoney" ? "Amount to Add" : "", type: "number", prefix: "$", isRequired: true, onChange: handleAddWithdrawInputChange }, void 0, false, {
        fileName: "app/components/pots/potModal.tsx",
        lineNumber: 369,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potModal.tsx",
      lineNumber: 367,
      columnNumber: 70
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "primary", width: "100%", height: "100%", padding: theme_default.spacing[200], justifyContent: "center", alignItems: "center", gap: theme_default.spacing[200], flex: "1 0 0", borderRadius: theme_default.spacing[100], textStyle: "preset4bold", fontSize: " 0.875rem", onClick: () => {
      console.log("Button clicked, mode:", mode);
      if (mode === "addNew" || mode === "edit") {
        handleSavePot();
      } else if (mode === "delete") {
        handleDeletePot();
      } else if (mode === "withdraw") {
        handleWithdrawFromPot();
      } else if (mode === "addMoney") {
        handleAddMoneyToPot();
      }
    }, bg: mode === "addNew" || mode === "edit" || mode === "withdraw" || mode === "addMoney" ? "grey.900" : "secondary.red", children: mode === "addNew" ? "Add Pot" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : mode === "withdraw" ? "Confirm Withdrawal" : mode === "addMoney" ? "Confirm Addition" : "" }, void 0, false, {
      fileName: "app/components/pots/potModal.tsx",
      lineNumber: 372,
      columnNumber: 21
    }, this),
    mode === "delete" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: onClose, justifyContent: "center", alignItems: "center", gap: theme_default.spacing[150], variant: "tertiary", textStyle: "preset4", fontSize: "0.875rem", color: "grey.500", _hover: {
      color: "grey.900"
    }, children: "No, Go Back" }, void 0, false, {
      fileName: "app/components/pots/potModal.tsx",
      lineNumber: 387,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pots/potModal.tsx",
    lineNumber: 352,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/components/pots/potModal.tsx",
    lineNumber: 349,
    columnNumber: 10
  }, this);
};
_s(PotModal, "CxJ1QbzbgfEvsEiHh3dT8vyxMlA=", false, function() {
  return [usePots_default, useAuth, useToast];
});
_c2 = PotModal;
var potModal_default = PotModal;
var _c2;
$RefreshReg$(_c2, "PotModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pots/potTitle.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potTitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potTitle.tsx"
  );
  import.meta.hot.lastModified = "1729933483843.8936";
}
var PotTitle = ({
  fill,
  potName,
  onEdit,
  onDelete
}) => {
  _s2();
  const {
    isModalOpen,
    potModalMode,
    selectedItem,
    openEditPotModal,
    openDeletePotModal,
    closeModal
  } = useModal_default();
  const [dropdownIsOpen, setDropdownIsOpen] = (0, import_react5.useState)(false);
  const dropdownRef = (0, import_react5.useRef)(null);
  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownIsOpen(!dropdownIsOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownIsOpen(false);
    }
  };
  (0, import_react5.useEffect)(() => {
    if (dropdownIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownIsOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { justify: "space-between", align: "center", alignSelf: "stretch", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { width: "19.75rem", align: "center", gap: theme_default.spacing[200], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "8", cy: "8", r: "8", fill }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { textStyle: "preset2", color: "grey.900", children: potName }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potTitle.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { position: "relative", ref: dropdownRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DotsThree_esm_default, { onMouseDown: toggleDropdown, cursor: "pointer" }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      dropdownIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { width: "120px", position: "absolute", top: "100%", left: "auto", transform: "translateX(-100%)", zIndex: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(editDeleteDropdown_default, { label: "Pot", onEdit, onDelete }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 76,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potTitle.tsx",
        lineNumber: 75,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potTitle.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(potModal_default, { mode: potModalMode, isOpen: isModalOpen, onClose: closeModal }, void 0, false, {
      fileName: "app/components/pots/potTitle.tsx",
      lineNumber: 79,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pots/potTitle.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
};
_s2(PotTitle, "ANjfMxp0ruRh0Lf7Jk1fc2Iu2XU=", false, function() {
  return [useModal_default];
});
_c3 = PotTitle;
var potTitle_default = PotTitle;
var _c3;
$RefreshReg$(_c3, "PotTitle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pots/potChart.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potChart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potChart.tsx"
  );
  import.meta.hot.lastModified = "1728054963517.1917";
}
var PotChart = ({
  totalSaved,
  percentage,
  targetAmt,
  barColor,
  barAmt
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { gap: theme_default.spacing[200], align: "center", alignSelf: "stretch", direction: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { justify: "space-between", align: "center", alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: "center", gap: "0.6875rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset4", color: "grey.500", children: "Total Saved" }, void 0, false, {
        fileName: "app/components/pots/potChart.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/pots/potChart.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset1", color: "grey.900", children: [
        "$",
        totalSaved.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/pots/potChart.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potChart.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { direction: "column", align: "flex-start", gap: "0.8125rem", alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { height: theme_default.spacing[100], align: "flex-start", alignSelf: "stretch", borderRadius: theme_default.spacing[50], bg: "beige.100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Box,
          {
            width: barAmt,
            alignSelf: "stretch",
            borderRadius: theme_default.spacing[50],
            bg: barColor
          },
          void 0,
          false,
          {
            fileName: "app/components/pots/potChart.tsx",
            lineNumber: 41,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flex: "1 0 0", alignSelf: "stretch" }, void 0, false, {
          fileName: "app/components/pots/potChart.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pots/potChart.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: "flex-start", gap: theme_default.spacing[100], alignSelf: "stretch", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { flex: "1 0 0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset5bold", color: "grey.500", children: [
          percentage,
          "%"
        ] }, void 0, true, {
          fileName: "app/components/pots/potChart.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/pots/potChart.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { textStyle: "preset5", color: "grey.500", children: [
          "Target of $",
          targetAmt
        ] }, void 0, true, {
          fileName: "app/components/pots/potChart.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/pots/potChart.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pots/potChart.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potChart.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pots/potChart.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c4 = PotChart;
var potChart_default = PotChart;
var _c4;
$RefreshReg$(_c4, "PotChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pots/potButton.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potButton.tsx"
  );
  import.meta.hot.lastModified = "1731514058690.1157";
}
var PotButton = ({
  children,
  id,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "secondary", padding: theme_default.spacing[200], justifyContent: "center", alignContent: "center", gap: theme_default.spacing[200], flex: "1 0 0", borderRadius: theme_default.spacing[100], height: "100%", onClick: () => onClick(id), children }, void 0, false, {
    fileName: "app/components/pots/potButton.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c5 = PotButton;
var potButton_default = PotButton;
var _c5;
$RefreshReg$(_c5, "PotButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pots/potCard.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pots/potCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pots/potCard.tsx"
  );
  import.meta.hot.lastModified = "1731175550891.3428";
}
var PotCard = ({
  pot,
  onEdit,
  onDelete,
  onWithdraw,
  onAddMoney
}) => {
  const percentageSaved = pot.totalSaved / pot.targetAmt * 100;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { padding: theme_default.spacing[300], direction: "column", align: "flex-start", gap: theme_default.spacing[400], flex: "1 0 0", borderRadius: theme_default.spacing[150], bg: "white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(potTitle_default, { onEdit: () => onEdit(pot.id), onDelete: () => onDelete(pot.id), fill: pot.potColor, potName: pot.potName }, void 0, false, {
      fileName: "app/components/pots/potCard.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(potChart_default, { totalSaved: pot.totalSaved, percentage: percentageSaved.toFixed(1), targetAmt: pot.targetAmt, barColor: pot.potColor, barAmt: `${percentageSaved}%` }, void 0, false, {
      fileName: "app/components/pots/potCard.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Flex, { align: "flex-start", gap: theme_default.spacing[200], alignSelf: "stretch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(potButton_default, { id: pot.id, onClick: onAddMoney, children: "+ Add Money" }, void 0, false, {
        fileName: "app/components/pots/potCard.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(potButton_default, { id: pot.id, onClick: onWithdraw, children: "Withdraw" }, void 0, false, {
        fileName: "app/components/pots/potCard.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pots/potCard.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, pot.id, true, {
    fileName: "app/components/pots/potCard.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c6 = PotCard;
var potCard_default = PotCard;
var _c6;
$RefreshReg$(_c6, "PotCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/pots.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/pots.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/pots.tsx"
  );
  import.meta.hot.lastModified = "1733508671090.5793";
}
function PotsRoute() {
  _s3();
  const {
    pots,
    loading: potsLoading
  } = usePots_default();
  const {
    isModalOpen,
    potModalMode,
    selectedItem,
    openAddPotModal,
    openEditPotModal,
    openDeletePotModal,
    openWithdrawPotModal,
    openAddMoneyPotModal,
    closeModal
  } = useModal_default();
  const selectedPot = pots?.find((pot) => pot.id === selectedItem);
  const handleEdit = (id) => {
    console.log("Editing pot with id: ", id);
    openEditPotModal(id);
  };
  const handleDelete = (id) => {
    openDeletePotModal(id);
  };
  const handleWithdraw = (id) => {
    openWithdrawPotModal(id);
  };
  const handleAddMoney = (id) => {
    openAddMoneyPotModal(id);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(mainContent_default, { children: potsLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { height: "100vh", width: "100%", align: "center", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(pageLoading_default, {}, void 0, false, {
    fileName: "app/routes/pots.tsx",
    lineNumber: 64,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/pots.tsx",
    lineNumber: 63,
    columnNumber: 28
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(pageHeader_default, { openModal: openAddPotModal, maxCount: pots.length, maxCountLabel: "pots", children: "Pots" }, void 0, false, {
      fileName: "app/routes/pots.tsx",
      lineNumber: 66,
      columnNumber: 21
    }, this),
    isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(potModal_default, { mode: potModalMode, isOpen: isModalOpen, onClose: closeModal, potId: selectedPot?.id, existingPot: selectedPot }, void 0, false, {
      fileName: "app/routes/pots.tsx",
      lineNumber: 67,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flex, { maxW: "90rem", direction: "column", align: "center", gap: theme_default.spacing[300], alignSelf: "stretch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SimpleGrid, { width: "100%", columns: {
      lg: 2,
      sm: 1
    }, spacing: theme_default.spacing[300], children: pots.map((pot) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(potCard_default, { pot, onEdit: handleEdit, onDelete: handleDelete, onWithdraw: handleWithdraw, onAddMoney: handleAddMoney }, pot.id, false, {
      fileName: "app/routes/pots.tsx",
      lineNumber: 74,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/pots.tsx",
      lineNumber: 70,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/pots.tsx",
      lineNumber: 69,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pots.tsx",
    lineNumber: 65,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/routes/pots.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s3(PotsRoute, "OCPGsHCmknJIO681bkHkCibRKZs=", false, function() {
  return [usePots_default, useModal_default];
});
_c7 = PotsRoute;
var _c7;
$RefreshReg$(_c7, "PotsRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PotsRoute as default
};
//# sourceMappingURL=/build/routes/pots-WRCZ3MD2.js.map
