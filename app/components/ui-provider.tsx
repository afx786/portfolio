"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface SiteUIContextValue {
  resumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const SiteUIContext = createContext<SiteUIContextValue>({
  resumeOpen: false,
  openResume: () => {},
  closeResume: () => {},
});

export function SiteUIProvider({ children }: { children: ReactNode }) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  return (
    <SiteUIContext.Provider value={{ resumeOpen, openResume, closeResume }}>
      {children}
    </SiteUIContext.Provider>
  );
}

export function useSiteUI() {
  return useContext(SiteUIContext);
}