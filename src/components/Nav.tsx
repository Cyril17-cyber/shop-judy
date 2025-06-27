"use client";
import logo from "@/app/public/logo.png";
import { Menu, PermIdentity, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
//redux
import { setHeight } from "@/lib/features/navHeight/navHeightSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useRef } from "react";

export default function NavBar({
  toggleDrawer,
}: {
  toggleDrawer: (newOpen: boolean) => void;
}) {
  const ref = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state

      if (ref.current) {
        // @ts-ignore
        dispatch(setHeight(ref.current.clientHeight));
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="transparent"
      className="py-4 shadow-xs"
      style={{ background: "#fcfcfc", zIndex: 200000 }}
      ref={ref}
    >
      <Toolbar className="container mx-auto flex justify-center items-center flex-col lg:flex-row">
        <div className="flex items-center justify-between  w-full">
          <button
            className="cursor-pointer"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <Menu color="action" />
          </button>
          <Link href="/" className="logo">
            <Image
              src={logo}
              alt="Erubaba Logo"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden lg:block w-1/2">
            <SearchInput />
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center text-gray-700">
              {["Help", "About Us", "Sell"].map((txt) => (
                <Link
                  key={txt}
                  href={`/${txt.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mr-7"
                  style={{ textDecoration: "none" }}
                >
                  <span className="hover:underline">{txt}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <IconButton>
                <PermIdentity color="action" />
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined color="action" />
                </Badge>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full mt-2">
          <SearchInput />
        </div>
      </Toolbar>
    </AppBar>
  );
}
