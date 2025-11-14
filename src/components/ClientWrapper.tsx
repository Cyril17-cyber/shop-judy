"use client";
import StoreProvider from "@/app/StoreProvider";
import { useAppDispatch } from "@/lib/hooks";
import {
  setLocation,
  setLocationError,
} from "@/lib/features/location/locationSlice";
import { ReactNode, useEffect } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <LocationGrabber>{children}</LocationGrabber>
    </StoreProvider>
  );
}

const LocationGrabber = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //d5fdbfe0434f43ba999ba518dbf3d437
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude && longitude) {
            // Fetch the city and country based on latitude and longitude
            fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            )
              .then((response) => response.json())
              .then((data) => {
                const city = data.city || data.locality || "Unknown";
                const state = data.principalSubdivision || "Unknown";
                const country = data.countryName || "Unknown";
                dispatch(setLocation({ city, state, country }));
              })
              .catch((error) => {
                console.error("Error fetching location details:", error);
                dispatch(setLocationError(error.message));
              });
          }

          
        },
        (error) => {
          dispatch(setLocationError(error.message));
        }
      );
    } else {
      dispatch(setLocationError("Geolocation not supported"));
    }
  }, [dispatch]);

  return <>{children}</>;
};
