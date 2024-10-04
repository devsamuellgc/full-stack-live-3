import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter((prev) => {
      if (prev - 1 < 0) return prev;
      return prev - 1;
    });
  }

  const initialValues = { increaseCounter, decreaseCounter, counter };

  return (
    <CounterContext.Provider value={initialValues}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounterContext() {
  const values = useContext(CounterContext);

  return values;
}

export { useCounterContext, CounterProvider };
