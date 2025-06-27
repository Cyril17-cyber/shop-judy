// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Erubaba",
//   description:
//     "Erubaba the biggest Online Shopping platform yet - Shop Online for All Products : Smartphones, Appliances, Clothing... ✓ Top Brands :  Samsung, Xiaomi, Adidas... ✓ Best prices in Nigeria ✓ Order now and enjoy pay on delivery ! ",
// };

// export default function RootLayout({
//   children,
//   nav,
// }: Readonly<{
//   children: React.ReactNode;
//   nav?: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} antialiased`}>
//         {nav}
//         {children}
//       </body>
//     </html>
//   );
// }

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
        <title>Erubaba Shop</title>
      </head>
      <body className={`${poppins.className} text-sm lg:text-base antialiased`}>
        <ClientWrapper>
          <CssBaseline />
          <NavBar toggleDrawer={toggleDrawer} />
          <TemporaryDrawer open={openMenu} toggleDrawer={toggleDrawer} />
          {children}
          <FooterSection />

          <div className="text-white bg-stone-950 p-5 text-center lg:text-left">
            ©{currentYear} Erubaba. All Rights Reserved
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
