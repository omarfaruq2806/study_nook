"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [openmenu, setOpenMenu] = useState(false);

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  console.log(session?.user?.name);

  const signout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const baseLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
  ];
  const authLinks = [
    { label: "Add A Room", href: "/addroom" },
    { label: "My Listings", href: "/mylistings" },
    { label: "My Bookings", href: "/mybookings" },
  ];

  const menuLinks = session ? [...baseLinks, ...authLinks] : baseLinks;

  const renderLinks = (onClick) => {
    return menuLinks.map((link) => (
      <li key={link.href} onClick={onClick}>
        <Link
          href={link.href}
          className={` text-gray-500 p-1  border-secondary hover:border-b-2 transition  hover:text-secondary ${pathname === link.href ? "border-b-2 text-secondary" : ""}`}
        >
          {link.label}
        </Link>
      </li>
    ));
  };

  const authButtons = session ? (
    <div className="flex gap-2 flex-col lg:flex-row items-center">
      <p className="font-bold text-lg text-secondary">
        Hi , {session?.user?.name}
      </p>
      <button
        className="px-3 py-1 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition flex items-center gap-2"
        onClick={signout}
      >
        <GoSignOut />
        Sign Out
      </button>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-3 items-center">
      <Link href="/login">
        <button className="border text-secondary px-4 py-2 rounded-full w-24">Log In</button>
      </Link>
      <Link href="/register">
        <button className="bg-secondary text-white px-4 py-2 rounded-full w-24">Register</button>
      </Link>
    </div>
  );

  return (
    <div className="shadow-md shadow-secondary/10 bg-[#F8FBFF] sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 font-semibold  lg:container mx-auto">
        <div className=" text-3xl font-bold text-secondary">
          {/* <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className=" h-16 object-contain"
          ></Image> */}
          STUDYNOOK
        </div>
        <button
          onClick={() => setOpenMenu(!openmenu)}
          className="text-right lg:hidden text-2xl text-secondary"
        >
          <RiMenu3Line />
        </button>

        {/* desktop menu */}
        <ul className="hidden lg:flex gap-6  ">{renderLinks()}</ul>

        {/* auth links */}
        <div className="hidden lg:flex gap-4">{authButtons}</div>

        {/* mobile menu */}
        {openmenu && (
          <ul className="flex flex-col gap-4 absolute top-18 right-1  mx-auto text-center p-4  shadow-md lg:hidden w-50 bg-[#F8FBFF] transition">
            {renderLinks(() => setOpenMenu(false))}
            <div
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              {authButtons}
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
