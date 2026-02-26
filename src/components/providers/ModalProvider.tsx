"use client";

import React, { useState, createContext, useContext } from "react";
import { FeatureModal } from "../../components/comingSoonFeatureGlobalModal"; // Adjust path to where you saved the modal

const ModalContext = createContext({
  openComingSoon: () => {},
});

export const useGlobalModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openComingSoon = () => setIsOpen(true);
  const closeComingSoon = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openComingSoon }}>
      {children}
      <FeatureModal isOpen={isOpen} onClose={closeComingSoon} />
    </ModalContext.Provider>
  );
}
