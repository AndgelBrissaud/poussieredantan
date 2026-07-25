import { createContext } from "react";

export type LoadingContextType = {
  isLoading: boolean;
  show: () => void;
  hide: () => void;
};

export const LoadingContext =
  createContext<LoadingContextType | null>(null);