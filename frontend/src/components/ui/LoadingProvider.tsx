import React, { useState, useCallback } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { LoadingContext } from "./LoadingContext";

export function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const show = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const hide = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading: count > 0,
        show,
        hide,
      }}
    >
      {children}
      <LoadingSpinner visible={count > 0} />
    </LoadingContext.Provider>
  );
}