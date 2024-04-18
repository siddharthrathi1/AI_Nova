"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("eca2f156-6a30-480e-8b36-70763f31c502");
  }, []);

  return null;
};
