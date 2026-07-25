import React, {
  useState,
  useCallback,
} from "react";

import LoadingSpinner from "./LoadingSpinner";
import { LoadingContext } from "./LoadingContext";

type Props = {
  children: React.ReactNode;
};

export default function LoadingProvider({
  children,
}: Props) {
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

      <LoadingSpinner
        visible={value.isLoading}
      />
    </LoadingContext.Provider>
  );
}