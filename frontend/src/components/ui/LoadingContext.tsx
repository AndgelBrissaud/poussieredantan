import { createContext, useContext } from "react";

export type LoadingContextType = {
  isLoading: boolean;
  show: () => void;
  hide: () => void;
};

export const LoadingContext = createContext<LoadingContextType | null>(null);

export function useLoading() {
  const ctx = useContext(LoadingContext);

  if (!ctx) {
    throw new Error("useLoading must be used within LoadingProvider");
  }

  return ctx;
}