import React, { createContext, useContext, useState, useCallback } from "react";
import LoadingSpinner from "./LoadingSpinner";

type LoadingContextType = {
  isLoading: boolean;
  show: () => void;
  hide: () => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const show = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const hide = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  const value = {
    isLoading: count > 0,
    show,
    hide,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <LoadingSpinner visible={value.isLoading} />
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
}

export default LoadingProvider;
