import BookingCard from "@/components/bookings/BookingCard";
import { auth } from "@/lib/auth";
import { getMyBookings } from "@/lib/data";
// import { getMyBookings } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const myBookings = await getMyBookings(userId);
  console.log(myBookings);

  return (
    <div>
      <h1>My Bookings</h1>
      {myBookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking}></BookingCard>
      ))}
    </div>
  );
};

export default page;
