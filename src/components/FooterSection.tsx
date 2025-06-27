import logo from "@/app/public/logo.png";
import Image from "next/image";

const footerLinks = {
  About: ["Our Company", "Our Story", "Blog"],
  Information: [
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "Return",
  ],
  Support: ["Contact Us", "Help", "FAQs"],
};

export default function FooterSection() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 py-8 px-12 lg:px-16 bg-gray-50">
      <div className="flex flex-col items-center md:items-start">
        <Image
          src={logo}
          alt="Erubaba Logo"
          width={100}
          height={50}
          className="h-10 w-auto"
        />
        <p className="mb-2">Buy Smarter, Sell Better</p>
      </div>
      {Object.entries(footerLinks).map(([title, links]) => (
        <div key={title} className="text-center md:text-left">
          <h3 className="font-semibold mb-2">{title}</h3>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-black">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
