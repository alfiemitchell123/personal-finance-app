import {
  addDoc,
  collection,
  db,
  getDocs,
  onSnapshot
} from "/build/_shared/chunk-UNK6ZALF.js";
import {
  useAuth
} from "/build/_shared/chunk-KMD4SM23.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMB467GK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/usePots.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/usePots.ts"
  );
  import.meta.hot.lastModified = "1733603633571.334";
}
var usePotsData = () => {
  const { user } = useAuth();
  const [pots, setPots] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const fetchPots = async () => {
      if (user) {
        try {
          const potsRef = collection(db, `users/${user.uid}/pots`);
          const querySnapshot = await getDocs(potsRef);
          const potsData = [];
          querySnapshot.forEach((doc) => {
            potsData.push({ id: doc.id, ...doc.data() });
          });
          setPots(potsData);
        } catch {
          setError("Error fetching pots data");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchPots();
  }, [user]);
  (0, import_react.useEffect)(() => {
    if (!user)
      return;
    const potCollection = collection(db, `users/${user.uid}/pots`);
    const unsubscribe = onSnapshot(potCollection, (snapshot) => {
      const potsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      const sortedPots = potsData.sort((a, b) => {
        const dateA = a.createdAt.toMillis();
        const dateB = b.createdAt.toMillis();
        return dateA - dateB;
      });
      setPots(sortedPots);
    }, (error2) => {
      setError("Error fetching pots");
      console.log(error2);
    });
    return () => unsubscribe();
  }, [user]);
  const addPot = async (newPot) => {
    try {
      const potCollection = collection(db, `users/${user?.uid}/pots`);
      const docRef = await addDoc(potCollection, { ...newPot, userId: user?.uid });
      const addedPot = { id: docRef.id, ...newPot };
      setPots((prevPot) => [addedPot, ...prevPot]);
    } catch (err) {
      setError("Error adding pot");
      console.log(err);
    }
  };
  return { pots, loading, error, addPot };
};
var usePots_default = usePotsData;

export {
  usePots_default
};
//# sourceMappingURL=/build/_shared/chunk-HNLPZASZ.js.map
