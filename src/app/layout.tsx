// app/layout.tsx
"use client";
import ClientWrapper from "@/components/ClientWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import { Poppins } from "next/font/google";
import { ReactNode, useState } from "react";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/Nav";
import TemporaryDrawer from "../components/TemporaryDrawer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const currentYear = new Date().getFullYear();

export default function RootLayout({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpenMenu(newOpen);
  };
  return (
    <html lang="en">
      <head>
        <title>Judy Shop</title>
      </head>
      <body className={`${poppins.className} text-sm lg:text-base antialiased`}>
        <ClientWrapper>
          <CssBaseline />
          <NavBar toggleDrawer={toggleDrawer} />
          <TemporaryDrawer open={openMenu} toggleDrawer={toggleDrawer} />
          {children}
          <FooterSection />

          <div className="text-fuchsia-50 bg-stone-950 p-5 text-center lg:text-left">
            ©{currentYear} Judy. All Rights Reserved
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
