"use client";
import logo from "@/app/public/logo.png";
import {
  LocationOnOutlined,
  Menu,
  PermIdentity,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { AppBar, Badge, Dialog, IconButton, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
//redux
import { setHeight } from "@/lib/features/navHeight/navHeightSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";

export default function NavBar({
  toggleDrawer,
}: {
  toggleDrawer: (newOpen: boolean) => void;
}) {
  const ref = useRef(null);
  const dispatch = useAppDispatch();

  const location = useAppSelector((state: any) => state.location);

  const [dialogueOpen, setDialogueOpen] = useState(false);

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

  const handleDialogueOpen = () => {
    setDialogueOpen(true);
  };

  const handleDialogueClose = () => {
    setDialogueOpen(false);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        color="transparent"
        className="pt-4 shadow-xs"
        style={{ background: "#fcfcfc", zIndex: 200000 }}
        ref={ref}
      >
        <Toolbar className="container mx-auto flex justify-center items-center flex-col lg:flex-row mb-4">
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
                alt="Judy Logo"
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
                {["Help", "About Us", "Sell"].map((txt, id) => (
                  <Link
                    key={id}
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
        <section
          className="flex items-center bg-slate-800 text-fuchsia-50 py-3 px-3.5 text-sm cursor-pointer"
          onClick={handleDialogueOpen}
        >
          <LocationOnOutlined className="mr-2" />
          {location.city && location.state && location.country ? (
            <div className="">
              Delivers to
              <span className="font-semibold">
                {" "}
                {location.city}, {location.state}, {location.country}
              </span>
            </div>
          ) : (
            <div className="font-semibold"> couldn't get location</div>
          )}
        </section>
      </AppBar>
      <Dialog
        open={dialogueOpen}
        onClose={handleDialogueClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ zIndex: 190000 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogueClose}>Disagree</Button>
          <Button onClick={handleDialogueClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
