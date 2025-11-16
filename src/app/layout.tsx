import { Poppins } from "next/font/google";
import "./globals.css";
import MuiRegistry from "./MuiRegistry";
import ClientWrapper from "@/components/ClientWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Judy Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-sm lg:text-base antialiased`}>
        <MuiRegistry>
          <ClientWrapper>{children}</ClientWrapper>
        </MuiRegistry>

        <div className="text-fuchsia-50 bg-stone-950 p-5 text-center lg:text-left">
          ©{new Date().getFullYear()} Judy. All Rights Reserved
        </div>
      </body>
    </html>
  );
}
