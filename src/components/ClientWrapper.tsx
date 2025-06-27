"use client";
import StoreProvider from "@/app/StoreProvider";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
