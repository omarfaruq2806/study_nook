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
  const [profileDropdwon, setProfileDropdown] = useState(false);

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

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
    <div className="dropdown dropdown-center  lg:dropdown-end">
      {/* Trigger */}
      <div
        tabIndex={0}
        role="button"
        className="bg-secondary text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
      >
        <span className="font-bold text-sm lg:text-base">
          Hi, {session?.user?.name}
        </span>
      </div>

      {/* Dropdown */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-accent rounded-box z-[999] mt-3 p-4 shadow w-50 lg:w-64 flex flex-col items-center gap-3"
      >
        <Image
          src={session?.user?.image || "/hero.jpg"}
          width={60}
          height={60}
          alt="profile"
          className="rounded-full border-4 border-secondary object-cover"
          referrerPolicy="no-referrer"
        />

        <p className="text-xs text-center break-all">{session?.user?.email}</p>

        <button
          className="w-full px-3 py-2 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition flex items-center justify-center gap-2"
          onClick={signout}
        >
          <GoSignOut />
          Sign Out
        </button>
      </ul>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-3 items-center">
      <Link href="/login">
        <button className="border text-secondary px-4 py-2 rounded-full w-24">
          Log In
        </button>
      </Link>

      <Link href="/register">
        <button className="bg-secondary text-white px-4 py-2 rounded-full w-24">
          Register
        </button>
      </Link>
    </div>
  );

  return (
    <div className="shadow-md shadow-secondary/10 bg-[#F8FBFF] sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 font-semibold  lg:container mx-auto">
        <div className=" text-3xl font-bold text-secondary">STUDYNOOK</div>
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
        {/* {isPending && <p>Loading...</p>} */}
        {openmenu && (
          <ul className="flex flex-col items-center gap-4 absolute top-20 right-4 w-56 p-4 rounded-lg shadow-lg lg:hidden bg-[#F8FBFF] z-50">
            {renderLinks(() => setOpenMenu(false))}

            <div className="mt-2 flex flex-col items-center">{authButtons}</div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
