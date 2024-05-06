"use client";
import React from "react";
import { projectContext } from "./context/projectContext";
import data from "../../db.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <projectContext.Provider value={data}>{children}</projectContext.Provider>
    </QueryClientProvider>
  );
};

export default provider;
