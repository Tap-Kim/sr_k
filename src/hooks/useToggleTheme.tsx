"use client";

import {
  isDocumentDarkTheme,
  toggleDarkTheme
} from "@/utils/theme";
import { useCallback } from "react";

export type ThemeString = "dark" | "light";

function useToggleTheme() {
  const toggle = useCallback((next?: ThemeString) => {
    const isNextDark = (next && next === "dark") ?? !isDocumentDarkTheme();

    toggleDarkTheme(isNextDark);
  }, []);

  return toggle;
}

export default useToggleTheme;
