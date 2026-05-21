import ListedRoomCard from "@/components/mylistings/ListedRoomCard";
import { auth } from "@/lib/auth";
import { getMyListings } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  console.log(userId);
  const myListings = await getMyListings(userId);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl lg:5xl font-bold text-secondary py-6">My Listings</h1>
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
