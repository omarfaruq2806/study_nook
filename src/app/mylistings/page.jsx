import ListedRoomCard from "@/components/mylistings/ListedRoomCard";
import { auth } from "@/lib/auth";
import { getMyListings } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "My Listings | Study Nook",
  description:
    "Find quiet study rooms, book instantly, and boost your productivity.",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

   const { token } = await auth.api.getToken({ headers: await headers() });
  console.log(token);

  const userId = session?.user?.id;
  console.log(userId);
  const myListings = await getMyListings(userId,token);
  const emptyListings = myListings.length === 0;

  if (!session) return <div>Not Authenticated</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl lg:5xl font-bold text-secondary py-6">
        My Listings
      </h1>
      {emptyListings && (
        <div className="flex flex-col items-center gap-4  text-secondary p-6 bg-accent rounded-2xl">
          <h1 className="text-2xl font-bold ">No Listings Found</h1>
          <p className="text-lg">Plz Add a Room</p>
          <Link href="/addroom">
            <button className="btn rounded-full bg-secondary text-white ">
              Add A Room Now{" "}
            </button>
          </Link>
        </div>
      )}
      <div className="px-4 space-y-4">
        {myListings.map((listing) => {
          return (
            <ListedRoomCard
              key={listing._id}
              listing={listing}
            ></ListedRoomCard>
          );
        })}
      </div>
    </div>
  );
};

export default page;
