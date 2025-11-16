"use client";

import StoreProvider from "@/app/StoreProvider";
import { useAppDispatch } from "@/lib/hooks";
import {
  setLocation,
  setLocationError,
} from "@/lib/features/location/locationSlice";

import { useEffect, useState, ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../../../shop-judy/src/components/Nav";
import TemporaryDrawer from "../../../shop-judy/src/components/TemporaryDrawer";
import FooterSection from "../../../shop-judy/src/components/FooterSection";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpenMenu(newOpen);
  };

  return (
    <StoreProvider>
      <LocationGrabber>
        <CssBaseline />

        <NavBar toggleDrawer={toggleDrawer} />
        <TemporaryDrawer open={openMenu} toggleDrawer={toggleDrawer} />

        {children}

        <FooterSection />
      </LocationGrabber>
    </StoreProvider>
  );
}

const LocationGrabber = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((res) => res.json())
            .then((data) => {
              dispatch(
                setLocation({
                  city: data.city || data.locality || "Unknown",
                  state: data.principalSubdivision || "Unknown",
                  country: data.countryName || "Unknown",
                })
              );
            })
            .catch((err) => dispatch(setLocationError(err.message)));
        },
        (error) => dispatch(setLocationError(error.message))
      );
    } else {
      dispatch(setLocationError("Geolocation not supported"));
    }
  }, [dispatch]);

  return <>{children}</>;
};
