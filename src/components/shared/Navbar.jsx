"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

  return (
    <div>
      <nav className="flex justify-between p-4 shadow-md font-semibold">
        <div>Study Nook</div>
        <button
          onClick={() => setOpenMenu(!openmenu)}
          className="text-right md:hidden"
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6  ">
          <li>
            <Link href="/" className={pathname === "/" ? "border-b" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/rooms"
              className={pathname === "/rooms" ? "border-b" : ""}
            >
              Rooms
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link
                  href="/addroom"
                  className={pathname === "/addroom" ? "border-b" : ""}
                >
                  Add A Room
                </Link>
              </li>
              <li>
                <Link
                  href="/mylistings"
                  className={pathname === "/mylistings" ? "border-b" : ""}
                >
                  My Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/mybookings"
                  className={pathname === "/mybookings" ? "border-b" : ""}
                >
                  My Bookings
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="hidden md:flex gap-4">
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <div>
              {session ? (
                <div className="flex gap-2">
                  <p>Hi , {session?.user?.name}</p>
                  <button onClick={signout}>Sign Out</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login">
                    <button>Log In</button>
                  </Link>
                  <Link href="/register">
                    <button>Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* mobile menu */}
        {openmenu && (
          <ul className="flex flex-col gap-4 absolute top-16 right-3 bg-gray-100  mx-auto text-center p-4  shadow-md md:hidden">
            <li onClick={() => setOpenMenu(false)}>
              <Link href="/" className={pathname === "/" ? "border-b" : ""}>
                Home
              </Link>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <Link
                href="/rooms"
                className={pathname === "/rooms" ? "border-b" : ""}
              >
                Rooms
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link
                    href="/addroom"
                    className={pathname === "/addroom" ? "border-b" : ""}
                  >
                    Add A Room
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mylistings"
                    className={pathname === "/mylistings" ? "border-b" : ""}
                  >
                    My Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mybookings"
                    className={pathname === "/mybookings" ? "border-b" : ""}
                  >
                    My Bookings
                  </Link>
                </li>
              </>
            )}
            <li>
              {isPending ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {session ? (
                    <div className="flex flex-col gap-2">
                      <p>Hi , {session?.user?.name}</p>
                      <button
                        onClick={signout}
                        className="btn rounded-full btn-error"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link href="/login">
                        <button>Log In</button>
                      </Link>
                      <Link href="/register">
                        <button>Sign Up</button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        )}
        {/* mobile menu end */}
      </nav>
    </div>
  );
};

export default Navbar;
