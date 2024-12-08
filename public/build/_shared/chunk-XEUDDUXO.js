import {
  useTransactions_default
} from "/build/_shared/chunk-SE7ILXZI.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/useBillsData.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useBillsData.ts"
  );
  import.meta.hot.lastModified = "1730132693111.4956";
}
var useBillsData = () => {
  const { transactions, loading } = useTransactions_default();
  const [billsData, setBillsData] = (0, import_react.useState)({ totalPaidAmount: 0, totalUpcoming: 0, totalDueSoon: 0, numberOfPaidBills: 0, numberOfUpcomingBills: 0, numberOfDueSoonBills: 0 });
  (0, import_react.useEffect)(() => {
    if (!transactions || transactions.length === 0)
      return;
    const billsPaid = transactions?.filter((transaction) => transaction.recurringBill && transaction.transactionDate.toDate().getTime() < (/* @__PURE__ */ new Date()).getTime()) || [];
    const numberOfPaidBills = billsPaid.length;
    const totalPaidAmount = billsPaid.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);
    const billsUpcoming = transactions?.filter((transaction) => {
      if (transaction.recurringBill) {
        const transactionDate = transaction.transactionDate.toDate().getTime();
        const now = (/* @__PURE__ */ new Date()).getTime();
        const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1e3;
        return transactionDate > now && transactionDate >= sevenDaysFromNow;
      }
      return false;
    }) || [];
    const numberOfUpcomingBills = billsUpcoming.length;
    const totalUpcoming = billsUpcoming.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);
    const billsDueSoon = transactions?.filter((transaction) => {
      if (transaction.recurringBill) {
        const transactionDate = transaction.transactionDate.toDate().getTime();
        const now = (/* @__PURE__ */ new Date()).getTime();
        const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1e3;
        return transactionDate > now && transactionDate <= sevenDaysFromNow;
      }
      return false;
    }) || [];
    const numberOfDueSoonBills = billsDueSoon.length;
    const totalDueSoon = billsDueSoon.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);
    setBillsData({ totalPaidAmount, totalUpcoming, totalDueSoon, numberOfPaidBills, numberOfUpcomingBills, numberOfDueSoonBills });
  }, [transactions]);
  return billsData;
};
var useBillsData_default = useBillsData;

export {
  useBillsData_default
};
//# sourceMappingURL=/build/_shared/chunk-XEUDDUXO.js.map
