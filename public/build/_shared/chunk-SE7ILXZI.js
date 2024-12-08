import {
  addDoc,
  collection,
  db,
  getDocs,
  onSnapshot
} from "/build/_shared/chunk-AXQ3FDH7.js";
import {
  Box,
  Image,
  useAuth
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

// app/hooks/useTransactions.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useTransactions.ts"
  );
  import.meta.hot.lastModified = "1733615785528.1006";
}
var useTransactionData = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const fetchTransactions = async () => {
      if (user) {
        try {
          const transactionsRef = collection(db, `users/${user.uid}/transactions`);
          const querySnapshot = await getDocs(transactionsRef);
          const transactionsData = [];
          querySnapshot.forEach((doc) => {
            transactionsData.push({ id: doc.id, ...doc.data() });
          });
          setTransactions(transactionsData);
        } catch {
          setError("Error fetching transactions data");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchTransactions();
  }, [user]);
  (0, import_react.useEffect)(() => {
    if (!user)
      return;
    const transactionCollection = collection(db, `users/${user.uid}/transactions`);
    const unsubscribe = onSnapshot(transactionCollection, (snapshot) => {
      const transactionsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      const sortedTransactions = transactionsData.sort((a, b) => {
        const dateA = a.transactionDate.toMillis();
        const dateB = b.transactionDate.toMillis();
        return dateB - dateA;
      });
      setTransactions(sortedTransactions);
    }, (error2) => {
      setError("Error fetching budgets");
      console.log(error2);
    });
    return () => unsubscribe();
  }, [user]);
  const addTransaction = async (newTransaction) => {
    try {
      const transactionCollection = collection(db, `users/${user?.uid}/transactions`);
      const docRef = await addDoc(transactionCollection, { ...newTransaction, userId: user?.uid });
      const addedTransaction = { id: docRef.id, ...newTransaction };
      setTransactions((prevTransactions) => [addedTransaction, ...prevTransactions]);
    } catch (err) {
      setError("Error adding transaction");
      console.log(err);
    }
  };
  return { transactions, loading, error, addTransaction };
};
var useTransactions_default = useTransactionData;

// app/components/transactions/transactionImg.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/transactions/transactionImg.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/transactions/transactionImg.tsx"
  );
  import.meta.hot.lastModified = "1730110672945.124";
}
var storageBaseURL = "https://firebasestorage.googleapis.com/v0/b/personal-finance-app-f7b63.appspot.com/o/transactionCategoryImages%2F";
var formatCategoryToImageUrl = (category) => {
  const formattedCategory = category.replace(/\s+/g, "").toLowerCase() + ".jpg";
  return `${storageBaseURL}${formattedCategory}?alt=media`;
};
var TransactionImg = ({
  transaction
}) => {
  const imageUrl = transaction.transactionImg || formatCategoryToImageUrl(transaction.transactionCategory);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { src: imageUrl, alt: `${transaction.transactionCategory} Image`, boxSize: "2.5rem", objectFit: "cover", borderRadius: "full", fallbackSrc: "assets/urban-services-hub.jpg" }, void 0, false, {
    fileName: "app/components/transactions/transactionImg.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/transactions/transactionImg.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c = TransactionImg;
var transactionImg_default = TransactionImg;
var _c;
$RefreshReg$(_c, "TransactionImg");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  transactionImg_default,
  useTransactions_default
};
//# sourceMappingURL=/build/_shared/chunk-SE7ILXZI.js.map
