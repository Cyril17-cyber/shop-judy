import logo from "@/app/public/logo.png"; // Adjust the path as necessary
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="logo">
        <Image
          src={logo}
          alt="Judy Logo"
          width={100}
          height={50}
          className="h-10 w-auto"
        />
      </Link>

      <div className="searchBar"></div>

      <section id="navLinks">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/help" className="text-gray-700 hover:text-blue-500">
              Help
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/sell" className="text-gray-700 hover:text-blue-500">
              Sell
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-gray-700 hover:text-blue-500">
              Login In/Sign Up
            </Link>
          </li>
          <li>
            <button>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
