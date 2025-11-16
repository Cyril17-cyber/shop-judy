"useState";
import { useState } from "react";

import {
  AccountCircle,
  ExpandLess,
  ExpandMore,
  HelpOutline,
  InfoOutline,
  Login,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { categories, SubCategoryType } from "./Dummydata";
import { redirect } from "next/navigation";
import { slugify } from "./Dummydata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const DropDown = ({
  name,
  subCategories,
  toggleDrawer,
}: {
  name: string;
  subCategories: SubCategoryType[];
  toggleDrawer: (newOpen: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-3 px-5">
      <div
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-sm lg:text-base font-medium">{name}</h3>{" "}
        <span>{isOpen ? <ExpandLess /> : <ExpandMore />}</span>
      </div>
      {isOpen && (
        <div>
          {subCategories.map((s, sId) => (
            <div
              key={sId}
              className="py-3 px-5"
              onClick={() => {
                toggleDrawer(false);
                redirect(`/${slugify(name)}/${slugify(s.name)}`);
              }}
            >
              <p className="text-xs lg:text-sm cursor-pointer">{s.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function TemporaryDrawer({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
}) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="py-3 bg-gray-700 text-fuchsia-50 flex items-center justify-center">
        <div className="">
          <AccountCircle />
          <Link href={"/login"} className="ml-3 text-lg font-semibold">
            Hello, sign in
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>Help</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <InfoOutline />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>About Us</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <ShoppingBagOutlined />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>Sell</p>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </div>

      <div className="pt-5">
        <h1 className="text-lg font-semibold ml-5">Shop by Department</h1>
        <List>
          {categories.map((c, id) => (
            <ListItem disablePadding key={id}>
              <DropDown
                name={c.name}
                subCategories={c.subCategories}
                toggleDrawer={toggleDrawer}
                key={id}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>

      <div className="pt-5">
        <h1 className="text-lg font-semibold ml-5">Help & Settings</h1>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>Your Account</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <InfoOutline />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>Customer Service</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <p className={`${poppins.className} text-sm`}>Sign In</p>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        style={{ zIndex: 250000 }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
