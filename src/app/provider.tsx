"use client";
import React from "react";
import { projectContext } from "./context/projectContext";
import data from "../../db.json";

const provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <projectContext.Provider value={data}>{children}</projectContext.Provider>
  );
};

export default provider;
