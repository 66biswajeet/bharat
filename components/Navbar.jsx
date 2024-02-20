"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Csr",
      href: "/Csr",
    },

    {
      id: 3,
      title: "About",
      href: "/About",
    },
  ];

  return (
    <nav className="relative w-full bg-slate-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="inline-block cursor-pointer">
            <Link href="/">
              <Image src="/logo.webp" height={75} width={75} alt="logo" />
            </Link>
          </span>
        </div>
        <div className="inline-block lg:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Menu />
              </MenubarTrigger>
              <MenubarContent className="h-screen w-screen bg-slate-100">
                {menuItems.map((item) => (
                  <MenubarItem
                    key={item.id}
                    className="text-xl font-semibold  hover:text-gray-900 w-full text-center "
                  >
                    <Link
                      className={`${
                        pathname === item.href
                          ? "text-green-600 hover:text-gray-900 w-full text-center hover:bg-slate-200"
                          : "text-gray-800 w-full text-center hover:text-gray-900 hover:bg-slate-200"
                      }`}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                    <MenubarSeparator />
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="hidden grow items-end justify-end lg:flex">
          <ul className="mr-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="text-xl font-semibold  hover:text-gray-900"
              >
                <Link
                  className={`${
                    pathname === item.href ? "text-green-600" : "text-gray-800"
                  }`}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
