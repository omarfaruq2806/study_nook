import { auth } from "@/lib/auth";
import { getMyListings } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userId = session?.user?.id;
  const myListings = await getMyListings(userId);
  return (
    <div>
      <div>{myListings.map((listing) => listing.name)}</div>
    </div>
  );
};

export default page;
