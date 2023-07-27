import { Logo } from "~/routes/components/logo";
import { Link } from "@remix-run/react";

const links = [
  {
    name: "關於",
    href: "/about",
  },
  {
    name: "聯絡",
    href: "/contact",
  },
];

export const Header = () => {
  return (
    <div
      className={
        "w-screen bg-white border-b border-black text-white fixed flex gap-x-4"
      }
    >
      <Link to={"/"}>
        <div className={"h-24"}>
        <Logo />
        </div>
      </Link>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={"underline hover:opacity-50 transition-opacity"}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
